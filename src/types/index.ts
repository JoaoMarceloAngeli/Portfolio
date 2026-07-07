export type Language = 'pt' | 'en'

export type ProjectNoteKind = 'private' | 'academic'

export interface ProjectMeta {
  id: string
  index: string
  stack: string[]
  repoUrl?: string
  demoUrl?: string
  noteKind?: ProjectNoteKind
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
