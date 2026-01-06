/**
 * Shared utilities for Sankofa Tools - The Continuity Kit
 * No backend, no external APIs, no transmission of user data
 */

import jsPDF from 'jspdf'

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy:', err)
    return false
  }
}

/**
 * Format current date for display
 */
export const formatDate = (date: Date = new Date()): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Generate PDF from text content
 */
export const generatePDF = (title: string, content: string, filename: string) => {
  const doc = new jsPDF()
  
  // Add header
  doc.setFontSize(18)
  doc.setTextColor(5, 28, 59) // Navy color
  doc.text(title, 20, 20)
  
  // Add date
  doc.setFontSize(10)
  doc.setTextColor(90, 102, 114) // Muted color
  doc.text(`Generated: ${formatDate()}`, 20, 30)
  
  // Add content
  doc.setFontSize(11)
  doc.setTextColor(7, 7, 5) // Black color
  const splitContent = doc.splitTextToSize(content, 170)
  doc.text(splitContent, 20, 45)
  
  // Add footer
  const pageHeight = doc.internal.pageSize.height
  doc.setFontSize(9)
  doc.setTextColor(90, 102, 114)
  doc.text('Educational tool only. Not medical advice. Do not enter identifying information.', 20, pageHeight - 15)
  doc.text('Sankofa Family Medicine - Medicine That Remembers™', 20, pageHeight - 10)
  
  // Save PDF
  doc.save(filename)
}

/**
 * Print content
 */
export const printContent = () => {
  window.print()
}

/**
 * Show toast notification
 */
export const showToast = (message: string, type: 'success' | 'error' = 'success') => {
  // Simple implementation - you could enhance with a toast library
  const toast = document.createElement('div')
  toast.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in ${
    type === 'success' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
  }`
  toast.textContent = message
  document.body.appendChild(toast)
  
  setTimeout(() => {
    toast.classList.add('opacity-0', 'transition-opacity')
    setTimeout(() => toast.remove(), 300)
  }, 3000)
}
