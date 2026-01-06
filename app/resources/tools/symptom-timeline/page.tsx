'use client'

import { useState, useRef } from 'react'
import ToolLayout from '@/components/ToolLayout'
import { Copy, Download, RefreshCw, Plus, Trash2, Calendar, Clock, AlertCircle } from 'lucide-react'
import { copyToClipboard, showToast, generatePDF, formatDate } from '@/lib/tools/utils'

interface SymptomEntry {
  id: number
  date: string
  time: string
  symptom: string
  severity: string
  duration: string
  triggers: string
  notes: string
}

const SEVERITY_LEVELS = [
  { value: '1', label: '1 - Mild (barely noticeable)' },
  { value: '2', label: '2 - Minor (noticeable but not limiting)' },
  { value: '3', label: '3 - Moderate (interferes with daily activities)' },
  { value: '4', label: '4 - Severe (significantly limiting)' },
  { value: '5', label: '5 - Very Severe (unable to function)' }
]

const COMMON_SYMPTOMS = [
  'Headache',
  'Fatigue',
  'Nausea',
  'Dizziness',
  'Pain',
  'Shortness of breath',
  'Chest discomfort',
  'Abdominal pain',
  'Joint pain',
  'Muscle aches',
  'Sleep problems',
  'Anxiety',
  'Other'
]

const DURATION_OPTIONS = [
  'Less than 1 hour',
  '1-4 hours',
  '4-12 hours',
  '12-24 hours',
  '1-3 days',
  'More than 3 days',
  'Ongoing/Constant'
]

