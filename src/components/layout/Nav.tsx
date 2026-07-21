import { useEffect, useState } from 'react'
import { Menu, Sun, Moon, X } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/i18n/useLanguage'
import { LanguageToggle } from '@/components/ui/LanguageToggle'

export function Nav() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#sobre', label: t.nav.about },
    { href: '#projetos', label: t.nav.projects },
    { href: '#experiencia', label: t.nav.experience },
    { href: '#contato', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || menuOpen ? 'border-b border-border bg-bg/85 backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="text-lg font-bold tracking-tight text-ink">
          João_Marcelo<span className="text-accent">.</span>Dev
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-ink-muted sm:flex">
          {links.map((link) => (
            <li key={link.href} className="group relative">
              <a href={link.href} className="block py-2 transition-colors hover:text-ink">
                {link.label}
              </a>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent sm:hidden"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-4 text-sm font-medium text-ink-muted sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
