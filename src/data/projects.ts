import type { ProjectMeta } from '@/types'

export const projects: ProjectMeta[] = [
  {
    id: 'cardapio',
    index: '01',
    stack: ['HTML', 'Tailwind CSS', 'PostCSS'],
    repoUrl: 'https://github.com/JoaoMarceloAngeli/Cardapio',
  },
  {
    id: 'app-casal',
    index: '02',
    stack: ['React', 'Vite', 'PWA', 'Supabase', 'Web Push (VAPID)'],
    noteKind: 'private',
  },
  {
    id: 'projetos-java-faculdade',
    index: '03',
    stack: ['Java', 'NetBeans'],
    repoUrl: 'https://github.com/JoaoMarceloAngeli/Projetos-Java-faculdade',
    noteKind: 'academic',
  },
]
