'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'
import { Copy, Printer, RefreshCw, Download } from 'lucide-react'
import { copyToClipboard, printContent, showToast, generatePDF } from '@/lib/tools/utils'

const DESIRED_OUTCOMES = [
  'Reassurance',
  'Diagnosis',
  'Plan',
  'Referral',
  'Symptom relief',
  'Other'
]

export default function VisitGoalGenerator() {
  const [mainConcern, setMainConcern] = useState('')
  const [whyNow, setWhyNow] = useState('')
  const [desiredOutcome, setDesiredOutcome] = useState('')
  const [generatedGoal, setGeneratedGoal] = useState('')

  const handleGenerate = () => {
    if (!mainConcern || !whyNow || !desiredOutcome) {
      showToast('Please fill in all fields', 'error')
      return
    }

    const sentence1 = `I'm here because ${mainConcern}, and it has become an issue because ${whyNow}.`
    const sentence2 = `Today I'm hoping for ${desiredOutcome.toLowerCase()} and a clear next step.`
    const goal = `${sentence1} ${sentence2}`
    
    setGeneratedGoal(goal)
  }

  const handleCopy = async () => {
    const success = await copyToClipboard(generatedGoal)
    showToast(success ? 'Copied to clipboard!' : 'Failed to copy', success ? 'success' : 'error')
  }

  const handlePrint = () => {
    printContent()
  }

  const handleDownloadPDF = () => {
    generatePDF(
      'My Visit Goal',
      generatedGoal,
      'visit-goal.pdf'
    )
    showToast('PDF downloaded!', 'success')
  }

  const handleReset = () => {
    setMainConcern('')
    setWhyNow('')
    setDesiredOutcome('')
    setGeneratedGoal('')
  }

  return (
    <ToolLayout
      title="Two-Sentence Visit Goal Generator"
      description="Turn scattered thoughts into a clear opening statement for a medical visit."
    >
      <div className="space-y-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label htmlFor="mainConcern" className="block text-sm font-medium text-sfm-navy mb-2">
              1. What is your main concern?
            </label>
            <textarea
              id="mainConcern"
              value={mainConcern}
              onChange={(e) => setMainConcern(e.target.value)}
              className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent resize-none"
              rows={3}
              placeholder="Describe your main health concern..."
            />
          </div>

          <div>
            <label htmlFor="whyNow" className="block text-sm font-medium text-sfm-navy mb-2">
              2. Why is this an issue now?
            </label>
            <textarea
              id="whyNow"
              value={whyNow}
              onChange={(e) => setWhyNow(e.target.value)}
              className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent resize-none"
              rows={3}
              placeholder="What has changed or prompted you to seek care now?"
            />
          </div>

          <div>
            <label htmlFor="desiredOutcome" className="block text-sm font-medium text-sfm-navy mb-2">
              3. What outcome are you hoping for?
            </label>
            <select
              id="desiredOutcome"
              value={desiredOutcome}
              onChange={(e) => setDesiredOutcome(e.target.value)}
              className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent bg-white"
            >
              <option value="">Select an outcome...</option>
              {DESIRED_OUTCOMES.map((outcome) => (
                <option key={outcome} value={outcome}>
                  {outcome}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full bg-sfm-azure text-white py-3 px-6 rounded-lg font-medium hover:bg-sfm-azure-light transition-colors duration-300"
          >
            Generate My Visit Goal
          </button>
        </div>

        {/* Output Section */}
        {generatedGoal && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-t border-sfm-gold/30 pt-8">
              <h2 className="font-display text-2xl text-sfm-navy mb-4">Your Visit Goal</h2>
              <div className="bg-sfm-cream p-6 rounded-xl border-l-4 border-sfm-gold">
                <p className="text-sfm-navy text-lg leading-relaxed whitespace-pre-wrap">
                  {generatedGoal}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-sfm-azure text-sfm-azure rounded-lg font-medium hover:bg-sfm-azure hover:text-white transition-colors duration-300"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-sfm-azure text-sfm-azure rounded-lg font-medium hover:bg-sfm-azure hover:text-white transition-colors duration-300"
              >
                <Printer className="w-4 h-4" />
                Print
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

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .bg-sfm-cream,
          .bg-sfm-cream * {
            visibility: visible !important;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </ToolLayout>
  )
}
