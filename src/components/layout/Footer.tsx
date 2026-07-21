import { useLanguage } from '@/i18n/useLanguage'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'

export function Footer() {
  const { t } = useLanguage()

  const links = [
    { href: '#top', label: t.nav.home },
    { href: '#sobre', label: t.nav.about },
    { href: '#projetos', label: t.nav.projects },
    { href: '#contato', label: t.nav.contact },
  ]

  const socials = [
    { href: 'https://github.com/JoaoMarceloAngeli', label: 'GitHub', Icon: GithubIcon },
    {
      href: 'https://www.linkedin.com/in/joão-marcelo-angeli-barbosa-b511ba355',
      label: 'LinkedIn',
      Icon: LinkedinIcon,
    },
  ]

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <a href="#top" className="text-base font-bold tracking-tight text-ink">
            João_Marcelo<span className="text-accent">.</span>Dev
          </a>

          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-border pt-6 text-xs text-ink-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} João Marcelo Angeli Barbosa</p>
          <a href="#top" className="transition-colors hover:text-accent">
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  )
}
