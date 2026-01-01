# MAP GENERATION PROMPTS
## Sankofa Family Medicine

---

## COLOR REFERENCE (Use These Exact Values)

| Color | Hex Code | Usage |
|-------|----------|-------|
| Azure Blue | #05436e | State fill color |
| Gold | #bc9833 | Borders, city markers, accents |
| Navy | #051c3b | Text labels |
| White | #FFFFFF | Background |

---

## WASHINGTON STATE MAP

**Filename to save as:** `map-washington.png`
**Dimensions:** 1200 x 800 pixels

### Prompt:

```
Minimalist vector style map of Washington State silhouette. Clean, elegant design 
for a premium medical practice website.

Design specifications:
- Flat design with no gradients or 3D effects
- State fill: solid #05436e (deep azure blue)
- State border: #bc9833 (gold), 2-3 pixel weight
- Background: transparent or pure white #FFFFFF

City markers (small gold #bc9833 dots, 8-12 pixels):
- Seattle (largest marker, can have subtle pulse/glow effect)
- Bellevue (near Seattle)
- Kirkland (near Seattle)
- Redmond (near Seattle)
- Tacoma (south of Seattle)
- Olympia (state capital, south)
- Spokane (east side)
- Vancouver (southwest corner)
- Everett (north of Seattle)

City labels:
- Font: clean sans-serif (similar to Helvetica or Inter)
- Color: #051c3b (navy)
- Size: small, elegant, readable

Optional text:
- "Washington State" in elegant serif font below or beside map
- "Now Serving" small badge near Seattle cluster

Style reference: Think luxury real estate map or private wealth management. 
Professional, minimal, sophisticated. NOT cartoonish, playful, or tourism-style.

Exclude: Roads, county lines, terrain texture, bright colors, clipart style, 
3D effects, drop shadows on state shape.
```

---

## SOUTH CAROLINA MAP

**Filename to save as:** `map-south-carolina.png`
**Dimensions:** 1200 x 800 pixels

### Prompt:

```
Minimalist vector style map of South Carolina State silhouette. Clean, elegant 
design matching the Washington State map style for a premium medical practice website.

Design specifications:
- Flat design with no gradients or 3D effects
- State fill: solid #05436e (deep azure blue)
- State border: #bc9833 (gold), 2-3 pixel weight
- Background: transparent or pure white #FFFFFF

City markers (small gold #bc9833 dots, 8-12 pixels):
- Charleston (coastal, slightly larger marker)
- Columbia (state capital, center)
- Greenville (northwest)
- Spartanburg (north)
- Myrtle Beach (northeast coast)

City labels:
- Font: clean sans-serif (similar to Helvetica or Inter)
- Color: #051c3b (navy)
- Size: small, elegant, readable

Required text:
- "Coming 2026" in gold #bc9833 color
- Position: below state or in lower right area
- Font: elegant, refined (serif or clean sans-serif)

Optional:
- "South Carolina" label in elegant serif font

Style reference: Must match Washington State map exactly in visual style. 
Professional, minimal, sophisticated. Premium medical practice aesthetic.

Exclude: Palmetto trees, beach imagery, Confederate symbols, tourism graphics,
bright colors, 3D effects, cartoonish elements.
```

---

## COMBINED SERVICE AREA MAP (Optional)

**Filename to save as:** `map-service-areas.png`
**Dimensions:** 1600 x 600 pixels (wide banner)

### Prompt:

```
Side-by-side minimalist map showing Washington State and South Carolina as 
service areas for a virtual medical practice. Clean, elegant design.

Layout:
- Washington State on left side
- South Carolina on right side  
- Equal visual weight to both states
- Generous white space between them
- Connected by subtle gold dotted line or small "+" symbol

Design specifications (same for both states):
- Flat design, no gradients
- State fill: solid #05436e (azure blue)
- State border: #bc9833 (gold), 2-3 pixel weight
- Background: pure white #FFFFFF

Labels:
- "Washington" centered below left state
- "South Carolina" centered below right state
- Font: elegant serif style, color #051c3b (navy)

Status indicators:
- Small "Active" or green dot near Washington
- "2026" in gold near South Carolina

Optional footer text:
- "Virtual Care Across State Lines" centered below both maps
- Small, elegant, #051c3b navy color

Style: Premium, professional, medical practice appropriate. 
Suggests expansion and accessibility.

Exclude: Arrows, flight paths, airplane icons, tourism imagery, 
bright colors, busy backgrounds.
```

---

## TECHNICAL NOTES

### For AI Image Generators:

**Midjourney:**
- Add `--ar 3:2` for individual maps
- Add `--ar 8:3` for combined banner
- Add `--style raw` for cleaner output
- Add `--v 6` for latest version

**DALL-E / ChatGPT:**
- Prompts work as written
- May need to specify "vector illustration style"
- Request highest resolution available

**Ideogram:**
- Add "vector illustration, flat design" at start
- Specify "no text watermarks"

### After Generation:

1. Check colors match brand palette
2. Ensure city markers are visible but not overwhelming
3. Verify text is readable at web sizes
4. Export as PNG with transparency if possible
5. Optimize file size (target under 200KB)
6. Create @2x version for retina displays

### Placement in Website:

| Map | Page | Section |
|-----|------|---------|
| Washington | /locations/washington | Service Area section |
| South Carolina | /locations/south-carolina | Hero or Coming Soon section |
| Combined | /locations or /about | Expansion/coverage section |

---

*Ready for generation. Use exact hex codes for brand consistency.*
