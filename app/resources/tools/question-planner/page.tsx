'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'
import { Copy, Download, RefreshCw, Plus, Star, Trash2 } from 'lucide-react'
import { copyToClipboard, showToast, generatePDF } from '@/lib/tools/utils'

interface Question {
  id: number
  text: string
  isCustom: boolean
  isPriority: boolean
}

const VISIT_TYPES = [
  'Annual physical',
  'Follow-up visit',
  'New symptom',
  'Specialist consultation',
  'Lab/test results review',
  'Medication review'
]

const QUESTION_CATEGORIES: Record<string, { category: string; questions: string[] }[]> = {
  'Annual physical': [
    {
      category: 'Prevention',
      questions: [
        'What screenings do I need this year?',
        'Are my vaccinations up to date?',
        'What lifestyle changes would benefit me most?'
      ]
    },
    {
      category: 'Lab Results',
      questions: [
        'What do my latest lab results show?',
        'Have any of my numbers changed significantly?',
        'What should I monitor going forward?'
      ]
    }
  ],
  'Follow-up visit': [
    {
      category: 'Treatment Progress',
      questions: [
        'Is my treatment plan working?',
        'Should we adjust my medications?',
        'What improvements should I expect to see?'
      ]
    },
    {
      category: 'Next Steps',
      questions: [
        'When should I follow up again?',
        'What warning signs should I watch for?',
        'Are there any tests we should repeat?'
      ]
    }
  ],
  'New symptom': [
    {
      category: 'Diagnosis',
      questions: [
        'What could be causing these symptoms?',
        'Do we need any tests to confirm?',
        'How serious is this condition?'
      ]
    },
    {
      category: 'Treatment',
      questions: [
        'What are my treatment options?',
        'What can I do at home to help?',
        'When should I expect to feel better?'
      ]
    }
  ],
  'Specialist consultation': [
    {
      category: 'Understanding',
      questions: [
        'Why am I being referred to a specialist?',
        'What should I expect at my specialist visit?',
        'What information should I bring?'
      ]
    },
    {
      category: 'Coordination',
      questions: [
        'Will you coordinate care with the specialist?',
        'Who manages my medications - you or the specialist?',
        'When should I follow up with you after seeing the specialist?'
      ]
    }
  ],
  'Lab/test results review': [
    {
      category: 'Results',
      questions: [
        'What do these results mean?',
        'Are any results concerning?',
        'How do these compare to my previous results?'
      ]
    },
    {
      category: 'Action Plan',
      questions: [
        'Do we need to change my treatment?',
        'Should we do any follow-up tests?',
        'What lifestyle changes are recommended?'
      ]
    }
  ],
  'Medication review': [
    {
      category: 'Current Medications',
      questions: [
        'Are all my current medications still necessary?',
        'Are there any interactions I should know about?',
        'Could any of my symptoms be medication side effects?'
      ]
    },
    {
      category: 'Costs and Alternatives',
      questions: [
        'Are there less expensive alternatives?',
        'Could we simplify my medication schedule?',
        'What happens if I miss a dose?'
      ]
    }
  ]
}

