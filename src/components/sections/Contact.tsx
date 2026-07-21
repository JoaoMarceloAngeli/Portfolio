import { Mail } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { GithubIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from '@/components/ui/icons'
import { useLanguage } from '@/i18n/useLanguage'

export function Contact() {
  const { t } = useLanguage()

  const channels = [
    {
      id: 'email',
      label: t.contact.labels.email,
      value: 'joaomarcelo071012@gmail.com',
      href: 'mailto:joaomarcelo071012@gmail.com',
      icon: Mail,
    },
    {
      id: 'linkedin',
      label: t.contact.labels.linkedin,
      value: 'joão-marcelo-angeli-barbosa',
      href: 'https://www.linkedin.com/in/joão-marcelo-angeli-barbosa-b511ba355',
      icon: LinkedinIcon,
    },
    {
      id: 'github',
      label: t.contact.labels.github,
      value: 'JoaoMarceloAngeli',
      href: 'https://github.com/JoaoMarceloAngeli',
      icon: GithubIcon,
    },
    {
      id: 'whatsapp',
      label: t.contact.labels.whatsapp,
      value: '+55 62 99318-1151',
      href: 'https://wa.me/5562993181151',
      icon: WhatsappIcon,
    },
    {
      id: 'instagram',
      label: t.contact.labels.instagram,
      value: '@joao_marcel_o',
      href: 'https://www.instagram.com/joao_marcel_o',
      icon: InstagramIcon,
    },
  ]

  return (
    <Section id="contato" index="04" title={t.contact.title}>
      <p className="mb-10 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
        {t.contact.description}
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {channels.map(({ id, label, value, href, icon: Icon }) => (
          <a
            key={id}
            href={href}
            target={id === 'email' ? undefined : '_blank'}
            rel={id === 'email' ? undefined : 'noreferrer'}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/30 hover:bg-accent-soft"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent-soft">
              <Icon size={16} className="text-accent" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-ink-muted">{label}</p>
              <p className="mt-1 truncate text-sm font-medium text-ink">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
