'use client'

import { Clock } from 'lucide-react'

interface ReadingTimeProps {
  content: string
  className?: string
}

export default function ReadingTime({ content, className = '' }: ReadingTimeProps) {
  // Average reading speed: 200 words per minute
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)

  return (
    <span className={`inline-flex items-center gap-1.5 text-sm text-sfm-text-muted ${className}`}>
      <Clock className="w-4 h-4" />
      <span>{minutes} min read</span>
    </span>
  )
}

// Utility function for use in metadata
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}
