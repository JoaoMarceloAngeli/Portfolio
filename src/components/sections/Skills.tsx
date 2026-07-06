import { Section } from '@/components/ui/Section'
import { skillCategories } from '@/data/skills'
import { useLanguage } from '@/i18n/useLanguage'

export function Skills() {
  const { t } = useLanguage()

  return (
    <Section id="skills" index="04" title={t.skills.title}>
      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.id} className="border-l-2 border-border pl-5">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-circuit">
              {t.skills.categoryLabels[category.id]}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded border border-border px-3 py-1.5 font-mono text-sm text-ink-muted transition-colors hover:border-accent hover:text-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
