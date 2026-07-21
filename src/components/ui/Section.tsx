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
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{index}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
          <div className="mt-4 h-0.5 w-8 rounded-full bg-accent" />
        </div>
        {children}
      </div>
    </section>
  )
}
