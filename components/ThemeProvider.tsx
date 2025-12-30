'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Always use light mode to prevent font visibility issues
  const [theme] = useState<Theme>('light')
  const [resolvedTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // Handle initial mount
  useEffect(() => {
    setMounted(true)
    // Ensure light mode is always applied
    const root = document.documentElement
    root.classList.remove('dark')
    root.style.colorScheme = 'light'
  }, [])

  const setTheme = () => {
    // Theme switching disabled to maintain font visibility
    // Always keep light mode
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: 'light', resolvedTheme: 'light', setTheme }}>
        {children}
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
