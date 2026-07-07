import type { Language } from '@/types'

interface Translations {
  nav: {
    about: string
    projects: string
    skills: string
    experience: string
    contact: string
    themeToLight: string
    themeToDark: string
    openMenu: string
    closeMenu: string
    languageToggle: string
  }
  hero: {
    status: string
    tagline: string
    description: string
    ctaProjects: string
    ctaContact: string
  }
  about: {
    title: string
    paragraph1: string
    paragraph2Before: string
    zapSysten: string
    paragraph2Mid: string
    pressureAnalysis: string
    paragraph2And: string
    lightRefraction: string
    paragraph2After: string
    specSheet: string
    specs: { label: string; value: string }[]
  }
  projects: {
    title: string
    problemLabel: string
    solutionLabel: string
    viewCode: string
    demo: string
    items: Record<string, { name: string; problem: string; solution: string; note?: string }>
  }
  skills: {
    title: string
    categoryLabels: Record<string, string>
  }
  experience: {
    title: string
    items: Record<string, { role: string; period: string; summary: string }>
  }
  contact: {
    title: string
    description: string
    labels: { email: string; linkedin: string; github: string }
  }
  footer: {
    backToTop: string
  }
}

const pt: Translations = {
  nav: {
    about: 'Sobre',
    projects: 'Projetos',
    skills: 'Skills',
    experience: 'Experiência',
    contact: 'Contato',
    themeToLight: 'Ativar modo claro',
    themeToDark: 'Ativar modo escuro',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    languageToggle: 'Switch to English',
  },
  hero: {
    status: 'Estagiário Full Stack — Zap Systen',
    tagline: 'Desenvolvedor Full Stack · Engenharia da Computação',
    description:
      'Escrevo o front-end e o back-end que fecham a conta de um leilão de gado, e no laboratório da faculdade calibro o sensor que lê pressão e refração de luz. Meu lugar é na fronteira entre o código que roda no navegador e o que roda perto do hardware.',
    ctaProjects: 'Ver projetos',
    ctaContact: 'Contato',
  },
  about: {
    title: 'Sobre',
    paragraph1:
      'Estou no 8º período de Engenharia da Computação na PUC-GO e transito com naturalidade entre dois mundos que normalmente não se falam: o do front-end/back-end que resolve um problema de negócio real, e o dos circuitos que leem o mundo físico.',
    paragraph2Before: 'Hoje isso aparece de dois jeitos concretos: no estágio full stack na ',
    zapSysten: 'Zap Systen',
    paragraph2Mid:
      ', onde mexo em código de produção dos dois lados da pilha; e na iniciação científica da faculdade, onde ajudo a construir um sistema que identifica volume combinando ',
    pressureAnalysis: 'análise de pressão',
    paragraph2And: ' e ',
    lightRefraction: 'refração de luz',
    paragraph2After: ' — hardware e software na mesma placa.',
    specSheet: 'Ficha técnica',
    specs: [
      { label: 'Formação', value: 'Eng. da Computação — PUC-GO, 8º período' },
      { label: 'Foco atual', value: 'Full Stack — Zap Systen' },
      { label: 'Laboratório', value: 'Iniciação científica — pressão e refração de luz' },
      { label: 'Base', value: 'Goiânia, GO' },
    ],
  },
  projects: {
    title: 'Projetos',
    problemLabel: 'Problema',
    solutionLabel: 'Solução',
    viewCode: 'Ver código',
    demo: 'Demo',
    items: {
      'controle-de-despesas': {
        name: 'Sistema de Gestão Financeira — Leilão de Gado',
        problem:
          'Produtores e leiloeiros fechavam a conta do leilão manualmente, em planilhas soltas — sem histórico confiável de receitas e despesas nem relatório pronto pra apresentar.',
        solution:
          'Aplicação web para lançar receitas e despesas do leilão em tempo real e gerar relatórios prontos, exportáveis em PDF e Excel, sem depender de planilha externa.',
      },
      cardapio: {
        name: 'Catálogo Digital do Leilão',
        problem:
          'O leilão precisava expor os lotes do evento de forma acessível pelo celular, sem depender de PDF estático ou papel impresso na hora do lance.',
        solution:
          'Front-end responsivo que funciona como catálogo digital do leilão, com carregamento rápido e leiaute pensado para telas pequenas durante o evento.',
      },
      'app-casal': {
        name: 'App para Casais',
        problem:
          'A rotina corrida faz casais perderem o registro de lugares, filmes e datas importantes — e faltava um jeito rápido de lembrar o remédio na hora certa ou avisar "estou pensando em você" sem precisar abrir o WhatsApp.',
        solution:
          'PWA responsivo organizado em menus (lugares, comidas, filmes/séries, eventos e datas), com lembretes de remédio agendados por quem cadastra e notificações push instantâneas entre os dois celulares.',
        note: 'Repositório privado',
      },
      'projetos-java-faculdade': {
        name: 'Exercícios de Java — Faculdade',
        problem:
          'Praticar programação orientada a objetos, herança e estruturas de dados (listas, pilhas, árvores) nas disciplinas de Java da faculdade, com exercícios avulsos de fixação.',
        solution:
          'Coleção de exercícios e miniprojetos em Java (NetBeans) — classes de formas geométricas, herança, pilhas e árvores binárias, coleções TreeSet/TreeMap, e pequenos sistemas de cadastro (funcionário, eleitor, aluno, conta poupança).',
        note: 'Projeto de faculdade',
      },
    },
  },
  skills: {
    title: 'Skills',
    categoryLabels: {
      frontend: 'Frontend',
      backend: 'Backend',
      'banco-de-dados': 'Banco de Dados',
      ferramentas: 'Ferramentas',
    },
  },
  experience: {
    title: 'Experiência',
    items: {
      'zap-systen': {
        role: 'Estagiário Full Stack',
        period: 'Abr/2026 — atual',
        summary:
          'Atuação em front-end e back-end no dia a dia do time: resolução de bugs e colaboração no ciclo completo de desenvolvimento, do levantamento do problema à entrega.',
      },
      chatshub: {
        role: 'Estagiário',
        period: 'Mai/2025 — Out/2025',
        summary:
          'Atendimento ao cliente e suporte operacional, com contato direto com usuários e rotina de resolução de problemas do dia a dia da operação.',
      },
    },
  },
  contact: {
    title: 'Contato',
    description:
      'Aberto a oportunidades e conversas sobre desenvolvimento full stack ou sistemas embarcados. O canal mais rápido é o email.',
    labels: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub' },
  },
  footer: {
    backToTop: 'voltar ao topo ↑',
  },
}

