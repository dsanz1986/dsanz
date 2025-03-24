
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
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "https://dsanz.me/dsanz/inCity-19dc0bb1a60381d18924db26fb4fcc83"
    },
    {
      title: "Everbook",
      description: "",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      link: "https://dsanz.me/dsanz/Everbook-19dc0bb1a603815ab602ef8627e8f1c4"
    },
    {
      title: "EeOoo",
      description: "",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      link: "https://dsanz.me/dsanz/EeeOoo-19dc0bb1a60381279487e929ec6a9de2"
    }
  ],
  "ui-concept": [
    {
      title: "Fifa World Cup Russia 2018",
      description: "",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      link: "https://dsanz.me/dsanz/Fifa-World-Cup-Russia-2018-19dc0bb1a603816c8701e9ae1cd3c132"
    },
    {
      title: "Playlist Spotify con Suno IA",
      description: "",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      link: "https://dsanz.me/dsanz/Playlist-Spotify-con-Suno-IA-19dc0bb1a6038148a096d47c120a2ddb"
    },
    {
      title: "Vofy",
      description: "",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      link: "https://dsanz.me/dsanz/Vofy-19dc0bb1a603813c8cfcde94b3deb5bb"
    },
    {
      title: "SOMOSDSGN",
      description: "",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      link: "https://dsanz.me/dsanz/SOMOSDSGN-51d778f082724b5a82f4951834c262a4"
    }
  ],
  "design-system": [
    {
      title: "Backoffice",
      description: "",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "https://dsanz.me/dsanz/Backoffice-19dc0bb1a60381a69d89c38f8a8b7f5e"
    },
    {
      title: "Style Guide FitTasty",
      description: "",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
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
