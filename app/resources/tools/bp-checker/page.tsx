'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'
import { Copy, Download, RefreshCw, Plus, Trash2, AlertTriangle } from 'lucide-react'
import { copyToClipboard, showToast, generatePDF } from '@/lib/tools/utils'

interface BPReading {
  id: number
  systolic: string
  diastolic: string
}

const CHECKLIST_ITEMS = [
  'Sat quietly for 5 minutes',
  'Feet flat, back supported',
  'Arm at heart level',
  'Correct cuff size',
  'No caffeine/exercise/smoking in last 30 minutes'
]

export default function BPChecker() {
  const [checklistComplete, setChecklistComplete] = useState<boolean[]>(Array(5).fill(false))
  const [readings, setReadings] = useState<BPReading[]>([{ id: 1, systolic: '', diastolic: '' }])
  const [results, setResults] = useState<{
    avgSystolic: number
    avgDiastolic: number
    category: string
    showWarning: boolean
  } | null>(null)

  const allChecked = checklistComplete.every(item => item)

  const addReading = () => {
    if (readings.length < 7) {
      setReadings([...readings, { id: Date.now(), systolic: '', diastolic: '' }])
    }
  }

  const removeReading = (id: number) => {
    if (readings.length > 1) {
      setReadings(readings.filter(r => r.id !== id))
    }
  }

  const updateReading = (id: number, field: 'systolic' | 'diastolic', value: string) => {
    setReadings(readings.map(r => r.id === id ? { ...r, [field]: value } : r))
  }

  const calculateResults = () => {
    if (!allChecked) {
      showToast('Please complete the measurement checklist first', 'error')
      return
    }

    const validReadings = readings.filter(r => r.systolic && r.diastolic)
    if (validReadings.length === 0) {
      showToast('Please enter at least one reading', 'error')
      return
    }

    const systolicValues = validReadings.map(r => parseInt(r.systolic))
    const diastolicValues = validReadings.map(r => parseInt(r.diastolic))

    const avgSystolic = Math.round(systolicValues.reduce((a, b) => a + b, 0) / systolicValues.length)
    const avgDiastolic = Math.round(diastolicValues.reduce((a, b) => a + b, 0) / diastolicValues.length)

    let category = ''
    if (avgSystolic < 120 && avgDiastolic < 80) {
      category = 'Normal'
    } else if (avgSystolic >= 120 && avgSystolic <= 129 && avgDiastolic < 80) {
      category = 'Elevated'
    } else if ((avgSystolic >= 130 && avgSystolic <= 139) || (avgDiastolic >= 80 && avgDiastolic <= 89)) {
      category = 'Stage 1 Hypertension'
    } else if (avgSystolic >= 140 || avgDiastolic >= 90) {
      category = 'Stage 2 Hypertension'
    }

    const showWarning = avgSystolic >= 180 || avgDiastolic >= 120

    setResults({ avgSystolic, avgDiastolic, category, showWarning })
  }

  const handleCopy = async () => {
    if (!results) return
    const text = `Blood Pressure Results\n\nAverage BP: ${results.avgSystolic} / ${results.avgDiastolic}\nCategory: ${results.category}\n\nNote: Averages matter more than single readings. Home and office readings may differ.`
    const success = await copyToClipboard(text)
    showToast(success ? 'Copied to clipboard!' : 'Failed to copy', success ? 'success' : 'error')
  }

  const handleDownloadPDF = () => {
    if (!results) return
    const content = `Blood Pressure Results\n\nAverage BP: ${results.avgSystolic} / ${results.avgDiastolic}\nCategory: ${results.category}\n\nEducational Information:\n- Averages matter more than single readings\n- Home and office readings may differ\n- Regular monitoring helps track trends\n\nNote: This is an educational tool. Share these results with your healthcare provider for proper interpretation.`
    
    generatePDF('Blood Pressure Results', content, 'bp-results.pdf')
    showToast('PDF downloaded!', 'success')
  }

  const handleReset = () => {
    setChecklistComplete(Array(5).fill(false))
    setReadings([{ id: 1, systolic: '', diastolic: '' }])
    setResults(null)
  }

  return (
    <ToolLayout
      title="Blood Pressure Reality Checker"
      description="Teach correct measurement technique and calculate a meaningful home BP average."
    >
      <div className="space-y-8">
        {/* Measurement Checklist */}
        <div>
          <h2 className="font-display text-2xl text-sfm-navy mb-4">Step 1: Measurement Checklist</h2>
          <p className="text-sfm-navy/70 mb-4">Confirm all items before taking readings:</p>
          <div className="space-y-3">
            {CHECKLIST_ITEMS.map((item, index) => (
              <label key={index} className="flex items-center gap-3 p-3 bg-sfm-cream rounded-lg cursor-pointer hover:bg-sfm-cream-dark transition-colors">
                <input
                  type="checkbox"
                  checked={checklistComplete[index]}
                  onChange={(e) => {
                    const newChecklist = [...checklistComplete]
                    newChecklist[index] = e.target.checked
                    setChecklistComplete(newChecklist)
                  }}
                  className="w-5 h-5 rounded border-sfm-navy/20 text-sfm-azure focus:ring-sfm-azure"
                />
                <span className="text-sfm-navy">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* BP Entry */}
        <div>
          <h2 className="font-display text-2xl text-sfm-navy mb-4">Step 2: Enter Your Readings</h2>
          <p className="text-sfm-navy/70 mb-4">Enter up to 7 readings (minimum 1):</p>
          
          <div className="space-y-3">
            {readings.map((reading, index) => (
              <div key={reading.id} className="flex items-center gap-3">
                <span className="text-sfm-navy font-medium w-8">{index + 1}.</span>
                <input
                  type="number"
                  placeholder="Systolic"
                  value={reading.systolic}
                  onChange={(e) => updateReading(reading.id, 'systolic', e.target.value)}
                  className="flex-1 px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent"
                  disabled={!allChecked}
                />
                <span className="text-sfm-navy font-bold">/</span>
                <input
                  type="number"
                  placeholder="Diastolic"
                  value={reading.diastolic}
                  onChange={(e) => updateReading(reading.id, 'diastolic', e.target.value)}
                  className="flex-1 px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent"
                  disabled={!allChecked}
                />
                {readings.length > 1 && (
                  <button
                    onClick={() => removeReading(reading.id)}
                    className="p-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    disabled={!allChecked}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {readings.length < 7 && (
            <button
              onClick={addReading}
              disabled={!allChecked}
              className="mt-4 flex items-center gap-2 px-4 py-2 text-sfm-azure border border-sfm-azure rounded-lg hover:bg-sfm-azure hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="w-4 h-4" />
              Add Reading
            </button>
          )}

          <button
            onClick={calculateResults}
            disabled={!allChecked}
            className="mt-6 w-full bg-sfm-azure text-white py-3 px-6 rounded-lg font-medium hover:bg-sfm-azure-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Calculate Results
          </button>
        </div>

        {/* Results */}
        {results && (
          <div className="space-y-6 animate-fade-in">
            {/* Safety Warning */}
            {results.showWarning && (
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg flex gap-4">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-2">Very High Reading</h3>
                  <p className="text-red-800">
                    If you are experiencing symptoms such as chest pain, shortness of breath, or severe headache, 
                    seek emergency care immediately.
                  </p>
                </div>
              </div>
            )}

            <div className="border-t border-sfm-gold/30 pt-8">
              <h2 className="font-display text-2xl text-sfm-navy mb-4">Your Results</h2>
              
              <div className="bg-sfm-cream p-6 rounded-xl border-l-4 border-sfm-gold space-y-4">
                <div>
                  <p className="text-sfm-navy/70 text-sm mb-1">Average Blood Pressure</p>
                  <p className="text-sfm-navy text-3xl font-display">
                    {results.avgSystolic} / {results.avgDiastolic}
                  </p>
                </div>
                <div>
                  <p className="text-sfm-navy/70 text-sm mb-1">Category</p>
                  <p className="text-sfm-navy text-xl font-medium">
                    {results.category}
                  </p>
                </div>
              </div>

              {/* Education Section */}
              <div className="mt-6 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-sfm-navy mb-3">Educational Information</h3>
                <ul className="space-y-2 text-sfm-navy/70">
                  <li className="flex gap-2">
                    <span className="text-sfm-azure">•</span>
                    Averages matter more than single readings
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sfm-azure">•</span>
                    Home and office readings may differ
                  </li>
                  <li className="flex gap-2">
                    <span className="text-sfm-azure">•</span>
                    Share these results with your healthcare provider
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-sfm-azure text-sfm-azure rounded-lg font-medium hover:bg-sfm-azure hover:text-white transition-colors duration-300"
              >
                <Copy className="w-4 h-4" />
                Copy Results
              </button>
              <button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-sfm-azure text-sfm-azure rounded-lg font-medium hover:bg-sfm-azure hover:text-white transition-colors duration-300"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-sfm-navy/20 text-sfm-navy rounded-lg font-medium hover:bg-sfm-navy/5 transition-colors duration-300"
              >
                <RefreshCw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
