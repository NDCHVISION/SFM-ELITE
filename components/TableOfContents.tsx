'use client'

import { useState, useEffect } from 'react'
import { List, ChevronRight } from 'lucide-react'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  selector?: string // CSS selector for headings, default h2, h3
  className?: string
}

export default function TableOfContents({ 
  selector = 'h2, h3',
  className = '' 
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Get all headings
    const elements = document.querySelectorAll(selector)
    const items: TOCItem[] = []
    
    elements.forEach((el, index) => {
      // Ensure heading has an ID
      if (!el.id) {
        el.id = `heading-${index}`
      }
      
      items.push({
        id: el.id,
        text: el.textContent || '',
        level: parseInt(el.tagName.charAt(1))
      })
    })
    
    setHeadings(items)
  }, [selector])

  useEffect(() => {
    // Intersection observer for active state
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -80% 0px' }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length < 3) return null // Don't show for short content

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav 
      className={`bg-sfm-cream rounded-xl p-6 ${className}`}
      aria-label="Table of contents"
    >
      <div className="flex items-center gap-2 mb-4 text-sfm-navy font-medium">
        <List className="w-5 h-5" />
        <span>On this page</span>
      </div>
      
      <ul className="space-y-2">
        {headings.map(({ id, text, level }) => (
          <li 
            key={id}
            style={{ paddingLeft: `${(level - 2) * 12}px` }}
          >
            <button
              onClick={() => scrollToHeading(id)}
              className={`flex items-center gap-1 text-sm transition-colors text-left w-full ${
                activeId === id
                  ? 'text-sfm-azure font-medium'
                  : 'text-sfm-text-muted hover:text-sfm-navy'
              }`}
            >
              {activeId === id && (
                <ChevronRight className="w-3 h-3 flex-shrink-0" />
              )}
              <span className={activeId === id ? '' : 'ml-4'}>{text}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
