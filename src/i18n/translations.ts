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
    paragraph1: string
    paragraph2Before: string
    zapSysten: string
    paragraph2Mid: string
    pressureAnalysis: string
    paragraph2And: string
    lightRefraction: string
    paragraph2After: string
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
    statExperience: 'Experiências',
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
          'Casais não tinham um lugar único para guardar memórias importantes, nem um jeito rápido de lembrar remédios, guardar informações importantes para um casal de maneira organizada e prática, ou mandar uma "notificação de carinho" sem abrir o WhatsApp.',
        solution:
          'PWA bilíngue (PT/EN) para casais, com lembretes de remédio, notificações push instantâneas entre os dois celulares e um placar gamificado de "momentos espelhados" para os pings de "notificação de carinho" enviados em horários, como uma forma de gamificar e melhorar a experiência do usuário, além de guardar informações com o fim de organizar a vida do casal.',
        note: 'Repositório privado',
      },
      'projetos-java-faculdade': {
        name: 'Exercícios de Java — Faculdade',
        problem:
          'Praticar programação orientada a objetos, herança, recursividade e estruturas de dados (listas, pilhas, árvores) nas disciplinas de Java da faculdade.',
        solution:
          'Coleção de exercícios e miniprojetos em Java (NetBeans) cobrindo POO, herança, recursividade e estruturas de dados (pilhas, árvores, TreeSet/TreeMap), além de sistemas de cadastro e uma agenda de contatos completa com camadas MVC/DAO, persistência em banco de dados e geração de relatórios em PDF.',
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
      'Aberto a oportunidades e conversas sobre desenvolvimento full stack ou sistemas embarcados. O canal mais rápido é o e-mail.',
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
    statExperience: 'Experiences',
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
          'Couples had no single place to keep important memories, nor a quick way to get medication reminders, keep important information in an organized and practical way, or send a "care notification" without opening WhatsApp.',
        solution:
          'Bilingual (PT/EN) PWA for couples, with medication reminders, instant push notifications between both phones, and a gamified "mirror moments" scoreboard for "care notification" pings sent at scheduled times — a way to gamify and improve the user experience, while also storing information to help organize the couple\'s life.',
        note: 'Private repository',
      },
      'projetos-java-faculdade': {
        name: 'Java Coursework — University Exercises',
        problem:
          'Practicing object-oriented programming, inheritance, recursion and data structures (lists, stacks, trees) for university Java courses.',
        solution:
          'Collection of Java exercises and mini-projects (NetBeans) covering OOP, inheritance, recursion and data structures (stacks, trees, TreeSet/TreeMap), plus record-keeping systems and a full contact-book app with MVC/DAO layers, database persistence and PDF report generation.',
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
      'Open to opportunities and conversations about full-stack development or embedded systems. Email is the fastest channel.',
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
