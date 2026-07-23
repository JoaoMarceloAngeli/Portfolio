import { ArrowUpRight, GraduationCap, Lock } from 'lucide-react'
import type { ProjectMeta } from '@/types'
import { GithubIcon } from '@/components/ui/icons'
import { useLanguage } from '@/i18n/useLanguage'

const NOTE_ICONS = { private: Lock, academic: GraduationCap }

export function ProjectCard({ project }: { project: ProjectMeta }) {
  const { t } = useLanguage()
  const content = t.projects.items[project.id]
  const NoteIcon = project.noteKind ? NOTE_ICONS[project.noteKind] : null

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/40">
      <div className="relative flex h-28 items-center justify-center overflow-hidden border-b border-border bg-linear-to-br from-accent-soft to-transparent">
        <span className="font-mono text-4xl font-semibold text-ink/10">{project.index}</span>
        {content.note && NoteIcon && (
          <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
            <NoteIcon size={11} />
            {content.note}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <ul className="mb-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-lg border border-border px-2.5 py-1 text-[11px] text-ink-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <h3 className="mb-2 text-base font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
          {content.name}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-ink-muted">{content.description}</p>

        <div className="mt-6 flex items-center gap-4 border-t border-border pt-4 text-xs">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-ink"
            >
              <GithubIcon size={14} />
              {t.projects.viewCode}
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-accent"
            >
              <ArrowUpRight size={13} />
              {t.projects.demo}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
