import { Section } from '@/components/ui/Section'
import { useLanguage } from '@/i18n/useLanguage'

export function About() {
  const { t } = useLanguage()

  return (
    <Section id="sobre" index="02" title={t.about.title}>
      <div className="grid gap-10 sm:grid-cols-[1.3fr_1fr] sm:gap-14">
        <div className="space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          <p>{t.about.paragraph1}</p>
          <p>
            {t.about.paragraph2Before}
            <span className="text-ink">{t.about.zapSysten}</span>
            {t.about.paragraph2Mid}
            <span className="text-ink">{t.about.pressureAnalysis}</span>
            {t.about.paragraph2And}
            <span className="text-ink">{t.about.lightRefraction}</span>
            {t.about.paragraph2After}
          </p>
        </div>

        <div className="corner-brackets border border-border bg-surface p-6 font-mono text-xs">
          <p className="mb-4 uppercase tracking-[0.2em] text-ink-muted">{t.about.specSheet}</p>
          <dl className="space-y-3">
            {t.about.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="uppercase tracking-wider text-circuit">{spec.label}</dt>
                <dd className="mt-0.5 text-ink-muted">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
