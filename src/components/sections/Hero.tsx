import { ArrowRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { useLanguage } from '@/i18n/useLanguage'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative flex min-h-[92svh] items-center overflow-hidden pt-16">
      <div className="bg-blueprint absolute inset-0 mask-[radial-gradient(ellipse_at_top,black,transparent_75%)] opacity-70" />

      <div className="relative mx-auto w-full max-w-5xl px-6 py-20">
        <div className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-slow rounded-full bg-circuit" />
          </span>
          {t.hero.status}
        </div>

        <h1 className="max-w-3xl font-mono text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-6xl">
          João Marcelo
          <br />
          Angeli Barbosa
        </h1>

        <p className="mt-5 font-mono text-sm uppercase tracking-[0.15em] text-accent sm:text-base">
          {t.hero.tagline}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {t.hero.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            {t.hero.ctaProjects}
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {t.hero.ctaContact}
          </a>

          <div className="ml-1 flex items-center gap-1">
            <a
              href="https://github.com/JoaoMarceloAngeli"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-accent"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/joão-marcelo-angeli-barbosa-b511ba355"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:joaomarcelo071012@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-accent"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