export default function QuestionPlanner() {
  const [visitType, setVisitType] = useState('')
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([])
  const [customQuestion, setCustomQuestion] = useState('')

  const handleVisitTypeChange = (type: string) => {
    setVisitType(type)
    setSelectedQuestions([])
    setCustomQuestion('')
  }

  const toggleQuestion = (text: string) => {
    const exists = selectedQuestions.find(q => q.text === text)
    if (exists) {
      setSelectedQuestions(selectedQuestions.filter(q => q.text !== text))
    } else {
      setSelectedQuestions([...selectedQuestions, {
        id: Date.now(),
        text,
        isCustom: false,
        isPriority: false
      }])
    }
  }

  const addCustomQuestion = () => {
    if (!customQuestion.trim()) {
      showToast('Please enter a question', 'error')
      return
    }
    setSelectedQuestions([...selectedQuestions, {
      id: Date.now(),
      text: customQuestion,
      isCustom: true,
      isPriority: false
    }])
    setCustomQuestion('')
    showToast('Question added!', 'success')
  }

  const togglePriority = (id: number) => {
    const priorityCount = selectedQuestions.filter(q => q.isPriority).length
    const question = selectedQuestions.find(q => q.id === id)
    
    if (!question?.isPriority && priorityCount >= 3) {
      showToast('You can only mark 3 questions as priority', 'error')
      return
    }

    setSelectedQuestions(selectedQuestions.map(q =>
      q.id === id ? { ...q, isPriority: !q.isPriority } : q
    ))
  }

  const removeQuestion = (id: number) => {
    setSelectedQuestions(selectedQuestions.filter(q => q.id !== id))
  }

  const generateQuestionList = () => {
    let list = `QUESTIONS FOR MY ${visitType.toUpperCase()}\n\n`
    
    const priorityQuestions = selectedQuestions.filter(q => q.isPriority)
    const otherQuestions = selectedQuestions.filter(q => !q.isPriority)

    if (priorityQuestions.length > 0) {
      list += 'TOP PRIORITY QUESTIONS:\n'
      priorityQuestions.forEach((q, i) => {
        list += `${i + 1}. ★ ${q.text}\n`
      })
      list += '\n'
    }

    if (otherQuestions.length > 0) {
      list += 'OTHER QUESTIONS:\n'
      otherQuestions.forEach((q, i) => {
        list += `${i + 1}. ${q.text}\n`
      })
      list += '\n'
    }

    list += 'NOTES FROM VISIT:\n\n\n\n'
    
    return list
  }

  const handleCopy = async () => {
    if (selectedQuestions.length === 0) {
      showToast('No questions selected', 'error')
      return
    }
    const success = await copyToClipboard(generateQuestionList())
    showToast(success ? 'Copied to clipboard!' : 'Failed to copy', success ? 'success' : 'error')
  }

  const handleDownloadPDF = () => {
    if (selectedQuestions.length === 0) {
      showToast('No questions selected', 'error')
      return
    }
    generatePDF(`Questions for My ${visitType}`, generateQuestionList(), 'visit-questions.pdf')
    showToast('PDF downloaded!', 'success')
  }

  const handleReset = () => {
    setVisitType('')
    setSelectedQuestions([])
    setCustomQuestion('')
  }

  return (
    <ToolLayout
      title="Pre-Visit Question Planner"
      description="Help users prepare thoughtful questions before a medical appointment."
    >
      <div className="space-y-8">
        {/* Visit Type Selector */}
        <div>
          <h2 className="font-display text-2xl text-sfm-navy mb-4">Step 1: Select Visit Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {VISIT_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => handleVisitTypeChange(type)}
                className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                  visitType === type
                    ? 'border-sfm-azure bg-sfm-azure/5 text-sfm-azure font-medium'
                    : 'border-sfm-navy/20 hover:border-sfm-azure/50 text-sfm-navy'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Question Categories */}
        {visitType && (
          <div className="animate-fade-in space-y-6">
            <h2 className="font-display text-2xl text-sfm-navy">Step 2: Select Questions</h2>
            
            {QUESTION_CATEGORIES[visitType]?.map((category) => (
              <div key={category.category} className="bg-sfm-cream p-6 rounded-xl">
                <h3 className="font-semibold text-sfm-navy mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.questions.map((question) => (
                    <label
                      key={question}
                      className="flex items-start gap-3 cursor-pointer hover:bg-white p-3 rounded-lg transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedQuestions.some(q => q.text === question)}
                        onChange={() => toggleQuestion(question)}
                        className="mt-1 w-5 h-5 rounded border-sfm-navy/20 text-sfm-azure focus:ring-sfm-azure"
                      />
                      <span className="text-sfm-navy flex-1">{question}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {/* Custom Question */}
            <div className="bg-white border border-sfm-navy/20 p-6 rounded-xl">
              <h3 className="font-semibold text-sfm-navy mb-4">Add Your Own Question</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addCustomQuestion()}
                  className="flex-1 px-4 py-3 border border-sfm-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sfm-azure focus:border-transparent"
                  placeholder="Type your custom question..."
                />
                <button
                  onClick={addCustomQuestion}
                  className="px-6 py-3 bg-sfm-azure text-white rounded-lg font-medium hover:bg-sfm-azure-light transition-colors duration-300"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Selected Questions */}
        {selectedQuestions.length > 0 && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-t border-sfm-gold/30 pt-8">
              <h2 className="font-display text-2xl text-sfm-navy mb-4">Your Question List</h2>
              <p className="text-sfm-navy/70 mb-4">
                Click the star icon to mark your top 3 priority questions
              </p>

              <div className="space-y-3">
                {selectedQuestions
                  .sort((a, b) => (b.isPriority ? 1 : 0) - (a.isPriority ? 1 : 0))
                  .map((question, index) => (
                    <div
                      key={question.id}
                      className={`flex items-start gap-3 p-4 rounded-xl border-2 ${
                        question.isPriority
                          ? 'border-sfm-gold bg-sfm-gold/5'
                          : 'border-sfm-navy/10 bg-white'
                      }`}
                    >
                      <span className="text-sfm-navy font-medium mt-1">{index + 1}.</span>
                      <p className="flex-1 text-sfm-navy mt-1">{question.text}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => togglePriority(question.id)}
                          className={`p-2 rounded transition-colors ${
                            question.isPriority
                              ? 'text-sfm-gold hover:bg-sfm-gold/20'
                              : 'text-sfm-navy/30 hover:text-sfm-gold hover:bg-sfm-gold/10'
                          }`}
                          aria-label="Mark as priority"
                        >
                          <Star className={`w-5 h-5 ${question.isPriority ? 'fill-current' : ''}`} />
                        </button>
                        <button
                          onClick={() => removeQuestion(question.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                          aria-label="Remove question"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Notes Section Preview */}
              <div className="mt-6 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-sfm-navy mb-2">Notes Section</h3>
                <p className="text-sfm-navy/70 text-sm">
                  Your downloaded list will include space for taking notes during your visit.
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
                Copy Questions
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

        {visitType && selectedQuestions.length === 0 && (
          <div className="text-center py-12 text-sfm-navy/50">
            <p>Select questions from the categories above or add your own custom questions.</p>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
