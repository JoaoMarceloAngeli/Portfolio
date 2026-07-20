import { ArrowUpRight, Mail } from 'lucide-react'
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
    <Section id="contato" index="06" title={t.contact.title}>
      <p className="mb-10 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
        {t.contact.description}
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {channels.map(({ id, label, value, href, icon: Icon }) => (
          <a
            key={id}
            href={href}
            target={id === 'email' ? undefined : '_blank'}
            rel={id === 'email' ? undefined : 'noreferrer'}
            className="corner-brackets group flex flex-col gap-4 border border-border bg-surface p-5 transition-colors hover:bg-surface-hover"
          >
            <div className="flex items-center justify-between">
              <Icon size={18} className="text-circuit" />
              <ArrowUpRight
                size={15}
                className="text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">{label}</p>
              <p className="mt-1 truncate font-mono text-sm text-ink">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
