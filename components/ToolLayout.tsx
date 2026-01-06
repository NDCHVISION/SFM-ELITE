'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ReactNode } from 'react'

interface ToolLayoutProps {
  title: string
  description: string
  children: ReactNode
}

export default function ToolLayout({ title, description, children }: ToolLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sfm-navy via-[#0a2847] to-sfm-navy">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <Link 
            href="/resources/tools" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tools
          </Link>
          <h1 className="font-display text-3xl md:text-4xl text-white mb-2">
            {title}
          </h1>
          <p className="text-white/70 max-w-2xl">
            {description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {children}
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-white/50 text-sm">
            Educational tool only. Not medical advice. Do not enter identifying information.
          </p>
        </div>
      </div>
    </main>
  )
}
