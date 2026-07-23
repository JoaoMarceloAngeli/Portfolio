import { Briefcase, FlaskConical, GraduationCap, MapPin } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { skillCategories } from '@/data/skills'
import { skillIcons } from '@/data/skillIcons'
import { useLanguage } from '@/i18n/useLanguage'

const SPEC_ICONS = [GraduationCap, Briefcase, FlaskConical, MapPin]

export function About() {
  const { t } = useLanguage()

  return (
    <Section id="sobre" index="01" title={t.about.title}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="space-y-4 text-base leading-relaxed text-ink-muted">
            <p>
              {t.about.paragraph1Before}
              <strong className="font-semibold text-ink">{t.about.name}</strong>
              {t.about.paragraph1After}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {t.about.specs.map((spec, i) => {
              const Icon = SPEC_ICONS[i % SPEC_ICONS.length]
              return (
                <div
                  key={spec.label}
                  className="rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/30 hover:bg-accent-soft"
                >
                  <div className="flex items-start gap-3">
                    <Icon size={18} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <p className="mb-1 text-[10px] uppercase tracking-widest text-ink-muted">
                        {spec.label}
                      </p>
                      <p className="text-sm font-semibold text-ink">{spec.value}</p>
                      <p className="text-xs text-ink-muted">{spec.detail}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div id="skills" className="scroll-mt-24">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            {t.skills.title}
          </p>
          <div className="space-y-6">
            {skillCategories.map((category) => (
              <div key={category.id}>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-circuit">
                  {t.skills.categoryLabels[category.id]}
                </h3>
                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {category.skills.map((skill) => {
                    const Icon = skillIcons[skill]
                    return (
                      <li
                        key={skill}
                        className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-ink-muted transition-colors hover:border-accent/30 hover:bg-accent-soft hover:text-ink"
                      >
                        {Icon && <Icon size={16} className="shrink-0 text-accent" />}
                        <span className="truncate">{skill}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
