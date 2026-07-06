export type Language = 'pt' | 'en'

export interface ProjectMeta {
  id: string
  index: string
  stack: string[]
  repoUrl?: string
  demoUrl?: string
}

export interface SkillCategoryMeta {
  id: string
  skills: string[]
}

export interface ExperienceMeta {
  id: string
  company: string
  current?: boolean
}
