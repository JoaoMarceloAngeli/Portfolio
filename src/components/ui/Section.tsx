import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  index: string
  title: string
  children: ReactNode
  className?: string
}

export function Section({ id, index, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">§{index}</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">{title}</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        {children}
      </div>
    </section>
  )
}
