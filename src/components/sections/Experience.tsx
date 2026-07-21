import { Section } from '@/components/ui/Section'
import { experience } from '@/data/experience'
import { useLanguage } from '@/i18n/useLanguage'

export function Experience() {
  const { t } = useLanguage()

  return (
    <Section id="experiencia" index="03" title={t.experience.title}>
      <ol className="space-y-10">
        {experience.map((item, i) => {
          const content = t.experience.items[item.id]
          return (
            <li key={item.id} className="relative pl-8">
              <span
                className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 ${
                  item.current ? 'animate-pulse-slow border-circuit bg-circuit' : 'border-border bg-bg'
                }`}
              />
              {i < experience.length - 1 && (
                <span className="absolute left-[4.5px] top-4 h-[calc(100%+2.5rem-1rem)] w-px bg-border" />
              )}

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-ink">{item.company}</h3>
                {item.current && (
                  <span className="rounded-full border border-accent/20 bg-accent-soft px-2 py-0.5 text-[10px] font-medium text-accent">
                    {t.experience.current}
                  </span>
                )}
                <span className="ml-auto text-xs text-ink-muted">{content.period}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-circuit">{content.role}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
                {content.summary}
              </p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
