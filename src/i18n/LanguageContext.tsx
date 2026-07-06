import { createContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Language } from '@/types'
import { translations } from '@/i18n/translations'

export interface LanguageContextValue {
  language: Language
  toggleLanguage: () => void
  t: (typeof translations)['pt']
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLanguage(): Language {
  const stored = localStorage.getItem('language')
  if (stored === 'pt' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
  }, [language])

  const toggleLanguage = () => setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'))

  const value = useMemo(
    () => ({ language, toggleLanguage, t: translations[language] }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
