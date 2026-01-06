'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'
import { Copy, Download, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react'
import { copyToClipboard, showToast, generatePDF } from '@/lib/tools/utils'

const RELATIVE_TIME_OPTIONS = [
  'Today',
  'A few days ago',
  'About a week ago',
  'A few weeks ago',
  'About a month ago',
  'Several months ago',
  'Longer than a year'
]

const ASSOCIATED_SYMPTOMS = [
  'Fatigue',
  'Fever/Chills',
  'Nausea',
  'Headache',
  'Dizziness',
  'Sleep problems',
  'Appetite changes',
  'Mood changes',
  'Other'
]

const COURSE_OPTIONS = [
  'Improving',
  'Worsening',
  'Stable',
  'Fluctuating'
]

const TOTAL_STEPS = 9

export default function SymptomTimeline() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showSummary, setShowSummary] = useState(false)

  // Form state
  const [symptomName, setSymptomName] = useState('')
  const [whenStartedType, setWhenStartedType] = useState<'date' | 'relative'>('date')
  const [whenStartedDate, setWhenStartedDate] = useState('')
  const [whenStartedRelative, setWhenStartedRelative] = useState('')
  const [onsetType, setOnsetType] = useState('')
  const [severity, setSeverity] = useState('5')
  const [betterWith, setBetterWith] = useState('')
  const [worseWith, setWorseWith] = useState('')
  const [associatedSymptoms, setAssociatedSymptoms] = useState<string[]>([])
  const [otherSymptom, setOtherSymptom] = useState('')
  const [whatTried, setWhatTried] = useState('')
  const [courseOverTime, setCourseOverTime] = useState('')

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return symptomName.trim() !== ''
      case 2:
        return whenStartedType === 'date' 
          ? whenStartedDate.trim() !== '' 
          : whenStartedRelative.trim() !== ''
      default:
        return true // Other steps are optional
    }
  }

  const handleNext = () => {
    if (!isStepValid(currentStep)) {
      if (currentStep === 1) {
        showToast('Please enter the symptom name', 'error')
      } else if (currentStep === 2) {
        showToast('Please select when the symptom started', 'error')
      }
      return
    }
    
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleGenerateSummary = () => {
    if (!isStepValid(1) || !isStepValid(2)) {
      showToast('Please complete required fields: Symptom name and When it started', 'error')
      return
    }
    setShowSummary(true)
  }

  const toggleAssociatedSymptom = (symptom: string) => {
    if (associatedSymptoms.includes(symptom)) {
      setAssociatedSymptoms(associatedSymptoms.filter(s => s !== symptom))
    } else {
      setAssociatedSymptoms([...associatedSymptoms, symptom])
    }
  }

  const getWhenStartedText = () => {
    if (whenStartedType === 'date' && whenStartedDate) {
      const date = new Date(whenStartedDate)
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    }
    return whenStartedRelative || 'Not specified'
  }

  const getAssociatedSymptomsText = () => {
    if (associatedSymptoms.length === 0) return 'None'
    const symptoms = [...associatedSymptoms]
    if (symptoms.includes('Other') && otherSymptom) {
      symptoms[symptoms.indexOf('Other')] = otherSymptom
    }
    return symptoms.join(', ')
  }

  const generateSummaryText = () => {
    return `Chief Concern: ${symptomName}
Started: ${getWhenStartedText()}
Onset: ${onsetType || 'Not specified'}
Course: ${courseOverTime || 'Not specified'}
Severity: ${severity}/10
Better with: ${betterWith || 'Not specified'}
Worse with: ${worseWith || 'Not specified'}
Associated symptoms: ${getAssociatedSymptomsText()}
What I tried: ${whatTried || 'Not specified'}

Questions for the Visit:
1. What diagnoses are you considering based on this timeline?
2. What are the red flags I should watch for?
3. What is the next best step for evaluation or treatment?`
  }

  const handleCopy = async () => {
    const success = await copyToClipboard(generateSummaryText())
    showToast(success ? 'Copied to clipboard!' : 'Failed to copy', success ? 'success' : 'error')
  }

  const handleDownloadPDF = () => {
    generatePDF(
      'Symptom Timeline',
      generateSummaryText(),
      'symptom-timeline.pdf'
    )
    showToast('PDF downloaded!', 'success')
  }

  const handleReset = () => {
    setCurrentStep(1)
    setShowSummary(false)
    setSymptomName('')
    setWhenStartedType('date')
    setWhenStartedDate('')
    setWhenStartedRelative('')
    setOnsetType('')
    setSeverity('5')
    setBetterWith('')
    setWorseWith('')
    setAssociatedSymptoms([])
    setOtherSymptom('')
    setWhatTried('')
    setCourseOverTime('')
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-sfm-navy mb-2">Step 1: Symptom Name</h2>
            <p className="text-sfm-navy/70 mb-4">What is your main symptom or health concern?</p>
            <input
              type="text"
              value={symptomName}
              onChange={(e) => setSymptomName(e.target.value)}
              placeholder="e.g., Persistent headache, Joint pain, Fatigue..."
              className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent"
            />
            <p className="text-sm text-red-600">* Required</p>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-sfm-navy mb-2">Step 2: When It Started</h2>
            <p className="text-sfm-navy/70 mb-4">When did this symptom begin?</p>
            
            <div className="space-y-4">
              <label className="flex items-center gap-3 p-3 bg-sfm-cream rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="whenStartedType"
                  checked={whenStartedType === 'date'}
                  onChange={() => setWhenStartedType('date')}
                  className="w-5 h-5 text-sfm-azure focus:ring-sfm-azure"
                />
                <span className="text-sfm-navy font-medium">Specific Date</span>
              </label>
              
              {whenStartedType === 'date' && (
                <input
                  type="date"
                  value={whenStartedDate}
                  onChange={(e) => setWhenStartedDate(e.target.value)}
                  className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent"
                />
              )}

              <label className="flex items-center gap-3 p-3 bg-sfm-cream rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="whenStartedType"
                  checked={whenStartedType === 'relative'}
                  onChange={() => setWhenStartedType('relative')}
                  className="w-5 h-5 text-sfm-azure focus:ring-sfm-azure"
                />
                <span className="text-sfm-navy font-medium">Approximate Time</span>
              </label>

              {whenStartedType === 'relative' && (
                <select
                  value={whenStartedRelative}
                  onChange={(e) => setWhenStartedRelative(e.target.value)}
                  className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent bg-white"
                >
                  <option value="">Select...</option>
                  {RELATIVE_TIME_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <p className="text-sm text-red-600">* Required</p>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-sfm-navy mb-2">Step 3: Onset Type</h2>
            <p className="text-sfm-navy/70 mb-4">Did the symptom start suddenly or gradually?</p>
            
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 bg-sfm-cream rounded-lg cursor-pointer hover:bg-sfm-cream-dark transition-colors">
                <input
                  type="radio"
                  name="onsetType"
                  value="Sudden"
                  checked={onsetType === 'Sudden'}
                  onChange={(e) => setOnsetType(e.target.value)}
                  className="w-5 h-5 text-sfm-azure focus:ring-sfm-azure"
                />
                <div>
                  <span className="text-sfm-navy font-medium block">Sudden</span>
                  <span className="text-sfm-navy/60 text-sm">Started abruptly or all at once</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-4 bg-sfm-cream rounded-lg cursor-pointer hover:bg-sfm-cream-dark transition-colors">
                <input
                  type="radio"
                  name="onsetType"
                  value="Gradual"
                  checked={onsetType === 'Gradual'}
                  onChange={(e) => setOnsetType(e.target.value)}
                  className="w-5 h-5 text-sfm-azure focus:ring-sfm-azure"
                />
                <div>
                  <span className="text-sfm-navy font-medium block">Gradual</span>
                  <span className="text-sfm-navy/60 text-sm">Started slowly or built up over time</span>
                </div>
              </label>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-sfm-navy mb-2">Step 4: Severity</h2>
            <p className="text-sfm-navy/70 mb-4">On a scale of 0-10, how severe is this symptom?</p>
            
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="10"
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
                className="w-full h-2 bg-sfm-navy/20 rounded-lg appearance-none cursor-pointer accent-sfm-azure"
              />
              
              <div className="flex justify-between text-sm text-sfm-navy/60">
                <span>0 - None</span>
                <span className="text-2xl font-display text-sfm-navy">{severity}</span>
                <span>10 - Worst</span>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-sfm-navy mb-2">Step 5: What Makes It Better</h2>
            <p className="text-sfm-navy/70 mb-4">What helps relieve or improve the symptom? (Optional)</p>
            <textarea
              value={betterWith}
              onChange={(e) => setBetterWith(e.target.value)}
              placeholder="e.g., Rest, medication, heat, cold, position changes..."
              className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent resize-none"
              rows={4}
            />
          </div>
        )

      case 6:
        return (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-sfm-navy mb-2">Step 6: What Makes It Worse</h2>
            <p className="text-sfm-navy/70 mb-4">What aggravates or worsens the symptom? (Optional)</p>
            <textarea
              value={worseWith}
              onChange={(e) => setWorseWith(e.target.value)}
              placeholder="e.g., Activity, certain foods, stress, time of day..."
              className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent resize-none"
              rows={4}
            />
          </div>
        )

      case 7:
        return (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-sfm-navy mb-2">Step 7: Associated Symptoms</h2>
            <p className="text-sfm-navy/70 mb-4">Are there any other symptoms that occur along with this? (Optional)</p>
            
            <div className="space-y-3">
              {ASSOCIATED_SYMPTOMS.map((symptom) => (
                <label key={symptom} className="flex items-center gap-3 p-3 bg-sfm-cream rounded-lg cursor-pointer hover:bg-sfm-cream-dark transition-colors">
                  <input
                    type="checkbox"
                    checked={associatedSymptoms.includes(symptom)}
                    onChange={() => toggleAssociatedSymptom(symptom)}
                    className="w-5 h-5 rounded border-sfm-navy/20 text-sfm-azure focus:ring-sfm-azure"
                  />
                  <span className="text-sfm-navy">{symptom}</span>
                </label>
              ))}
            </div>

            {associatedSymptoms.includes('Other') && (
              <input
                type="text"
                value={otherSymptom}
                onChange={(e) => setOtherSymptom(e.target.value)}
                placeholder="Describe other symptom..."
                className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent"
              />
            )}
          </div>
        )

      case 8:
        return (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-sfm-navy mb-2">Step 8: What Has Been Tried</h2>
            <p className="text-sfm-navy/70 mb-4">What remedies, treatments, or medications have you tried? (Optional)</p>
            <textarea
              value={whatTried}
              onChange={(e) => setWhatTried(e.target.value)}
              placeholder="e.g., OTC medications, home remedies, lifestyle changes..."
              className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent resize-none"
              rows={4}
            />
          </div>
        )

      case 9:
        return (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-sfm-navy mb-2">Step 9: Course Over Time</h2>
            <p className="text-sfm-navy/70 mb-4">How has the symptom changed over time? (Optional)</p>
            
            <div className="space-y-3">
              {COURSE_OPTIONS.map((course) => (
                <label key={course} className="flex items-center gap-3 p-4 bg-sfm-cream rounded-lg cursor-pointer hover:bg-sfm-cream-dark transition-colors">
                  <input
                    type="radio"
                    name="courseOverTime"
                    value={course}
                    checked={courseOverTime === course}
                    onChange={(e) => setCourseOverTime(e.target.value)}
                    className="w-5 h-5 text-sfm-azure focus:ring-sfm-azure"
                  />
                  <span className="text-sfm-navy font-medium">{course}</span>
                </label>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <ToolLayout
      title="Symptom Timeline Builder"
      description="Track your symptoms over time to help your provider understand the full picture of your health concerns."
    >
      <div className="space-y-8">
        {/* Progress Indicator */}
        {!showSummary && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-sfm-navy">
                Step {currentStep} of {TOTAL_STEPS}
              </span>
              <span className="text-sm text-sfm-navy/60">
                {Math.round((currentStep / TOTAL_STEPS) * 100)}% Complete
              </span>
            </div>
            <div className="w-full h-2 bg-sfm-navy/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-sfm-azure transition-all duration-300"
                style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Step Content */}
        {!showSummary && (
          <>
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-sfm-navy/10">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-sfm-navy/20 text-sfm-navy rounded-lg font-medium hover:bg-sfm-navy/5 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>

              {currentStep < TOTAL_STEPS ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 bg-sfm-azure text-white rounded-lg font-medium hover:bg-sfm-azure-light transition-colors duration-300"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleGenerateSummary}
                  className="px-6 py-3 bg-sfm-gold text-sfm-navy rounded-lg font-medium hover:bg-sfm-gold-light transition-colors duration-300"
                >
                  Generate Summary
                </button>
              )}
            </div>
          </>
        )}

        {/* Summary Output */}
        {showSummary && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-t border-sfm-gold/30 pt-8">
              <h2 className="font-display text-2xl text-sfm-navy mb-4">Your Symptom Timeline</h2>
              <div className="bg-sfm-cream p-6 rounded-xl border-l-4 border-sfm-gold">
                <pre className="text-sfm-navy leading-relaxed whitespace-pre-wrap font-sans">
                  {generateSummaryText()}
                </pre>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-sfm-azure text-sfm-azure rounded-lg font-medium hover:bg-sfm-azure hover:text-white transition-colors duration-300"
              >
                <Copy className="w-4 h-4" />
                Copy to Clipboard
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
