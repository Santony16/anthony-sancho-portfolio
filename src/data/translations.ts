export type Language = "en" | "es";

export const copy = {
  en: {
    nav: { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", contact: "Contact", resume: "Download CV", themeLight: "Switch to light mode", themeDark: "Switch to dark mode" },
    hero: {
      eyebrow: "SOFTWARE ENGINEER · COSTA RICA",
      titleA: "Software",
      titleB: "Engineer.",
      intro: "I'm Anthony Sancho, a Software Engineering graduate with professional frontend experience and practical experience in backend development, API design, and reliable web applications.",
      primary: "Get in touch", secondary: "Explore my work", availability: "Open to software engineering opportunities",
      cardLabel: "SOFTWARE ENGINEER", cardTitle: "Anthony Sancho", cardText: "Frontend · Backend · APIs", location: "Alajuela, Costa Rica", photoAlt: "Portrait of Anthony Sancho"
    },
    about: {
      eyebrow: "ABOUT ME", title: "A software engineer focused on thoughtful, reliable development.",
      p1: "My Software Engineering studies gave me a foundation in analyzing problems, designing solutions, and building maintainable software.",
      p2: "I enjoy understanding a product from end to end and creating digital products that are functional, well-structured, and designed to solve real-world needs.",
      facts: [{ label: "Education", value: "Bachelor of Software Engineering" }, { label: "Location", value: "Costa Rica · UTC−6" }, { label: "English", value: "B2 · Intermediate" }]
    },
    skills: {
      eyebrow: "TECHNICAL TOOLKIT", title: "Technologies and practices.", intro: "A snapshot of the languages, frameworks, tools, and development practices in my technical toolkit. Use each card's button to see the full list.",
      groups: [
        { title: "Programming Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C#", "PHP"] },
        { title: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Responsive Design", "Component-Based Architecture", "Feature-Sliced Design (FSD)"] },
        { title: "Backend & APIs", items: ["Node.js", "Express.js", "NestJS", ".NET", "Laravel", "MVC", "REST APIs", "GraphQL", "Postman"] },
        { title: "Databases", items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"] },
        { title: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD Concepts"] },
        { title: "Development Practices", items: ["Agile/Scrum", "REST API Design", "Git", "Pull Requests", "AI-Assisted Development"] }
      ],
      softTitle: "How I work", soft: ["Teamwork", "Effective communication", "Analytical thinking & problem solving", "Time management, organization & accountability", "Collaboration with multidisciplinary teams", "Continuous learning"]
    },
    projects: {
      eyebrow: "SELECTED WORK", title: "Projects and practical experience.", intro: "A look at selected work that reflects my experience with frontend interfaces and full-stack application development.",
      items: [
        { name: "K-Loop", type: "PROFESSIONAL EXPERIENCE · FRONTEND INTERN", description: "Frontend contribution during my professional internship at Aacrom, building a financial and production intelligence platform for projects, milestones, billing, and payment tracking.", impact: "Professional internship · Role-based interfaces · Dashboards", stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest"] },
        { name: "KidsTube", type: "PERSONAL PROJECT · FULL-STACK", description: "A video platform for children with user, video, and playlist management, plus PIN-based access controls.", impact: "REST and GraphQL APIs · Data persistence · Access control", stack: ["Node.js", "Express", "MongoDB", "GraphQL", "JWT"] }
      ],
      note: "Some details of professional work may be limited by confidentiality.", code: "View project on GitHub"
    },
    experience: {
      eyebrow: "EXPERIENCE", title: "Professional experience.", role: "Frontend Developer", company: "Aacrom", date: "April 2026 — August 2026", location: "Costa Rica", context: "PROFESSIONAL INTERNSHIP",
      description: "The enterprise platform was developed from scratch as part of my professional internship.",
      bullets: [
        "Developed frontend features for an enterprise platform using Next.js, React, TypeScript, and Tailwind CSS, following Feature-Sliced Design (FSD) and modular architecture practices.",
        "Consumed REST APIs to deliver data-driven features for authentication, users, clients, projects, milestones, billing, payments, notifications, and financial dashboards.",
        "Implemented Google, Microsoft, and email authentication, session management, protected routes, role-based access control (RBAC), and multi-tenant user management.",
        "Built business workflows for project creation, milestone validation, approvals and rejections, Project Manager assignment, billing authorization, invoice management, and payment tracking.",
        "Implemented business rules and validation for contractual information, billing milestones, tax calculations, user management, and client data to keep frontend operations consistent with backend services.",
        "Collaborated with backend services and teammates in an Agile/Scrum environment, using Git and pull requests to deliver and refine application features."
      ],
      note: "Professional internship completed as part of university studies."
    },
    contact: {
      eyebrow: "AVAILABLE TO CONNECT", titleA: "Let's", titleB: "talk.", text: "If you have an opportunity, would like to discuss software development, or simply want to connect, feel free to reach out through any of these channels.",
      linkedin: "Connect on LinkedIn", github: "Explore GitHub", email: "Send me an email", location: "Alajuela, Costa Rica", back: "Thanks for stopping by"
    },
    footer: "Designed and developed with care.", top: "Back to top"
  },
  es: {
    nav: { about: "Sobre mí", skills: "Habilidades", projects: "Proyectos", experience: "Experiencia", contact: "Contacto", resume: "Descargar CV", themeLight: "Cambiar a tema claro", themeDark: "Cambiar a tema oscuro" },
    hero: {
      eyebrow: "INGENIERO DE SOFTWARE · COSTA RICA",
      titleA: "Ingeniero",
      titleB: "en Software.",
      intro: "Soy Anthony Sancho, bachiller en Ingeniería del Software, con experiencia profesional en frontend y experiencia práctica en backend, diseño de APIs y aplicaciones web confiables.",
      primary: "Contactarme", secondary: "Ver mi trabajo", availability: "Abierto a oportunidades en desarrollo de software",
      cardLabel: "INGENIERO DE SOFTWARE", cardTitle: "Anthony Sancho", cardText: "Frontend · Backend · APIs", location: "Alajuela, Costa Rica", photoAlt: "Fotografía de Anthony Sancho"
    },
    about: {
      eyebrow: "SOBRE MÍ", title: "Un ingeniero de software enfocado en desarrollar soluciones claras y confiables.",
      p1: "Mi formación en Ingeniería del Software me dio bases para analizar problemas, diseñar soluciones y crear software mantenible.",
      p2: "Me gusta comprender un producto de principio a fin y crear productos digitales funcionales, bien organizados y pensados para resolver necesidades reales.",
      facts: [{ label: "Formación", value: "Bachiller en Ingeniería del Software" }, { label: "Ubicación", value: "Costa Rica · UTC−6" }, { label: "Inglés", value: "B2 · Intermedio" }]
    },
    skills: {
      eyebrow: "HABILIDADES TÉCNICAS", title: "Tecnologías y prácticas.", intro: "Un resumen de los lenguajes, frameworks, herramientas y prácticas que forman parte de mi perfil técnico. Usa el botón de cada tarjeta para ver la lista completa.",
      groups: [
        { title: "Lenguajes de programación", items: ["JavaScript", "TypeScript", "Python", "Java", "C#", "PHP"] },
        { title: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Responsive Design", "Component-Based Architecture", "Feature-Sliced Design (FSD)"] },
        { title: "Backend y APIs", items: ["Node.js", "Express.js", "NestJS", ".NET", "Laravel", "MVC", "REST APIs", "GraphQL", "Postman"] },
        { title: "Bases de datos", items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"] },
        { title: "Cloud y DevOps", items: ["AWS", "Docker", "CI/CD Concepts"] },
        { title: "Prácticas de desarrollo", items: ["Agile/Scrum", "REST API Design", "Git", "Pull Requests", "AI-Assisted Development"] }
      ],
      softTitle: "Mi forma de trabajar", soft: ["Trabajo en equipo", "Comunicación efectiva", "Pensamiento analítico y resolución de problemas", "Gestión del tiempo, organización y responsabilidad", "Colaboración con equipos multidisciplinarios", "Aprendizaje continuo"]
    },
    projects: {
      eyebrow: "TRABAJO SELECCIONADO", title: "Proyectos y experiencia práctica.", intro: "Una muestra de trabajos que refleja mi experiencia con interfaces frontend y desarrollo de aplicaciones full-stack.",
      items: [
        { name: "K-Loop", type: "EXPERIENCIA PROFESIONAL · PRÁCTICA FRONTEND", description: "Aporte frontend durante mi práctica profesional en Aacrom, desarrollando una plataforma de inteligencia financiera y de producción para proyectos, hitos, facturación y seguimiento de pagos.", impact: "Práctica profesional · Interfaces por roles · Dashboards", stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest"] },
        { name: "KidsTube", type: "PROYECTO PERSONAL · FULL-STACK", description: "Plataforma de video para niños con gestión de usuarios, videos y listas de reproducción, además de controles de acceso mediante PIN.", impact: "APIs REST y GraphQL · Persistencia de datos · Control de acceso", stack: ["Node.js", "Express", "MongoDB", "GraphQL", "JWT"] }
      ],
      note: "Algunos detalles de proyectos profesionales pueden estar limitados por confidencialidad.", code: "Ver proyecto en GitHub"
    },
    experience: {
      eyebrow: "EXPERIENCIA", title: "Experiencia profesional.", role: "Desarrollador Frontend", company: "Aacrom", date: "Abril 2026 — Agosto 2026", location: "Costa Rica", context: "PRÁCTICA PROFESIONAL",
      description: "La plataforma empresarial fue desarrollada desde cero como parte de mi práctica profesional.",
      bullets: [
        "Desarrollé funcionalidades frontend para una plataforma empresarial con Next.js, React, TypeScript y Tailwind CSS, siguiendo Feature-Sliced Design (FSD) y prácticas de arquitectura modular.",
        "Consumí APIs REST para implementar funcionalidades basadas en datos en autenticación, usuarios, clientes, proyectos, hitos, facturación, pagos, notificaciones y dashboards financieros.",
        "Implementé autenticación con Google, Microsoft y correo electrónico, gestión de sesiones, rutas protegidas, control de acceso basado en roles (RBAC) y gestión multi-tenant de usuarios.",
        "Desarrollé flujos de negocio para crear proyectos, validar hitos, aprobar y rechazar solicitudes, asignar Project Managers, autorizar facturación, gestionar facturas y dar seguimiento a pagos.",
        "Implementé reglas de negocio y validaciones para información contractual, hitos de facturación, cálculos de impuestos, gestión de usuarios y datos de clientes, manteniendo la consistencia entre las operaciones frontend y los servicios backend.",
        "Colaboré con los servicios backend y el equipo en un entorno Agile/Scrum, usando Git y pull requests para entregar y mejorar funcionalidades de la aplicación."
      ],
      note: "Práctica profesional realizada como parte de la formación universitaria."
    },
    contact: {
      eyebrow: "DISPONIBLE PARA CONECTAR", titleA: "¿Hablamos?", titleB: "", text: "Si tienes una oportunidad, quieres conversar sobre desarrollo de software o simplemente conectar, puedes escribirme directamente por cualquiera de estos medios.",
      linkedin: "Conectar en LinkedIn", github: "Explorar GitHub", email: "Enviarme un correo", location: "Alajuela, Costa Rica", back: "Gracias por visitar mi portfolio"
    },
    footer: "Diseñado y desarrollado con dedicación.", top: "Volver arriba"
  }
} as const;
