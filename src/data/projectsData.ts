
// Project data categorized by type
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  content?: {
    overview?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    technologies?: string[];
    images?: string[];
  };
}

export type ProjectCategory = "case-study" | "side-projects" | "ui-concept" | "design-system";

export const projectsByCategory: Record<ProjectCategory, Project[]> = {
  "case-study": [
    {
      title: "Lola Market · Mejorando la experiencia de compra online",
      description: "Rediseño de la plataforma para optimizar la experiencia de compra",
      imageUrl: "/lovable-uploads/f70514fc-0d07-4fe1-9f57-1f88bc639a3c.png",
      link: "https://dsanz.me/dsanz/Lola-Market-19dc0bb1a60381118d77c1831dcc3321",
      content: {
        overview: "Lola Market es una plataforma de compra online que conecta a los usuarios con los mejores comercios locales. El proyecto se centró en rediseñar la experiencia de usuario para hacerla más intuitiva y eficiente.",
        challenge: "La plataforma presentaba problemas de usabilidad que dificultaban el proceso de compra, especialmente para usuarios nuevos. La navegación entre categorías no era intuitiva y el proceso de checkout generaba abandonos.",
        solution: "Realizamos un rediseño completo centrado en el usuario, simplificando la navegación, mejorando el buscador y optimizando el proceso de checkout. Implementamos un diseño responsive que funciona perfectamente en dispositivos móviles.",
        results: "El rediseño logró aumentar la conversión en un 25% y reducir la tasa de abandono del carrito en un 30%. La satisfacción del usuario mejoró significativamente según las encuestas post-lanzamiento.",
        technologies: ["React", "Tailwind CSS", "Figma", "User Testing"],
        images: ["/lovable-uploads/f70514fc-0d07-4fe1-9f57-1f88bc639a3c.png"]
      }
    },
    {
      title: "Nailted IA · Solucionando el problema de la gestión de mensajes",
      description: "Implementación de IA para la gestión eficiente de mensajes corporativos",
      imageUrl: "/lovable-uploads/eb4dc390-0d4c-4ef1-89bc-279c3c3e0c53.png",
      link: "https://dsanz.me/dsanz/Nailted-IA-Solucionando-el-problema-de-la-gesti-n-de-mensajes-1bac0bb1a603805fb89af410e7fb0b9a",
      content: {
        overview: "Nailted es una plataforma de recursos humanos que busca mejorar la comunicación interna. Este proyecto implementó soluciones de IA para optimizar la gestión de mensajes entre equipos.",
        challenge: "La empresa enfrentaba problemas con el volumen de mensajes internos, dificultando la priorización y respuesta oportuna. Los equipos perdían información importante entre tantos mensajes.",
        solution: "Desarrollamos un sistema inteligente que categoriza automáticamente los mensajes, identifica prioridades y sugiere respuestas. La interfaz fue diseñada para ser intuitiva y adaptable a diferentes roles dentro de la empresa.",
        results: "El tiempo de respuesta se redujo en un 40% y la satisfacción del equipo aumentó significativamente. La plataforma ahora gestiona eficientemente más de 10,000 mensajes diarios.",
        technologies: ["Next.js", "Machine Learning", "NLP", "Material UI"],
        images: ["/lovable-uploads/eb4dc390-0d4c-4ef1-89bc-279c3c3e0c53.png"]
      }
    },
    {
      title: "Terra & Pastos · Diseñando alimentación sostenible",
      description: "Creación de identidad visual y plataforma para agricultura regenerativa",
      imageUrl: "/lovable-uploads/ce8e0e3d-c821-4885-b144-95b371e6301b.png",
      link: "https://dsanz.me/dsanz/Terra-Pastos-19dc0bb1a60381f6b723e0a62f2671fc",
      content: {
        overview: "Terra & Pastos es una iniciativa de agricultura regenerativa que promueve prácticas sostenibles en la producción de alimentos. Este proyecto abarcó desde la creación de identidad hasta el desarrollo de su plataforma digital.",
        challenge: "El cliente necesitaba comunicar conceptos complejos sobre agricultura regenerativa de manera accesible y atractiva para el consumidor final, además de crear un sistema de venta directa.",
        solution: "Desarrollamos una identidad visual basada en elementos naturales y orgánicos, junto con una plataforma de e-commerce que educa al usuario sobre el origen y proceso de los productos que está comprando.",
        results: "La plataforma logró aumentar las ventas directas en un 150% en el primer trimestre y expandir la base de clientes a nuevas regiones. El proyecto ganó reconocimiento en certámenes de diseño sostenible.",
        technologies: ["WordPress", "WooCommerce", "Adobe Illustrator", "Branding"],
        images: ["/lovable-uploads/ce8e0e3d-c821-4885-b144-95b371e6301b.png"]
      }
    },
    {
      title: "Wezone · Diseño y optimización web",
      description: "Rediseño de plataforma digital para gestión de zonas de trabajo compartido",
      imageUrl: "/lovable-uploads/ab61593c-ad73-4f96-9258-bfb82ad74619.png",
      link: "https://dsanz.me/dsanz/Wezone-19dc0bb1a60381b8a657eaa8f7659a5d",
      content: {
        overview: "Wezone es una plataforma que conecta profesionales con espacios de coworking. El proyecto incluyó el rediseño completo de su presencia digital para mejorar la experiencia de usuario y aumentar las reservas.",
        challenge: "La plataforma anterior presentaba problemas de usabilidad y un diseño desactualizado que afectaba la percepción de la marca. El proceso de reserva era complejo y poco intuitivo.",
        solution: "Rediseñamos completamente la interfaz priorizando la búsqueda de espacios y la visualización clara de las características de cada lugar. Simplificamos el proceso de reserva y añadimos un sistema de reseñas transparente.",
        results: "Las reservas aumentaron un 70% tras el rediseño, mientras que el tiempo promedio para completar una reserva se redujo de 5 minutos a menos de 2 minutos.",
        technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
        images: ["/lovable-uploads/ab61593c-ad73-4f96-9258-bfb82ad74619.png"]
      }
    },
    {
      title: "FitTasty · Diseñando una app de recetas saludables",
      description: "Desarrollo de aplicación móvil para la planificación de comidas saludables",
      imageUrl: "/lovable-uploads/73f88ee9-a074-4f50-8802-ffdc91fa4d57.png",
      link: "https://dsanz.me/dsanz/FitTasty-19dc0bb1a60381107acd8f642dd17319a",
      content: {
        overview: "FitTasty es una aplicación móvil que ayuda a los usuarios a planificar comidas saludables según sus objetivos nutricionales y preferencias. Este proyecto abarcó desde la conceptualización hasta el lanzamiento.",
        challenge: "El mercado de apps de recetas está saturado, por lo que necesitábamos crear una propuesta de valor única centrada en la personalización y facilidad de uso, adaptada a diferentes dietas y restricciones alimentarias.",
        solution: "Desarrollamos un sistema de recomendación basado en las preferencias del usuario, restricciones dietéticas y objetivos de salud. La interfaz se diseñó para ser intuitiva con un enfoque en la visualización atractiva de las recetas.",
        results: "La aplicación alcanzó más de 50,000 descargas en el primer mes, con una tasa de retención del 45%, significativamente superior a la media del sector (25%).",
        technologies: ["React Native", "Firebase", "Redux", "Nutrición API"],
        images: ["/lovable-uploads/73f88ee9-a074-4f50-8802-ffdc91fa4d57.png"]
      }
    }
  ],
  "side-projects": [
    {
      title: "WOD Time",
      description: "Aplicación para cronometrar entrenamientos de CrossFit",
      imageUrl: "/lovable-uploads/8f59834b-4ec5-4905-a66c-df3c1d4c2a46.png",
      link: "https://dsanz.me/dsanz/WOD-Time-19dc0bb1a6038113991ad9807d566e6e",
      content: {
        overview: "WOD Time es una aplicación que permite a los atletas de CrossFit cronometrar sus entrenamientos (WODs) con precisión y realizar un seguimiento de su progreso a lo largo del tiempo.",
        challenge: "Los atletas necesitaban una herramienta específica para CrossFit que pudiera manejar diferentes tipos de temporizadores: AMRAP, For Time, EMOM, etc., todo con una interfaz simple y que no distrajera durante el entrenamiento.",
        solution: "Desarrollé una aplicación minimalista pero potente que incluye todos los tipos de temporizadores comunes en CrossFit, con alertas sonoras personalizables y un diseño high-contrast para usar durante el ejercicio intenso.",
        results: "La aplicación ha sido adoptada por varios boxes de CrossFit como su temporizador oficial y cuenta con una comunidad activa de usuarios que contribuyen con sugerencias de mejora.",
        technologies: ["Swift", "UIKit", "Core Audio", "HealthKit"],
        images: ["/lovable-uploads/8f59834b-4ec5-4905-a66c-df3c1d4c2a46.png"]
      }
    },
    {
      title: "InCity",
      description: "Plataforma para descubrir eventos locales en tu ciudad",
      imageUrl: "/lovable-uploads/5ef8eb17-70b5-4670-8752-cde7fe749efb.png", 
      link: "https://dsanz.me/dsanz/inCity-19dc0bb1a60381d18924db26fb4fcc83",
      content: {
        overview: "InCity es una plataforma que ayuda a los usuarios a descubrir eventos culturales y de ocio en su ciudad, conectando a promotores locales con audiencias interesadas.",
        challenge: "Las plataformas existentes estaban fragmentadas o centradas solo en grandes eventos, dejando de lado la rica oferta cultural de pequeños promotores y espacios alternativos.",
        solution: "Creamos una plataforma que democratiza la promoción de eventos, permitiendo a cualquier organizador publicar y promocionar sus actividades con un sistema de recomendación basado en intereses y ubicación.",
        results: "En su fase beta, InCity ya ha conectado a más de 5,000 asistentes con eventos locales en Madrid, con planes de expansión a otras ciudades españolas.",
        technologies: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
        images: ["/lovable-uploads/5ef8eb17-70b5-4670-8752-cde7fe749efb.png"]
      }
    },
    {
      title: "Vofy",
      description: "Herramienta para crear portafolios de voz para actores de doblaje",
      imageUrl: "/lovable-uploads/4ff37520-7340-4d43-98f9-47ba0cd2565a.png",
      link: "https://dsanz.me/dsanz/Vofy-19dc0bb1a603813c8cfcde94b3deb5bb",
      content: {
        overview: "Vofy es una aplicación web que permite a actores de voz y doblaje crear portafolios digitales con muestras de su trabajo, facilitando su descubrimiento por parte de directores y productores.",
        challenge: "Los actores de doblaje carecían de una plataforma especializada para mostrar su trabajo. Las soluciones genéricas no se adaptaban a las necesidades específicas del sector del doblaje y la locución.",
        solution: "Desarrollamos una plataforma con reproducción de audio optimizada, categorización por tipos de voz y registros, y funcionalidades de networking específicas para la industria.",
        results: "Vofy conecta actualmente a más de 500 profesionales de la voz con estudios de grabación y productoras, facilitando la contratación directa sin intermediarios.",
        technologies: ["Vue.js", "Web Audio API", "Node.js", "MongoDB"],
        images: ["/lovable-uploads/4ff37520-7340-4d43-98f9-47ba0cd2565a.png"]
      }
    },
    {
      title: "Playlist Spotify con Suno IA",
      description: "Experimento que combina IA generativa con la API de Spotify",
      imageUrl: "/lovable-uploads/e29b9a74-5a15-4124-9110-5ca3b7846664.png",
      link: "https://dsanz.me/dsanz/Playlist-Spotify-con-Suno-IA-19dc0bb1a6038148a096d47c120a2ddb",
      content: {
        overview: "Este proyecto experimental utiliza Suno AI para generar música original basada en prompts de usuario y luego crea listas de reproducción personalizadas en Spotify que combinan estas creaciones con canciones similares.",
        challenge: "Queríamos explorar las posibilidades creativas de la IA generativa en el campo musical, creando un puente entre la música generada artificialmente y el vasto catálogo existente.",
        solution: "Integramos la API de Suno para generar fragmentos musicales y utilizamos algoritmos de análisis de audio para encontrar canciones similares en Spotify, creando una experiencia musical híbrida y personalizada.",
        results: "El proyecto ha servido como prueba de concepto para futuros desarrollos en el campo de la curaduría musical asistida por IA y ha generado interesantes conversaciones sobre el futuro de la creación musical.",
        technologies: ["Python", "Spotify API", "Suno AI", "Flask"],
        images: ["/lovable-uploads/e29b9a74-5a15-4124-9110-5ca3b7846664.png"]
      }
    }
  ],
  "ui-concept": [
    {
      title: "Fifa World Cup Russia 2018",
      description: "Concepto de UI para una aplicación de seguimiento del Mundial",
      imageUrl: "/lovable-uploads/9467edbb-a87a-4928-af91-c44d23da993e.png", 
      link: "https://dsanz.me/dsanz/Fifa-World-Cup-Russia-2018-19dc0bb1a603816c8701e9ae1cd3c132",
      content: {
        overview: "Este concepto de UI reimagina la experiencia digital del Mundial de Fútbol Rusia 2018, enfocándose en hacer el seguimiento de partidos, estadísticas y equipos más visual e intuitivo.",
        challenge: "Las aplicaciones oficiales de eventos deportivos suelen priorizar la cantidad de información sobre la experiencia de usuario, resultando en interfaces sobrecargadas y difíciles de navegar.",
        solution: "Diseñé una interfaz minimalista pero completa que utiliza la jerarquía visual, codificación por colores y visualización de datos para hacer la información deportiva más accesible y agradable.",
        results: "El concepto recibió reconocimiento en plataformas de diseño como Dribbble y Behance, siendo destacado por su enfoque en la usabilidad sin sacrificar la riqueza informativa.",
        technologies: ["Adobe XD", "Illustrator", "Design System", "Prototyping"],
        images: ["/lovable-uploads/9467edbb-a87a-4928-af91-c44d23da993e.png"]
      }
    },
    {
      title: "Everbook",
      description: "Concepto de aplicación para gestionar y compartir recuerdos digitales",
      imageUrl: "/lovable-uploads/ecabc4e2-5b81-41ab-b42d-73c76bff0b6c.png",
      link: "https://dsanz.me/dsanz/Everbook-19dc0bb1a603815ab602ef8627e8f1c4",
      content: {
        overview: "Everbook es un concepto de aplicación que reimagina cómo guardamos y compartimos recuerdos digitales, combinando elementos de álbum de fotos tradicional con funcionalidades modernas.",
        challenge: "A pesar de la abundancia de fotos digitales que tomamos, muchas se pierden en el océano de nuestras bibliotecas. Queríamos crear un espacio más significativo y organizado para nuestros recuerdos más preciados.",
        solution: "Diseñé una interfaz que permite crear colecciones temáticas de recuerdos multimedia con narrativas asociadas, facilitando la colaboración entre usuarios para construir álbumes compartidos.",
        results: "Este concepto evolucionó hasta convertirse en un proyecto de diseño más amplio explorando la intersección entre la nostalgia analógica y las posibilidades digitales en la preservación de memorias.",
        technologies: ["Figma", "Interaction Design", "Motion Design", "User Research"],
        images: ["/lovable-uploads/ecabc4e2-5b81-41ab-b42d-73c76bff0b6c.png"]
      }
    },
    {
      title: "EeOoo",
      description: "Interfaz minimalista para una aplicación de mensajería por voz",
      imageUrl: "/lovable-uploads/c40ff73a-4712-4076-8316-0a2377c92999.png", 
      link: "https://dsanz.me/dsanz/EeeOoo-19dc0bb1a60381279487e929ec6a9de2",
      content: {
        overview: "EeOoo es un concepto de mensajería que prioriza la comunicación por voz a través de una interfaz minimalista y gestos intuitivos, diseñada para momentos en que escribir no es conveniente.",
        challenge: "Las aplicaciones de mensajería actuales están optimizadas para texto, haciendo que la comunicación por voz sea una función secundaria a pesar de ser más natural y expresiva en muchos contextos.",
        solution: "Diseñé una interfaz centrada en la voz que utiliza gestos simples y feedback visual para grabar, escuchar y responder mensajes sin necesidad de mirar la pantalla constantemente.",
        results: "El concepto fue seleccionado para su presentación en un workshop de diseño de interacción y sirvió como caso de estudio sobre interfaces minimalistas con gran impacto funcional.",
        technologies: ["Sketch", "Principle", "Microinteractions", "Sound Design"],
        images: ["/lovable-uploads/c40ff73a-4712-4076-8316-0a2377c92999.png"]
      }
    }
  ],
  "design-system": [
    {
      title: "Backoffice",
      description: "Sistema de diseño para interfaces administrativas",
      imageUrl: "/lovable-uploads/7e651e27-57ea-4dd1-a075-4249654deb44.png",
      link: "https://dsanz.me/dsanz/Backoffice-19dc0bb1a60381a69d89c38f8a8b7f5e",
      content: {
        overview: "Este sistema de diseño fue creado específicamente para interfaces administrativas y backoffice, equilibrando eficiencia funcional con una estética moderna y accesible.",
        challenge: "Los sistemas de backoffice suelen sacrificar la experiencia de usuario por la funcionalidad, resultando en interfaces confusas que reducen la productividad y aumentan los errores operativos.",
        solution: "Desarrollé un sistema completo con componentes modulares, guías de uso, tokens de diseño y patrones de interacción optimizados para tareas administrativas complejas y uso intensivo.",
        results: "El sistema ha sido implementado en múltiples proyectos, reduciendo el tiempo de desarrollo de interfaces administrativas en un 40% y mejorando significativamente la satisfacción de los usuarios internos.",
        technologies: ["Figma", "React", "Storybook", "Accessibility Testing"],
        images: ["/lovable-uploads/7e651e27-57ea-4dd1-a075-4249654deb44.png"]
      }
    },
    {
      title: "Style Guide FitTasty",
      description: "Sistema de diseño para la app de recetas saludables",
      imageUrl: "/lovable-uploads/bf45456f-8df1-471f-ab33-a27378b45047.png",
      link: "https://dsanz.me/dsanz/Style-Guide-FitTasty-19dc0bb1a60381558a71d60cad1385a3",
      content: {
        overview: "Esta guía de estilo establece los fundamentos visuales y de interacción para la aplicación FitTasty, asegurando consistencia y eficiencia en el desarrollo multiplataforma.",
        challenge: "Necesitábamos un sistema que transmitiera los valores de la marca (frescura, salud, accesibilidad) mientras proporcionaba una base técnica sólida para el equipo de desarrollo.",
        solution: "Creamos un sistema de diseño completo con una paleta inspirada en alimentos frescos, tipografía optimizada para recetas, iconografía personalizada y componentes específicos para visualización de información nutricional.",
        results: "El sistema ha permitido escalar la aplicación a múltiples plataformas manteniendo consistencia visual y funcional, además de reducir el tiempo de implementación de nuevas funcionalidades.",
        technologies: ["Figma", "React Native", "Design Tokens", "Animation Guidelines"],
        images: ["/lovable-uploads/bf45456f-8df1-471f-ab33-a27378b45047.png"]
      }
    }
  ]
};

// All projects combined for the "All" tab
export const allProjects = [
  ...projectsByCategory["case-study"],
  ...projectsByCategory["side-projects"],
  ...projectsByCategory["ui-concept"],
  ...projectsByCategory["design-system"]
];
