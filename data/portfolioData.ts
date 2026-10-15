export const portfolioData = {
  name: "Daniel José Bernardes Filho",
  role: "Desenvolvedor Frontend / Full Stack",
  bio: "Transformo ideias em aplicações web modernas, responsivas e de alta performance utilizando tecnologias como React, Next.js e TypeScript.",
  about: "Minha trajetória profissional teve início nas áreas de saúde e educação, onde atuei como Técnico em Enfermagem e Professor de Inglês. Essas vivências foram fundamentais para desenvolver habilidades interpessoais valiosas, como comunicação clara, didática, empatia, trabalho sob pressão e atenção aos detalhes. Movido pela paixão por inovação, fiz a transição de carreira para a área de Tecnologia da Informação. Hoje, atuo no mercado de TI e estou no 5º semestre do curso de Tecnólogo em Desenvolvimento de Software Multiplataforma na FATEC Votorantim. Combinando essa bagagem diversificada com aprendizados em engenharia de software moderna, metodologias ágeis e projetos de impacto social, como a plataforma Achamigos, busco constantemente criar soluções web e mobile eficientes, escaláveis e focadas na melhor experiência para o usuário.",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "Git & GitHub",
    "Node.js",
  ],
  projects: [
    {
      id: 1,
      title: "Achamigos - Plataforma de Adoção",
      description: "Achamigos é uma plataforma web desenvolvida no âmbito acadêmico pela FATEC Votorantim que centraliza informações de animais disponíveis para adoção em abrigos e ONGs da região. O objetivo do sistema é facilitar o processo de adoção, reunindo em um só lugar os perfis e detalhes dos bichinhos para conectar tutores conscientes a seus novos companheiros.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/seu-usuario/projeto-1",
      image: "/project1.png", // Coloque uma imagem na pasta public ou use placeholders
    },
    {
      id: 2,
      title: "Portifolio",
      description: "Meu proprio portifolio que voce esta lendo agora!",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/seu-usuario/projeto-2",
      image: "/project2.png",
    },
  ],
  socials: {
    github: "https://github.com/DanielJBF",
    linkedin: "https://www.linkedin.com/in/daniel-bernardes-b591b91a1/",
    email: "daniel.jbernardesf@gmail.com",
  },
education: [
    {
      id: 1,
      degree: "Tecnólogo em Desenvolvimento de Software Multiplataforma", // ou seu curso
      institution: "Fatec de Votorantim",
      period: "2024 - 2027 (Previsão)",
      description: "Atualmente, curso Desenvolvimento de Software Multiplataforma na FATEC Votorantim, estando no quinto semestre, onde tenho construído uma jornada sólida na engenharia de software moderna. No curso, venho aprofundando meus conhecimentos na criação de aplicações eficientes para web e dispositivos móveis, explorando desde os fundamentos de algoritmos e arquitetura de sistemas até o uso de metodologias ágeis e tecnologias atuais, como análise de dados e inteligência artificial, sempre com foco em entregar soluções escaláveis e com uma excelente experiência para os usuários.",
    },
    {
      id: 2,
      degree: "Técnico em Informática",
      institution: "ETEC de Votorantim",
      period: "2012",
      description: "Concluí o curso técnico em Informática na ETEC de Votorantim, etapa fundamental onde desenvolvi uma base sólida em lógica de programação, suporte a sistemas e infraestrutura. Essa vivência prática me proporcionou uma compreensão abrangente sobre redes, manutenção e desenvolvimento de aplicações, preparando-me com uma visão analítica e eficiente para solucionar problemas tecnológicos.",
    },
  ],
  experiences: [
    {
      id: 1,
      role: "Estagiário de Suporte Técnico",
      company: "Prefeitura Municipal de Votorantim",
      period: "Estágio", 
      description: "Atuação no suporte técnico a usuários e manutenção de infraestrutura de TI. Responsável pelo diagnóstico e resolução de problemas em hardware e software, configuração de redes locais, formatação e instalação de sistemas, garantindo a continuidade operacional e bom atendimento aos setores municipais.",
    },
    {
      id: 2,
      role: "Professor de Língua Inglesa",
      company: "Wizard by Pearson",
      period: "Julho de 2021 - Julho de 2024",
      description: "Condução de aulas no formato híbrido (presencial e online) para crianças, adolescentes e adultos. Responsável por adaptar estratégias pedagógicas às necessidades de cada faixa etária, desenvolvendo competências interpessoais como comunicação assertiva, didática, liderança e gestão de turmas.",
    },
  ],
};