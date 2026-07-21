import { ArrowRight, Mail, User } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { useLanguage } from '@/i18n/useLanguage'
import { projects } from '@/data/projects'
import { skillCategories } from '@/data/skills'
import { experience } from '@/data/experience'

const techCount = skillCategories.reduce((sum, category) => sum + category.skills.length, 0)

export function Hero() {
  const { t } = useLanguage()

  const stats = [
    { value: String(projects.length), label: t.hero.statProjects },
    { value: String(techCount), label: t.hero.statTech },
    { value: String(experience.length), label: t.hero.statExperience },
  ]

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 mask-[radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-accent-2/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:justify-between">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-slow rounded-full bg-circuit" />
              </span>
              <span className="text-xs text-ink-muted">{t.hero.status}</span>
            </div>

            <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-6xl">
              João Marcelo
              <br />
              <span className="text-gradient animate-gradient">Angeli Barbosa</span>
            </h1>

            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg lg:mx-0">
              {t.hero.tagline}
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base lg:mx-0">
              {t.hero.descriptionBefore}
              <a href="#skills" className="text-accent underline-offset-2 hover:underline">
                {t.hero.descriptionTechWord}
              </a>
              {t.hero.descriptionAfter}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                {t.hero.ctaProjects}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {t.hero.ctaContact}
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/JoaoMarceloAngeli"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/joão-marcelo-angeli-barbosa-b511ba355"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href="mailto:joaomarcelo071012@gmail.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="relative w-55 lg:w-70">
              <div className="absolute inset-0 scale-110 rounded-full bg-linear-to-b from-accent/20 via-accent-2/10 to-transparent opacity-60 blur-3xl" />
              <div className="relative flex aspect-4/5 items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-surface">
                <User size={28} className="text-ink-muted" strokeWidth={1.5} />
                <span className="text-xs text-ink-muted">{t.hero.photoPlaceholder}</span>
              </div>
            </div>

            <div className="flex gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-semibold tracking-tight text-ink">{stat.value}</div>
                  <div className="mt-0.5 whitespace-nowrap text-xs text-ink-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
