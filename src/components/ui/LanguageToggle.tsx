import { useLanguage } from '@/i18n/useLanguage'

export function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.nav.languageToggle}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-border font-mono text-[11px] font-medium uppercase text-ink-muted transition-colors hover:border-accent hover:text-accent"
    >
      {language === 'pt' ? 'EN' : 'PT'}
    </button>
  )
}
