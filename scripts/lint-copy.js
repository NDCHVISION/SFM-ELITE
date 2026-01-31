const fs = require('fs');
const path = require('path');

const rules = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../compliance/sfm_language_guard_lint.json'), 'utf8')
);

const dirsToScan = ['app', 'components', 'content', 'pages'];
const extensionsToCheck = ['.tsx', '.ts', '.jsx', '.js', '.md', '.mdx', '.json'];

let violations = [];

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    const lineNum = index + 1;
    
    Object.entries(rules.prohibited_phrases).forEach(([category, phrases]) => {
      phrases.forEach(phrase => {
        if (line.toLowerCase().includes(phrase.toLowerCase())) {
          violations.push({
            file: filePath,
            line: lineNum,
            issue: `Prohibited: "${phrase}" (${category})`,
            text: line.trim()
          });
        }
      });
    });
  });
}

function scanDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (extensionsToCheck.some(ext => item.endsWith(ext))) {
      scanFile(fullPath);
    }
  });
}

console.log('🔍 Scanning for guardrail violations...\n');

dirsToScan.forEach(dir => {
  const fullDir = path.join(process.cwd(), dir);
  if (fs.existsSync(fullDir)) {
    console.log(`Scanning ${dir}/...`);
    scanDirectory(fullDir);
  }
});

if (violations.length === 0) {
  console.log('\n✅ No violations found.\n');
  process.exit(0);
} else {
  console.log(`\n❌ Found ${violations.length} violation(s):\n`);
  violations.forEach((v, i) => {
    console.log(`${i + 1}. ${v.file}:${v.line}`);
    console.log(`   ${v.issue}`);
    console.log(`   Text: ${v.text}\n`);
  });
  console.log('⚠️  Build blocked.\n');
  process.exit(1);
}
