import { useLanguage } from '@/i18n/useLanguage'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-8 font-mono text-xs text-ink-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} João Marcelo Angeli Barbosa</p>
        <a href="#top" className="transition-colors hover:text-accent">
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  )
}
