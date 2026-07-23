import { Database, Blocks } from 'lucide-react'
import { FaJava } from 'react-icons/fa6'
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiPython,
  SiSharp,
  SiPhp,
  SiC,
  SiCplusplus,
  SiDjango,
  SiDotnet,
  SiSupabase,
  SiGit,
  SiGithub,
  SiN8N,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import type { ComponentType } from 'react'

export const skillIcons: Record<string, IconType | ComponentType<{ size?: number; className?: string }>> = {
  JavaScript: SiJavascript,
  React: SiReact,
  HTML: SiHtml5,
  CSS: SiCss,
  'Tailwind CSS': SiTailwindcss,
  Python: SiPython,
  Java: FaJava,
  'C#': SiSharp,
  PHP: SiPhp,
  C: SiC,
  'C++': SiCplusplus,
  Django: SiDjango,
  'ASP.NET': SiDotnet,
  '.NET': SiDotnet,
  SQL: Database,
  Supabase: SiSupabase,
  Git: SiGit,
  GitHub: SiGithub,
  n8n: SiN8N,
  Bubble: Blocks,
}
