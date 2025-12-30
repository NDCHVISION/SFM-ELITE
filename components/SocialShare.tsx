'use client'

import { Share2, Linkedin, Twitter, Mail, Link2, Check } from 'lucide-react'
import { useState } from 'react'

interface SocialShareProps {
  url: string
  title: string
  description?: string
  className?: string
}

export default function SocialShare({ url, title, description = '', className = '' }: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-sfm-text-muted flex items-center gap-1.5">
        <Share2 className="w-4 h-4" />
        Share
      </span>
      
      <div className="flex items-center gap-1">
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-sfm-text-muted hover:text-[#0077b5] hover:bg-[#0077b5]/10 rounded-lg transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-sfm-text-muted hover:text-[#1da1f2] hover:bg-[#1da1f2]/10 rounded-lg transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-4 h-4" />
        </a>
        
        <a
          href={shareLinks.email}
          className="p-2 text-sfm-text-muted hover:text-sfm-azure hover:bg-sfm-azure/10 rounded-lg transition-colors"
          aria-label="Share via email"
        >
          <Mail className="w-4 h-4" />
        </a>
        
        <button
          onClick={copyToClipboard}
          className={`p-2 rounded-lg transition-colors ${
            copied 
              ? 'text-emerald-600 bg-emerald-50' 
              : 'text-sfm-text-muted hover:text-sfm-navy hover:bg-gray-100'
          }`}
          aria-label={copied ? 'Link copied!' : 'Copy link'}
        >
          {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}
