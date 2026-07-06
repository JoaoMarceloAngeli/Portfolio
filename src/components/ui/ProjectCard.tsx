import { ArrowUpRight, Lock } from 'lucide-react'
import type { ProjectMeta } from '@/types'
import { GithubIcon } from '@/components/ui/icons'
import { useLanguage } from '@/i18n/useLanguage'

export function ProjectCard({ project }: { project: ProjectMeta }) {
  const { t } = useLanguage()
  const content = t.projects.items[project.id]

  return (
    <article className="corner-brackets group flex flex-col gap-5 border border-border bg-surface p-6 transition-colors hover:bg-surface-hover sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-sm text-accent">{project.index}</span>
        {content.note && (
          <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
            <Lock size={12} />
            {content.note}
          </span>
        )}
      </div>

      <h3 className="font-mono text-xl font-medium text-ink sm:text-2xl">{content.name}</h3>

      <div className="space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base">
        <p>
          <span className="font-mono text-xs uppercase tracking-wider text-circuit">
            {t.projects.problemLabel} —{' '}
          </span>
          {content.problem}
        </p>
        <p>
          <span className="font-mono text-xs uppercase tracking-wider text-circuit">
            {t.projects.solutionLabel} —{' '}
          </span>
          {content.solution}
        </p>
      </div>

      <ul className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded border border-border px-2.5 py-1 font-mono text-[11px] text-ink-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-5 pt-2 font-mono text-sm">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
          >
            <GithubIcon size={15} />
            {t.projects.viewCode}
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
          >
            <ArrowUpRight size={15} />
            {t.projects.demo}
          </a>
        )}
      </div>
    </article>
  )
}
