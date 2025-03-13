
// Project data categorized by type
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export type ProjectCategory = "case-study" | "side-projects" | "ui-concept" | "design-system";

export const projectsByCategory: Record<ProjectCategory, Project[]> = {
  "case-study": [
    {
      title: "Lola Market",
      description: "Diseño UX/UI para plataforma de compra online de supermercado",
      imageUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop",
      link: "https://dsanz.me/dsanz/Lola-Market-19dc0bb1a60381118d77c1831dcc3321"
    },
    {
      title: "Terra Pastos",
      description: "Diseño UX/UI para plataforma de gestión agrícola sostenible",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1332&auto=format&fit=crop",
      link: "https://dsanz.me/dsanz/Terra-Pastos-19dc0bb1a60381f6b723e0a62f2671fc"
    },
    {
      title: "Diseño de aplicación móvil",
      description: "Interfaz intuitiva para app de finanzas personales",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "https://www.notion.so/dsanz/David-Sanz-a295b29f93824bfd99445b1db5fd70af?pvs=4#19dc0bb1a603800488a0ceb555fde24c"
    }
  ],
  "side-projects": [
    {
      title: "Personal Finance App",
      description: "Side project para gestión de finanzas personales",
      imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
      link: "https://www.notion.so/dsanz/David-Sanz-a295b29f93824bfd99445b1db5fd70af?pvs=4#19dc0bb1a603800488a0ceb555fde24c"
    },
    {
      title: "Sustainable Living Dashboard",
      description: "Proyecto personal de dashboard para vida sostenible",
      imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1470&auto=format&fit=crop",
      link: "https://dsanz.me/dsanz/Sustainable-Living-19dc0bb1a60381f6b723e0a62f2671fc"
    }
  ],
  "ui-concept": [
    {
      title: "Concept App",
      description: "Concepto de interfaz para app de productividad",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "https://www.notion.so/dsanz/David-Sanz-a295b29f93824bfd99445b1db5fd70af?pvs=4#19dc0bb1a603800488a0ceb555fde24c"
    },
    {
      title: "Digital Wellness UI",
      description: "Concepto visual para app de bienestar digital",
      imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=1470&auto=format&fit=crop",
      link: "https://dsanz.me/dsanz/Digital-Wellness-19dc0bb1a60381f6b723e0a62f2671fc"
    }
  ],
  "design-system": [
    {
      title: "Diseño de sistema",
      description: "Creación de sistema de diseño para startup tecnológica",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      link: "https://www.notion.so/dsanz/David-Sanz-a295b29f93824bfd99445b1db5fd70af?pvs=4#19dc0bb1a603800488a0ceb555fde24c"
    },
    {
      title: "Finance Design System",
      description: "Sistema de diseño para aplicaciones financieras",
      imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1470&auto=format&fit=crop",
      link: "https://dsanz.me/dsanz/Finance-System-19dc0bb1a60381f6b723e0a62f2671fc"
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
