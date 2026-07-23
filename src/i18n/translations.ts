import type { Language } from '@/types'

interface Translations {
  nav: {
    home: string
    about: string
    projects: string
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
    descriptionBefore: string
    descriptionTechWord: string
    descriptionAfter: string
    ctaProjects: string
    ctaContact: string
    photoPlaceholder: string
    statProjects: string
    statTech: string
    statExperience: string
  }
  about: {
    title: string
    paragraph1Before: string
    name: string
    paragraph1After: string
    specs: { label: string; value: string; detail: string }[]
  }
  projects: {
    title: string
    viewCode: string
    demo: string
    items: Record<string, { name: string; description: string; note?: string }>
  }
  skills: {
    title: string
    categoryLabels: Record<string, string>
  }
  experience: {
    title: string
    current: string
    items: Record<string, { role: string; period: string; summary: string }>
  }
  contact: {
    title: string
    description: string
    labels: { email: string; linkedin: string; github: string; whatsapp: string; instagram: string }
  }
  footer: {
    backToTop: string
  }
}

const pt: Translations = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    projects: 'Projetos',
    experience: 'Experiência',
    contact: 'Contato',
    themeToLight: 'Ativar modo claro',
    themeToDark: 'Ativar modo escuro',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    languageToggle: 'Switch to English',
  },
  hero: {
    status: 'Desenvolvedor Full Stack',
    tagline: 'Desenvolvedor Full Stack · Engenharia da Computação',
    descriptionBefore:
      'Atuando como desenvolvedor Full Stack na empresa Zap Systen, participando de todo o ciclo do produto — do levantamento à entrega. Estudante de Engenharia da Computação na PUC-GO, hoje transito entre diversas ',
    descriptionTechWord: 'tecnologias',
    descriptionAfter: ', procurando sempre entregar o melhor resultado e atender as necessidades dos usuários.',
    ctaProjects: 'Ver projetos',
    ctaContact: 'Contato',
    photoPlaceholder: 'Foto em breve',
    statProjects: 'Projetos',
    statTech: 'Tecnologias',
    statExperience: 'Anos de experiência',
  },
  about: {
    title: 'Sobre',
    paragraph1Before: 'Olá, eu sou ',
    name: 'João Marcelo Angeli Barbosa',
    paragraph1After:
      ', sou desenvolvedor full-stack, estudante de Engenharia da Computação na PUC-GO, atuando como estagiário na Zap Systen e na iniciação científica, onde desenvolvo um sistema que identifica volume combinando análise de pressão e refração de luz — hardware e software na mesma placa.',
    specs: [
      { label: 'Formação', value: 'Eng. da Computação', detail: 'PUC-GO, 8º período' },
      {
        label: 'Experiência atual',
        value: 'Estagiário de TI',
        detail: 'Zap Systen · abril/2026 - atual',
      },
      {
        label: 'Laboratório',
        value: 'Iniciação científica',
        detail: 'pressão e refração de luz',
      },
      {
        label: 'Localização',
        value: 'Goiânia, GO',
        detail: 'Disponível para remoto, presencial ou híbrido',
      },
    ],
  },
  projects: {
    title: 'Projetos',
    viewCode: 'Ver código',
    demo: 'Demo',
    items: {
      cardapio: {
        name: 'Catálogo Digital do Leilão',
        description:
          'Catálogo digital responsivo para expor os lotes de um leilão de forma acessível pelo celular, substituindo o PDF estático e o papel impresso na hora do lance — com carregamento rápido e leiaute pensado para telas pequenas durante o evento.',
      },
      'app-casal': {
        name: 'App para Casais',
        description:
          'PWA bilíngue (PT/EN) para casais que não tinham um lugar único para guardar memórias importantes, nem um jeito rápido de lembrar remédios ou mandar uma "notificação de carinho" sem abrir o WhatsApp. Traz lembretes de remédio, notificações push instantâneas entre os dois celulares e um placar gamificado de "momentos espelhados" para organizar e tornar mais afetiva a rotina do casal.',
        note: 'Repositório privado',
      },
      'projetos-java-faculdade': {
        name: 'Exercícios de Java — Faculdade',
        description:
          'Coleção de exercícios e miniprojetos em Java (NetBeans) feita para praticar programação orientada a objetos, herança, recursividade e estruturas de dados (listas, pilhas, árvores, TreeSet/TreeMap) nas disciplinas da faculdade — incluindo sistemas de cadastro e uma agenda de contatos completa com camadas MVC/DAO, persistência em banco de dados e geração de relatórios em PDF.',
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
    current: 'Atual',
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
      'Estou aberto a novas oportunidades, projetos freelance e colaborações. Estou disponível através de qualquer canal abaixo.',
    labels: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
    },
  },
  footer: {
    backToTop: 'voltar ao topo ↑',
  },
}

