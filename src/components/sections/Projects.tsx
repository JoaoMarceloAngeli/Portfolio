import { Section } from '@/components/ui/Section'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'
import { useLanguage } from '@/i18n/useLanguage'

export function Projects() {
  const { t } = useLanguage()

  return (
    <Section id="projetos" index="03" title={t.projects.title}>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <div key={project.id} className={i === projects.length - 1 ? 'sm:col-span-2' : ''}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  )
}
