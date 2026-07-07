import type { ProjectMeta } from '@/types'

export const projects: ProjectMeta[] = [
  {
    id: 'controle-de-despesas',
    index: '01',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'jsPDF', 'xlsx'],
    repoUrl: 'https://github.com/JoaoMarceloAngeli/Controle-de-despesas',
  },
  {
    id: 'cardapio',
    index: '02',
    stack: ['HTML', 'Tailwind CSS', 'PostCSS'],
    repoUrl: 'https://github.com/JoaoMarceloAngeli/Cardapio',
  },
  {
    id: 'app-casal',
    index: '03',
    stack: ['React', 'Vite', 'PWA', 'Supabase', 'Web Push (VAPID)'],
    noteKind: 'private',
  },
  {
    id: 'projetos-java-faculdade',
    index: '04',
    stack: ['Java', 'NetBeans'],
    repoUrl: 'https://github.com/JoaoMarceloAngeli/Projetos-Java-faculdade',
    noteKind: 'academic',
  },
]
