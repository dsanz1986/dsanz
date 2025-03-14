
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
      description: "",
      imageUrl: "/lovable-uploads/f70514fc-0d07-4fe1-9f57-1f88bc639a3c.png",
      link: "https://dsanz.me/dsanz/Lola-Market-19dc0bb1a60381118d77c1831dcc3321"
    },
    {
      title: "Terra Pastos",
      description: "",
      imageUrl: "/lovable-uploads/ce8e0e3d-c821-4885-b144-95b371e6301b.png", // Imagen de vacas en campo
      link: "https://dsanz.me/dsanz/Terra-Pastos-19dc0bb1a60381f6b723e0a62f2671fc"
    },
    {
      title: "Wezone",
      description: "",
      imageUrl: "/lovable-uploads/ab61593c-ad73-4f96-9258-bfb82ad74619.png", // Imagen de gimnasio crossfit
      link: "https://dsanz.me/dsanz/Wezone-19dc0bb1a60381b8a657eaa8f7659a5d"
    },
    {
      title: "FitTasty",
      description: "",
      imageUrl: "/lovable-uploads/73f88ee9-a074-4f50-8802-ffdc91fa4d57.png", // Imagen de app de comida saludable
      link: "https://dsanz.me/dsanz/FitTasty-19dc0bb1a60381107acd8f642dd17319a"
    }
  ],
  "side-projects": [
    {
      title: "WOD Time",
      description: "",
      imageUrl: "/lovable-uploads/2b13d090-b75e-43ef-a551-50222fb054db.png", // Imagen de pesas
      link: "https://dsanz.me/dsanz/WOD-Time-19dc0bb1a6038113991ad9807d566e6e"
    },
    {
      title: "InCity",
      description: "",
      imageUrl: "https://dsanz.me/dsanz/inCity-19dc0bb1a60381d18924db26fb4fcc83?image=true",
      link: "https://dsanz.me/dsanz/inCity-19dc0bb1a60381d18924db26fb4fcc83"
    },
    {
      title: "Everbook",
      description: "",
      imageUrl: "https://dsanz.me/dsanz/Everbook-19dc0bb1a603815ab602ef8627e8f1c4?image=true",
      link: "https://dsanz.me/dsanz/Everbook-19dc0bb1a603815ab602ef8627e8f1c4"
    },
    {
      title: "EeOoo",
      description: "",
      imageUrl: "https://dsanz.me/dsanz/EeeOoo-19dc0bb1a60381279487e929ec6a9de2?image=true",
      link: "https://dsanz.me/dsanz/EeeOoo-19dc0bb1a60381279487e929ec6a9de2"
    }
  ],
  "ui-concept": [
    {
      title: "Fifa World Cup Russia 2018",
      description: "",
      imageUrl: "https://dsanz.me/dsanz/Fifa-World-Cup-Russia-2018-19dc0bb1a603816c8701e9ae1cd3c132?image=true",
      link: "https://dsanz.me/dsanz/Fifa-World-Cup-Russia-2018-19dc0bb1a603816c8701e9ae1cd3c132"
    },
    {
      title: "Playlist Spotify con Suno IA",
      description: "",
      imageUrl: "https://dsanz.me/dsanz/Playlist-Spotify-con-Suno-IA-19dc0bb1a6038148a096d47c120a2ddb?image=true",
      link: "https://dsanz.me/dsanz/Playlist-Spotify-con-Suno-IA-19dc0bb1a6038148a096d47c120a2ddb"
    },
    {
      title: "Vofy",
      description: "",
      imageUrl: "https://dsanz.me/dsanz/Vofy-19dc0bb1a603813c8cfcde94b3deb5bb?image=true",
      link: "https://dsanz.me/dsanz/Vofy-19dc0bb1a603813c8cfcde94b3deb5bb"
    },
    {
      title: "SOMOSDSGN",
      description: "",
      imageUrl: "https://dsanz.me/dsanz/SOMOSDSGN-51d778f082724b5a82f4951834c262a4?image=true",
      link: "https://dsanz.me/dsanz/SOMOSDSGN-51d778f082724b5a82f4951834c262a4"
    }
  ],
  "design-system": [
    {
      title: "Backoffice",
      description: "",
      imageUrl: "https://dsanz.me/dsanz/Backoffice-19dc0bb1a60381a69d89c38f8a8b7f5e?image=true",
      link: "https://dsanz.me/dsanz/Backoffice-19dc0bb1a60381a69d89c38f8a8b7f5e"
    },
    {
      title: "Style Guide FitTasty",
      description: "",
      imageUrl: "https://dsanz.me/dsanz/Style-Guide-FitTasty-19dc0bb1a60381558a71d60cad1385a3?image=true",
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