const en: Translations = {
  nav: {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    experience: 'Experience',
    contact: 'Contact',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageToggle: 'Mudar para português',
  },
  hero: {
    status: 'Full-Stack Intern — Zap Systen',
    tagline: 'Full Stack Developer · Computer Engineering',
    description:
      "I write the front-end and back-end that close the books on a cattle auction, and in the university lab I calibrate the sensor that reads pressure and light refraction. My place is on the border between code that runs in the browser and code that runs close to hardware.",
    ctaProjects: 'View projects',
    ctaContact: 'Contact',
  },
  about: {
    title: 'About',
    paragraph1:
      "I'm in my 8th semester of Computer Engineering at PUC-GO, and I move naturally between two worlds that don't usually talk to each other: the front-end/back-end that solves a real business problem, and the circuits that read the physical world.",
    paragraph2Before: 'Today that shows up in two concrete ways: in my full-stack internship at ',
    zapSysten: 'Zap Systen',
    paragraph2Mid:
      ", where I touch production code on both ends of the stack; and in my university's undergraduate research project, where I help build a system that identifies volume by combining ",
    pressureAnalysis: 'pressure analysis',
    paragraph2And: ' and ',
    lightRefraction: 'light refraction',
    paragraph2After: ' — hardware and software on the same board.',
    specSheet: 'Spec sheet',
    specs: [
      { label: 'Education', value: 'Computer Engineering — PUC-GO, 8th semester' },
      { label: 'Current focus', value: 'Full Stack — Zap Systen' },
      { label: 'Lab', value: 'Undergraduate research — pressure & light refraction' },
      { label: 'Based in', value: 'Goiânia, Brazil' },
    ],
  },
  projects: {
    title: 'Projects',
    problemLabel: 'Problem',
    solutionLabel: 'Solution',
    viewCode: 'View code',
    demo: 'Demo',
    items: {
      'controle-de-despesas': {
        name: 'Financial Management System — Cattle Auction',
        problem:
          "Producers and auctioneers closed the auction's books by hand in loose spreadsheets — no reliable history of income and expenses, and no report ready to present.",
        solution:
          "Web app for logging the auction's income and expenses in real time and generating ready-made reports, exportable to PDF and Excel, with no external spreadsheet needed.",
      },
      cardapio: {
        name: 'Digital Auction Catalog',
        problem:
          "The auction needed to display the event's lots in a mobile-friendly way, without relying on a static PDF or printed paper during bidding.",
        solution:
          "Responsive front-end that works as the auction's digital catalog, with fast loading and a layout designed for small screens during the event.",
      },
      'app-casal': {
        name: 'Couples App',
        problem:
          'A busy routine makes couples lose track of places, movies and important dates — and there was no quick way to get a medication reminder on time or send a "thinking of you" ping without opening WhatsApp.',
        solution:
          'Responsive PWA organized into menus (places, food, movies/shows, events and dates), with medication reminders scheduled by whoever adds them and instant push notifications between both phones.',
        note: 'Private repository',
      },
      'projetos-java-faculdade': {
        name: 'Java Coursework — University Exercises',
        problem:
          'Practicing object-oriented programming, inheritance and data structures (lists, stacks, trees) for university Java courses, through standalone practice exercises.',
        solution:
          'Collection of Java exercises and mini-projects (NetBeans) — geometric shape classes, inheritance, stacks and binary trees, TreeSet/TreeMap collections, and small record-keeping exercises (employee, voter, student, savings account).',
        note: 'College coursework',
      },
    },
  },
  skills: {
    title: 'Skills',
    categoryLabels: {
      frontend: 'Frontend',
      backend: 'Backend',
      'banco-de-dados': 'Database',
      ferramentas: 'Tools',
    },
  },
  experience: {
    title: 'Experience',
    items: {
      'zap-systen': {
        role: 'Full-Stack Intern',
        period: 'Apr/2026 — present',
        summary:
          "Working across front-end and back-end in the team's day-to-day: fixing bugs and collaborating through the full development cycle, from problem discovery to delivery.",
      },
      chatshub: {
        role: 'Intern',
        period: 'May/2025 — Oct/2025',
        summary:
          'Customer service and operational support, with direct user contact and a routine of solving day-to-day operational issues.',
      },
    },
  },
  contact: {
    title: 'Contact',
    description:
      'Open to opportunities and conversations about full-stack development or embedded systems. Email is the fastest channel.',
    labels: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub' },
  },
  footer: {
    backToTop: 'back to top ↑',
  },
}

export const translations: Record<Language, Translations> = { pt, en }
