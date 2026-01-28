'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'
import { Copy, Download, RefreshCw, Plus, Edit2, Trash2, ChevronUp, ChevronDown } from 'lucide-react'
import { copyToClipboard, showToast, generatePDF, formatDate } from '@/lib/tools/utils'

interface Medication {
  id: number
  name: string
  dose: string
  frequency: string
  purpose: string
  prescriber: string
  startDate: string
}

const FREQUENCY_OPTIONS = [
  'Once daily',
  'Twice daily',
  'Three times daily',
  'As needed',
  'Other'
]

export default function MedicationOrganizer() {
  const [medications, setMedications] = useState<Medication[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState<Medication>({
    id: 0,
    name: '',
    dose: '',
    frequency: '',
    purpose: '',
    prescriber: '',
    startDate: ''
  })

  const handleAdd = () => {
    if (!formData.name || !formData.dose || !formData.frequency) {
      showToast('Please fill in required fields (name, dose, frequency)', 'error')
      return
    }

    if (editingId) {
      setMedications(medications.map(m => m.id === editingId ? { ...formData, id: editingId } : m))
      showToast('Medication updated!', 'success')
    } else {
      setMedications([...medications, { ...formData, id: Date.now() }])
      showToast('Medication added!', 'success')
    }

    setFormData({
      id: 0,
      name: '',
      dose: '',
      frequency: '',
      purpose: '',
      prescriber: '',
      startDate: ''
    })
    setEditingId(null)
  }

  const handleEdit = (medication: Medication) => {
    setFormData(medication)
    setEditingId(medication.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = (id: number) => {
    setMedications(medications.filter(m => m.id !== id))
    showToast('Medication removed', 'success')
  }

  const moveUp = (index: number) => {
    if (index === 0) return
    const newMeds: Medication[] = [...medications]
    const temp = newMeds[index - 1]
    newMeds[index - 1] = newMeds[index]
    newMeds[index] = temp
    setMedications(newMeds)
  }

  const moveDown = (index: number) => {
    if (index === medications.length - 1) return
    const newMeds: Medication[] = [...medications]
    const temp = newMeds[index]
    newMeds[index] = newMeds[index + 1]
    newMeds[index + 1] = temp
    setMedications(newMeds)
  }

  const generateList = () => {
    let list = `MY CURRENT MEDICATIONS\nUpdated: ${formatDate()}\n\n`
    medications.forEach((med, index) => {
      list += `${index + 1}. ${med.name} - ${med.dose}\n`
      list += `   Frequency: ${med.frequency}\n`
      if (med.purpose) list += `   For: ${med.purpose}\n`
      if (med.prescriber) list += `   Prescribed by: ${med.prescriber}\n`
      if (med.startDate) list += `   Started: ${med.startDate}\n`
      list += '\n'
    })
    return list
  }

  const handleCopy = async () => {
    if (medications.length === 0) {
      showToast('No medications to copy', 'error')
      return
    }
    const success = await copyToClipboard(generateList())
    showToast(success ? 'Copied to clipboard!' : 'Failed to copy', success ? 'success' : 'error')
  }

  const handleDownloadPDF = () => {
    if (medications.length === 0) {
      showToast('No medications to download', 'error')
      return
    }
    generatePDF('My Current Medications', generateList(), 'medication-list.pdf')
    showToast('PDF downloaded!', 'success')
  }

  const handleReset = () => {
    if (medications.length === 0 && !formData.name) return
    if (confirm('Are you sure you want to clear all data?')) {
      setMedications([])
      setFormData({
        id: 0,
        name: '',
        dose: '',
        frequency: '',
        purpose: '',
        prescriber: '',
        startDate: ''
      })
      setEditingId(null)
      showToast('All data cleared', 'success')
    }
  }

  return (
    <ToolLayout
      title="Medication List Organizer"
      description="Help users create a clear, organized medication list to share with your doctor."
    >
      <div className="space-y-8">
        {/* Entry Form */}
        <div className="bg-sfm-cream p-6 rounded-xl">
          <h2 className="font-display text-2xl text-sfm-navy mb-4">
            {editingId ? 'Edit Medication' : 'Add Medication'}
          </h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-sfm-navy mb-2">
                Medication Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent"
                placeholder="e.g., Lisinopril"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="dose" className="block text-sm font-medium text-sfm-navy mb-2">
                  Dose <span className="text-red-500">*</span>
                </label>
                <input
                  id="dose"
                  type="text"
                  value={formData.dose}
                  onChange={(e) => setFormData({ ...formData, dose: e.target.value })}
                  className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent"
                  placeholder="e.g., 10mg"
                />
              </div>

              <div>
                <label htmlFor="frequency" className="block text-sm font-medium text-sfm-navy mb-2">
                  Frequency <span className="text-red-500">*</span>
                </label>
                <select
                  id="frequency"
                  value={formData.frequency}
                  onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                  className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent bg-white"
                >
                  <option value="">Select frequency...</option>
                  {FREQUENCY_OPTIONS.map((freq) => (
                    <option key={freq} value={freq}>{freq}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="purpose" className="block text-sm font-medium text-sfm-navy mb-2">
                Purpose/Reason
              </label>
              <input
                id="purpose"
                type="text"
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent"
                placeholder="e.g., blood pressure"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="prescriber" className="block text-sm font-medium text-sfm-navy mb-2">
                  Prescriber (optional)
                </label>
                <input
                  id="prescriber"
                  type="text"
                  value={formData.prescriber}
                  onChange={(e) => setFormData({ ...formData, prescriber: e.target.value })}
                  className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent"
                  placeholder="Dr. Name"
                />
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-sfm-navy mb-2">
                  Start Date (optional)
                </label>
                <input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleAdd}
                className="flex-1 bg-sfm-azure text-white py-3 px-6 rounded-lg font-medium hover:bg-sfm-azure-light transition-colors duration-300"
              >
                <Plus className="w-4 h-4 inline mr-2" />
                {editingId ? 'Update Medication' : 'Add Medication'}
              </button>
              {editingId && (
                <button
                  onClick={() => {
                    setEditingId(null)
                    setFormData({
                      id: 0,
                      name: '',
                      dose: '',
                      frequency: '',
                      purpose: '',
                      prescriber: '',
                      startDate: ''
                    })
                  }}
                  className="px-6 py-3 bg-white border border-sfm-navy/20 text-sfm-navy rounded-lg font-medium hover:bg-sfm-navy/5 transition-colors duration-300"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Medication List */}
        {medications.length > 0 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="font-display text-2xl text-sfm-navy mb-4">Your Medication List</h2>
              
              <div className="space-y-3">
                {medications.map((med, index) => (
                  <div key={med.id} className="bg-white border border-sfm-navy/10 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => moveUp(index)}
                          disabled={index === 0}
                          className="p-1 text-sfm-azure disabled:text-sfm-navy/20 hover:bg-sfm-azure/10 rounded transition-colors"
                        >
                          <ChevronUp className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => moveDown(index)}
                          disabled={index === medications.length - 1}
                          className="p-1 text-sfm-azure disabled:text-sfm-navy/20 hover:bg-sfm-azure/10 rounded transition-colors"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-sfm-navy text-lg">
                          {index + 1}. {med.name} - {med.dose}
                        </h3>
                        <p className="text-sfm-navy/70 text-sm mt-1">Frequency: {med.frequency}</p>
                        {med.purpose && <p className="text-sfm-navy/70 text-sm">For: {med.purpose}</p>}
                        {med.prescriber && <p className="text-sfm-navy/70 text-sm">Prescribed by: {med.prescriber}</p>}
                        {med.startDate && <p className="text-sfm-navy/70 text-sm">Started: {med.startDate}</p>}
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(med)}
                          className="p-2 text-sfm-azure hover:bg-sfm-azure/10 rounded transition-colors"
                          aria-label="Edit medication"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(med.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                          aria-label="Delete medication"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-sfm-azure text-sfm-azure rounded-lg font-medium hover:bg-sfm-azure hover:text-white transition-colors duration-300"
              >
                <Copy className="w-4 h-4" />
                Copy List
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

        {medications.length === 0 && (
          <div className="text-center py-12 text-sfm-navy/50">
            <p>No medications added yet. Use the form above to add your first medication.</p>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
