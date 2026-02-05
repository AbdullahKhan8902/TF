'use client'

import type React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import type { Language } from './translations'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [isClient, setIsClient] = useState(false)

  // Load language from localStorage on mount
  useEffect(() => {
    setIsClient(true)
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage && ['en', 'ar', 'ru', 'zh'].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
      document.documentElement.lang = savedLanguage
      // Keep layout direction consistent (LTR) for all languages
      document.documentElement.dir = 'ltr'
    }
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem('language', newLanguage)
    document.documentElement.lang = newLanguage
    // Always use LTR to keep the same viewport/layout across languages
    document.documentElement.dir = 'ltr'
  }

  // Only render children after hydration to prevent mismatch
  // Always provide the context so client components can consume it
  // (we still avoid reading/writing localStorage until on the client)
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
