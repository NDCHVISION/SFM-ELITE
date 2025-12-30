'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Generate structured data for breadcrumbs
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sankofafamilymedicine.com'
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.href && { item: `https://sankofafamilymedicine.com${item.href}` })
      }))
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center gap-2 text-sm ${className}`}
      >
        <ol className="flex items-center gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
          {/* Home */}
          <li 
            className="flex items-center"
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            <Link 
              href="/" 
              className="text-sfm-text-muted hover:text-sfm-azure transition-colors flex items-center gap-1"
              itemProp="item"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only" itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>

          {items.map((item, index) => (
            <li 
              key={index} 
              className="flex items-center gap-2"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight className="w-4 h-4 text-sfm-text-light" aria-hidden="true" />
              {item.href ? (
                <Link 
                  href={item.href}
                  className="text-sfm-text-muted hover:text-sfm-azure transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span className="text-sfm-navy font-medium" itemProp="name">
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