const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageToggle: 'Mudar para português',
  },
  hero: {
    status: 'Full-Stack Developer',
    tagline: 'Full Stack Developer · Computer Engineering',
    descriptionBefore:
      "Working as a Full-Stack Developer at Zap Systen, taking part in the full product cycle — from discovery to delivery. A Computer Engineering student at PUC-GO, I move between a range of ",
    descriptionTechWord: 'technologies',
    descriptionAfter: ", always aiming to deliver the best result and meet users' needs.",
    ctaProjects: 'View projects',
    ctaContact: 'Contact',
    photoPlaceholder: 'Photo coming soon',
    statProjects: 'Projects',
    statTech: 'Technologies',
    statExperience: 'Years of experience',
  },
  about: {
    title: 'About',
    paragraph1Before: "Hi, I'm ",
    name: 'João Marcelo Angeli Barbosa',
    paragraph1After:
      ", a full-stack developer and Computer Engineering student at PUC-GO, working as an intern at Zap Systen and on an undergraduate research project, where I'm developing a system that identifies volume by combining pressure analysis and light refraction — hardware and software on the same board.",
    specs: [
      { label: 'Education', value: 'Computer Engineering', detail: 'PUC-GO, 8th semester' },
      {
        label: 'Current role',
        value: 'IT Intern',
        detail: 'Zap Systen · Apr/2026 - present',
      },
      {
        label: 'Lab',
        value: 'Undergraduate research',
        detail: 'pressure & light refraction',
      },
      {
        label: 'Location',
        value: 'Goiânia, Brazil',
        detail: 'Available for remote, on-site or hybrid work',
      },
    ],
  },
  projects: {
    title: 'Projects',
    viewCode: 'View code',
    demo: 'Demo',
    items: {
      cardapio: {
        name: 'Digital Auction Catalog',
        description:
          "Responsive digital catalog that displays the auction's lots in a mobile-friendly way, replacing the static PDF and printed paper used during bidding — with fast loading and a layout designed for small screens during the event.",
      },
      'app-casal': {
        name: 'Couples App',
        description:
          'Bilingual (PT/EN) PWA for couples who had no single place to keep important memories, no quick way to get medication reminders, or send a "care notification" without opening WhatsApp. It brings medication reminders, instant push notifications between both phones, and a gamified "mirror moments" scoreboard to organize and add a more affectionate touch to the couple\'s routine.',
        note: 'Private repository',
      },
      'projetos-java-faculdade': {
        name: 'Java Coursework — University Exercises',
        description:
          'Collection of Java exercises and mini-projects (NetBeans) built to practice object-oriented programming, inheritance, recursion and data structures (lists, stacks, trees, TreeSet/TreeMap) for university courses — including record-keeping systems and a full contact-book app with MVC/DAO layers, database persistence and PDF report generation.',
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
    current: 'Current',
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
      'Open to new opportunities, freelance projects, and collaborations. Available through any of the channels below.',
    labels: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
    },
  },
  footer: {
    backToTop: 'back to top ↑',
  },
}

export const translations: Record<Language, Translations> = { pt, en }
