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
    { href: '#skills', label: t.nav.skills },
    { href: '#experiencia', label: t.nav.experience },
    { href: '#contato', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || menuOpen ? 'border-b border-border bg-bg/85 backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-medium text-ink">
          jm<span className="text-accent">.</span>ab
        </a>

        <ul className="hidden items-center gap-7 font-mono text-xs uppercase tracking-wider text-ink-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent sm:hidden"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-4 font-mono text-sm uppercase tracking-wider text-ink-muted sm:hidden">
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
