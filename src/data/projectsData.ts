
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
      title: "Lola Market · Mejorando la experiencia de compra online",
      description: "",
      imageUrl: "/lovable-uploads/f70514fc-0d07-4fe1-9f57-1f88bc639a3c.png",
      link: "https://dsanz.me/dsanz/Lola-Market-19dc0bb1a60381118d77c1831dcc3321"
    },
    {
      title: "Nailted IA · Solucionando el problema de la gestión de mensajes",
      description: "",
      imageUrl: "/lovable-uploads/eb4dc390-0d4c-4ef1-89bc-279c3c3e0c53.png",
      link: "https://dsanz.me/dsanz/Nailted-IA-Solucionando-el-problema-de-la-gesti-n-de-mensajes-1bac0bb1a603805fb89af410e7fb0b9a"
    },
    {
      title: "Terra & Pastos · Diseñando alimentación sostenible",
      description: "",
      imageUrl: "/lovable-uploads/ce8e0e3d-c821-4885-b144-95b371e6301b.png",
      link: "https://dsanz.me/dsanz/Terra-Pastos-19dc0bb1a60381f6b723e0a62f2671fc"
    },
    {
      title: "Wezone · Diseño y optimización web",
      description: "",
      imageUrl: "/lovable-uploads/ab61593c-ad73-4f96-9258-bfb82ad74619.png",
      link: "https://dsanz.me/dsanz/Wezone-19dc0bb1a60381b8a657eaa8f7659a5d"
    },
    {
      title: "FitTasty · Diseñando una app de recetas saludables",
      description: "",
      imageUrl: "/lovable-uploads/73f88ee9-a074-4f50-8802-ffdc91fa4d57.png",
      link: "https://dsanz.me/dsanz/FitTasty-19dc0bb1a60381107acd8f642dd17319a"
    }
  ],
  "side-projects": [
    {
      title: "WOD Time",
      description: "",
      imageUrl: "/lovable-uploads/8f59834b-4ec5-4905-a66c-df3c1d4c2a46.png", // Changed to Fifa World Cup Russia 2018
      link: "https://dsanz.me/dsanz/WOD-Time-19dc0bb1a6038113991ad9807d566e6e"
    },
    {
      title: "InCity",
      description: "",
      imageUrl: "/lovable-uploads/5ef8eb17-70b5-4670-8752-cde7fe749efb.png", 
      link: "https://dsanz.me/dsanz/inCity-19dc0bb1a60381d18924db26fb4fcc83"
    },
    {
      title: "Vofy",
      description: "",
      imageUrl: "/lovable-uploads/4ff37520-7340-4d43-98f9-47ba0cd2565a.png",
      link: "https://dsanz.me/dsanz/Vofy-19dc0bb1a603813c8cfcde94b3deb5bb"
    },
    // Removed SOMOSDSGN project
    {
      title: "Playlist Spotify con Suno IA",
      description: "",
      imageUrl: "/lovable-uploads/e29b9a74-5a15-4124-9110-5ca3b7846664.png",
      link: "https://dsanz.me/dsanz/Playlist-Spotify-con-Suno-IA-19dc0bb1a6038148a096d47c120a2ddb"
    }
  ],
  "ui-concept": [
    {
      title: "Fifa World Cup Russia 2018",
      description: "",
      imageUrl: "/lovable-uploads/9467edbb-a87a-4928-af91-c44d23da993e.png", 
      link: "https://dsanz.me/dsanz/Fifa-World-Cup-Russia-2018-19dc0bb1a603816c8701e9ae1cd3c132"
    },
    {
      title: "Everbook",
      description: "",
      imageUrl: "/lovable-uploads/ecabc4e2-5b81-41ab-b42d-73c76bff0b6c.png",
      link: "https://dsanz.me/dsanz/Everbook-19dc0bb1a603815ab602ef8627e8f1c4"
    },
    {
      title: "EeOoo",
      description: "",
      imageUrl: "/lovable-uploads/c40ff73a-4712-4076-8316-0a2377c92999.png", 
      link: "https://dsanz.me/dsanz/EeeOoo-19dc0bb1a60381279487e929ec6a9de2"
    }
  ],
  "design-system": [
    {
      title: "Backoffice",
      description: "",
      imageUrl: "/lovable-uploads/7e651e27-57ea-4dd1-a075-4249654deb44.png",
      link: "https://dsanz.me/dsanz/Backoffice-19dc0bb1a60381a69d89c38f8a8b7f5e"
    },
    {
      title: "Style Guide FitTasty",
      description: "",
      imageUrl: "/lovable-uploads/bf45456f-8df1-471f-ab33-a27378b45047.png",
      link: "https://dsanz.me/dsanz/Style-Guide-FitTasty-19dc0bb1a60381558a71d60cad1385a3"
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
