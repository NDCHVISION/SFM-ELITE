'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, BookOpen, Shield, Heart, Users, Clock } from 'lucide-react'

const FORMSPREE_ID = 'xjgbllpe'

export default function PrimaryCareGuidePage() {
  const [showAssessment, setShowAssessment] = useState(false)

  const assessmentQuestions = [
    'Have you seen the same doctor for more than 2 years?',
    'Has anyone compared your labs across multiple years?',
    'Can you message your doctor directly?',
    'Do you feel comfortable bringing up vague concerns?',
    'Does your doctor take your family history into account?',
  ]

  const learningPoints = [
    'Why normal labs can still miss real problems',
    'The difference between a true doctor partner and an overloaded system',
    'How continuity changes outcomes before symptoms appear',
    'What questions to ask before committing to a doctor',
    'How to identify the type of primary care relationship you currently have',
  ]

  return (
    <>
      {/* Hero Section with Opening Vignette */}
      <section className="min-h-screen pt-40 pb-20 bg-gradient-to-b from-white via-sfm-cream/30 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-sfm-azure/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-sfm-gold/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Content Side - Opening Vignette */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-sfm-azure" strokeWidth={1.5} />
                <span className="text-sfm-azure text-sm tracking-[0.2em] uppercase font-medium">
                  Free Guide
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl text-sfm-navy mb-6 leading-[1.1]">
                How Healthy Is Your Relationship With Your Primary Care Doctor?
              </h1>

              {/* The key line - moved high */}
              <div className="bg-sfm-navy/5 border-l-4 border-sfm-gold p-6 mb-8 rounded-r-xl">
                <p className="text-sfm-navy text-lg font-display italic">
                  "The problem was never her body. The problem was that no one had been holding the thread."
                </p>
              </div>

              {/* Opening Vignette */}
              <div className="prose prose-lg text-muted mb-8">
                <p>
                  She was in her early forties. Tired for longer than she could remember. Annual physicals every year, labs always "normal."
                </p>
                <p>
                  But no one noticed her thyroid levels beginning to drift. No one tracked the subtle weight gain despite eating less. Her story was written across years of records, but no one had read it as a single narrative.
                </p>
                <p>
                  By the time she found a doctor who held the thread, years had passed. Not because the signs weren't there. Because no one had compared where she was to where she had been.
                </p>
              </div>

              {/* Self-Assessment Toggle */}
              <div className="mb-8">
                <button
                  onClick={() => setShowAssessment(!showAssessment)}
                  className="w-full flex items-center justify-between p-5 bg-sfm-cream rounded-xl hover:bg-sfm-cream/80 transition-colors group"
                >
                  <span className="font-medium text-sfm-navy">Take the 30-Second Self-Assessment</span>
                  <ArrowRight className={`w-5 h-5 text-sfm-gold transition-transform duration-300 ${showAssessment ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                </button>

                {showAssessment && (
                  <div className="mt-4 p-6 bg-white rounded-xl border border-sfm-cream-dark">
                    <p className="text-sfm-navy font-medium mb-4">Answer honestly:</p>
                    <div className="space-y-3 mb-6">
                      {assessmentQuestions.map((question, index) => (
                        <label key={index} className="flex items-start gap-3 cursor-pointer group">
                          <input 
                            type="checkbox" 
                            className="mt-1 w-5 h-5 rounded border-gray-300 text-sfm-gold focus:ring-sfm-gold/20" 
                          />
                          <span className="text-muted group-hover:text-sfm-navy transition-colors">
                            {question}
                          </span>
                        </label>
                      ))}
                    </div>
                    <p className="text-sfm-azure font-medium text-sm">
                      If you answered "No" to any of these, this guide is for you.
                    </p>
                  </div>
                )}
              </div>

              {/* What is in the full guide */}
              <div className="bg-sfm-cream rounded-2xl p-6">
                <p className="text-sfm-navy font-medium mb-4">What you will learn in the full guide:</p>
                <ul className="space-y-3">
                  {learningPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-sfm-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-sfm-gold" strokeWidth={2} />
                      </div>
                      <span className="text-muted text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
                {/* Logo */}
                <div className="flex justify-center mb-6 group">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-sfm-gold/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src="/images/SFM_Trans.png"
                      alt="Sankofa Family Medicine logo"
                      width={180}
                      height={120}
                      className="h-auto w-auto max-h-24 relative transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <h2 className="font-display text-2xl text-sfm-navy mb-2 text-center">
                  Get the Full Guide
                </h2>
                <p className="text-muted text-sm text-center mb-6">
                  Free. No sales pitch. Just clarity.
                </p>

                {/* Formspree Form */}
                <form 
                  action={`https://formspree.io/f/${FORMSPREE_ID}`}
                  method="POST"
                  className="space-y-5"
                >
                  <input 
                    type="hidden" 
                    name="_next" 
                    value="https://166166
                    
                    /primary-care-guide/success" 
                  />
                  <input 
                    type="hidden" 
                    name="_subject" 
                    value="New Primary Care Guide Download Request" 
                  />
                  <input type="hidden" name="leadType" value="Primary Care Guide" />
                  <input type="hidden" name="sourcePage" value="/resources/primary-care-guide" />
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-sfm-navy mb-2">
                      Name <span className="text-sfm-text-light font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="input"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sfm-navy mb-2">
                      Email Address <span className="text-sfm-gold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="input"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="guide-consent"
                      name="consent"
                      required
                      className="mt-1 w-4 h-4 rounded border-sfm-cream-dark text-sfm-gold focus:ring-sfm-gold/20 cursor-pointer"
                    />
                    <label htmlFor="guide-consent" className="text-xs text-sfm-text-muted cursor-pointer leading-relaxed">
                      I agree to receive email updates from Sankofa Family Medicine. I can unsubscribe at any time. <span className="text-sfm-gold">*</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary justify-center"
                  >
                    Send Me the Guide
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>

                  <p className="text-xs text-center text-gray-400">
                    No spam. No sales sequences. Just the guide.
                  </p>
                </form>

                {/* Trust Signals */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-6 text-gray-400 text-xs">
                    <span className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      HIPAA Mindful
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5" />
                      No Obligation
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary CTA */}
              <div className="mt-8 text-center">
                <p className="text-sm text-muted mb-3">
                  Prefer to talk directly?
                </p>
                <a 
                  href="/founders-waitlist"
                  className="inline-flex items-center gap-2 text-sfm-azure hover:text-sfm-navy font-medium text-sm transition-colors"
                >
                  Join the Founders Waitlist
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-24 bg-sfm-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sfm-gold text-sm tracking-[0.25em] uppercase mb-6">
            The Continuity Crisis
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-8">
            Most patients do not realize their primary care is broken until it is too late.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Clock,
                stat: '15 min',
                label: 'Average visit length in traditional care',
              },
              {
                icon: Users,
                stat: '2,300+',
                label: 'Patients per doctor in typical practices',
              },
              {
                icon: Heart,
                stat: '62%',
                label: 'Feel their doctor does not know them',
              },
            ].map((item) => (
              <div key={item.label} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <item.icon className="w-8 h-8 text-sfm-gold mx-auto mb-4" strokeWidth={1.5} />
                <p className="font-display text-3xl text-white mb-2">{item.stat}</p>
                <p className="text-white/60 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="text-white/50 text-sm mt-12">
            This guide helps you understand what to look for and what questions to ask.
          </p>
        </div>
      </section>
    </>
  )
}