export default function SymptomTimeline() {
  const [entries, setEntries] = useState<SymptomEntry[]>([])
  const idCounterRef = useRef(0)
  const [currentEntry, setCurrentEntry] = useState<Partial<SymptomEntry>>({
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    symptom: '',
    severity: '',
    duration: '',
    triggers: '',
    notes: ''
  })

  const addEntry = () => {
    if (!currentEntry.symptom || !currentEntry.severity) {
      showToast('Please select a symptom and severity level', 'error')
      return
    }

    idCounterRef.current += 1
    const newEntry: SymptomEntry = {
      id: idCounterRef.current,
      date: currentEntry.date || new Date().toISOString().split('T')[0],
      time: currentEntry.time || new Date().toTimeString().slice(0, 5),
      symptom: currentEntry.symptom || '',
      severity: currentEntry.severity || '',
      duration: currentEntry.duration || '',
      triggers: currentEntry.triggers || '',
      notes: currentEntry.notes || ''
    }

    setEntries([...entries, newEntry].sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`)
      const dateB = new Date(`${b.date}T${b.time}`)
      return dateB.getTime() - dateA.getTime()
    }))

    // Reset form
    setCurrentEntry({
      date: new Date().toISOString().split('T')[0],
      time: new Date().toTimeString().slice(0, 5),
      symptom: '',
      severity: '',
      duration: '',
      triggers: '',
      notes: ''
    })

    showToast('Symptom entry added!', 'success')
  }

  const removeEntry = (id: number) => {
    setEntries(entries.filter(e => e.id !== id))
  }

  const generateTimelineText = () => {
    if (entries.length === 0) return ''

    let text = 'SYMPTOM TIMELINE\n'
    text += '================\n\n'

    entries.forEach((entry, index) => {
      const dateObj = new Date(`${entry.date}T${entry.time}`)
      text += `${index + 1}. ${dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })} at ${entry.time}\n`
      text += `   Symptom: ${entry.symptom}\n`
      text += `   Severity: ${entry.severity}/5\n`
      if (entry.duration) text += `   Duration: ${entry.duration}\n`
      if (entry.triggers) text += `   Possible triggers: ${entry.triggers}\n`
      if (entry.notes) text += `   Notes: ${entry.notes}\n`
      text += '\n'
    })

    text += '---\n'
    text += 'This timeline was created using the Sankofa Tools Symptom Timeline Builder.\n'
    text += 'Educational tool only. Not medical advice.\n'

    return text
  }

  const handleCopy = async () => {
    if (entries.length === 0) {
      showToast('Add some symptoms first', 'error')
      return
    }
    const text = generateTimelineText()
    const success = await copyToClipboard(text)
    showToast(success ? 'Timeline copied to clipboard!' : 'Failed to copy', success ? 'success' : 'error')
  }

  const handleDownloadPDF = () => {
    if (entries.length === 0) {
      showToast('Add some symptoms first', 'error')
      return
    }
    const content = generateTimelineText()
    generatePDF('Symptom Timeline', content, 'symptom-timeline.pdf')
    showToast('PDF downloaded!', 'success')
  }

  const handleReset = () => {
    setEntries([])
    setCurrentEntry({
      date: new Date().toISOString().split('T')[0],
      time: new Date().toTimeString().slice(0, 5),
      symptom: '',
      severity: '',
      duration: '',
      triggers: '',
      notes: ''
    })
  }

  const getSeverityColor = (severity: string) => {
    const level = parseInt(severity, 10)
    if (level <= 2) return 'bg-emerald-100 text-emerald-700 border-emerald-200'
    if (level === 3) return 'bg-amber-100 text-amber-700 border-amber-200'
    return 'bg-red-100 text-red-700 border-red-200'
  }

  return (
    <ToolLayout
      title="Symptom Timeline Builder"
      description="Track your symptoms over time to help your provider understand the full picture of your health concerns."
    >
      <div className="space-y-8">
        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="font-semibold text-sfm-navy mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-500" />
            How to Use This Tool
          </h2>
          <ul className="space-y-2 text-sfm-navy/70 text-sm">
            <li className="flex gap-2">
              <span className="text-blue-500">1.</span>
              <span>Add each symptom occurrence with date, time, and severity</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">2.</span>
              <span>Include any triggers you noticed and additional notes</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">3.</span>
              <span>Review your timeline to identify patterns</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">4.</span>
              <span>Copy, download, or print to share with your healthcare provider</span>
            </li>
          </ul>
        </div>

        {/* Entry Form */}
        <div className="border border-sfm-navy/10 rounded-xl p-6 bg-white">
          <h2 className="font-display text-2xl text-sfm-navy mb-6">Add Symptom Entry</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-sfm-navy mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Date
              </label>
              <input
                type="date"
                id="date"
                value={currentEntry.date}
                onChange={(e) => setCurrentEntry({ ...currentEntry, date: e.target.value })}
                className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent"
              />
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-sfm-navy mb-2">
                <Clock className="w-4 h-4 inline mr-2" />
                Time
              </label>
              <input
                type="time"
                id="time"
                value={currentEntry.time}
                onChange={(e) => setCurrentEntry({ ...currentEntry, time: e.target.value })}
                className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent"
              />
            </div>

            {/* Symptom */}
            <div>
              <label htmlFor="symptom" className="block text-sm font-medium text-sfm-navy mb-2">
                Symptom *
              </label>
              <select
                id="symptom"
                value={currentEntry.symptom}
                onChange={(e) => setCurrentEntry({ ...currentEntry, symptom: e.target.value })}
                className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent bg-white"
              >
                <option value="">Select a symptom...</option>
                {COMMON_SYMPTOMS.map((symptom) => (
                  <option key={symptom} value={symptom}>
                    {symptom}
                  </option>
                ))}
              </select>
            </div>

            {/* Severity */}
            <div>
              <label htmlFor="severity" className="block text-sm font-medium text-sfm-navy mb-2">
                Severity (1-5) *
              </label>
              <select
                id="severity"
                value={currentEntry.severity}
                onChange={(e) => setCurrentEntry({ ...currentEntry, severity: e.target.value })}
                className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent bg-white"
              >
                <option value="">Select severity...</option>
                {SEVERITY_LEVELS.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-sfm-navy mb-2">
                Duration
              </label>
              <select
                id="duration"
                value={currentEntry.duration}
                onChange={(e) => setCurrentEntry({ ...currentEntry, duration: e.target.value })}
                className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent bg-white"
              >
                <option value="">Select duration...</option>
                {DURATION_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Triggers */}
            <div>
              <label htmlFor="triggers" className="block text-sm font-medium text-sfm-navy mb-2">
                Possible Triggers
              </label>
              <input
                type="text"
                id="triggers"
                value={currentEntry.triggers}
                onChange={(e) => setCurrentEntry({ ...currentEntry, triggers: e.target.value })}
                className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent"
                placeholder="e.g., stress, food, weather..."
              />
            </div>
          </div>

          {/* Notes */}
          <div className="mt-6">
            <label htmlFor="notes" className="block text-sm font-medium text-sfm-navy mb-2">
              Additional Notes
            </label>
            <textarea
              id="notes"
              value={currentEntry.notes}
              onChange={(e) => setCurrentEntry({ ...currentEntry, notes: e.target.value })}
              className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent resize-none"
              rows={3}
              placeholder="Any additional details about this symptom occurrence..."
            />
          </div>

          <button
            onClick={addEntry}
            className="mt-6 flex items-center gap-2 px-6 py-3 bg-sfm-azure text-white rounded-lg font-medium hover:bg-sfm-azure-light transition-colors duration-300"
          >
            <Plus className="w-4 h-4" />
            Add to Timeline
          </button>
        </div>

        {/* Timeline Display */}
        {entries.length > 0 && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-t border-sfm-gold/30 pt-8">
              <h2 className="font-display text-2xl text-sfm-navy mb-6">
                Your Symptom Timeline ({entries.length} {entries.length === 1 ? 'entry' : 'entries'})
              </h2>

              <div className="space-y-4">
                {entries.map((entry) => {
                  const dateObj = new Date(`${entry.date}T${entry.time}`)
                  return (
                    <div
                      key={entry.id}
                      className="relative pl-8 pb-6 border-l-2 border-sfm-gold/30 last:pb-0"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-sfm-gold border-4 border-white" />
                      
                      <div className="bg-sfm-cream rounded-xl p-5">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                          <div>
                            <p className="text-sfm-navy font-medium">
                              {dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                            <p className="text-sfm-navy/60 text-sm">{entry.time}</p>
                          </div>
                          <button
                            onClick={() => removeEntry(entry.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            aria-label="Remove entry"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-3">
                          <span className="px-3 py-1 bg-sfm-navy/10 text-sfm-navy text-sm font-medium rounded-full">
                            {entry.symptom}
                          </span>
                          <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getSeverityColor(entry.severity)}`}>
                            Severity: {entry.severity}/5
                          </span>
                          {entry.duration && (
                            <span className="px-3 py-1 bg-sfm-azure/10 text-sfm-azure text-sm rounded-full">
                              {entry.duration}
                            </span>
                          )}
                        </div>

                        {entry.triggers && (
                          <p className="text-sfm-navy/70 text-sm mb-2">
                            <strong>Triggers:</strong> {entry.triggers}
                          </p>
                        )}
                        {entry.notes && (
                          <p className="text-sfm-navy/70 text-sm">
                            <strong>Notes:</strong> {entry.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-sfm-azure text-sfm-azure rounded-lg font-medium hover:bg-sfm-azure hover:text-white transition-colors duration-300"
              >
                <Copy className="w-4 h-4" />
                Copy Timeline
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
                Reset All
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {entries.length === 0 && (
          <div className="text-center py-12 bg-sfm-cream/50 rounded-xl">
            <Calendar className="w-12 h-12 text-sfm-navy/30 mx-auto mb-4" />
            <p className="text-sfm-navy/50">No symptoms recorded yet.</p>
            <p className="text-sfm-navy/40 text-sm">Add your first symptom entry above to start building your timeline.</p>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
