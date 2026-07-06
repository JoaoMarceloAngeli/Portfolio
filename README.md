# Portfolio — João Marcelo Angeli Barbosa

Portfólio pessoal de desenvolvedor, construído com React, TypeScript, Vite e Tailwind CSS.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- lucide-react (ícones)

## Rodando localmente

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção (`tsc -b && vite build`)
- `npm run preview` — preview do build de produção
- `npm run lint` — lint com oxlint

## Estrutura

```
src/
  components/
    layout/     Nav, Footer
    sections/   Hero, About, Projects, Skills, Experience, Contact
    ui/         Section, ProjectCard, icons
  data/         conteúdo de projetos, skills e experiência
  hooks/        useTheme (dark mode)
  types/        tipos compartilhados
```
