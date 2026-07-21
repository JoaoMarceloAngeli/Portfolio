import { Section } from '@/components/ui/Section'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'
import { useLanguage } from '@/i18n/useLanguage'

export function Projects() {
  const { t } = useLanguage()

  return (
    <Section id="projetos" index="02" title={t.projects.title}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
