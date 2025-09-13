import i18n from "@/i18n";

const menuItemsEn = [
  { id: 0, title: "Home", to: "/" },
  { id: 1, title: "Skills", to: "/skills" },
  { id: 2, title: "Experience", to: "/experience" },
  { id: 3, title: "About", to: "/about" },
  { id: 4, title: "Projects", to: "/projects" }
];

const menuItemsFa = [
  { id: 5, title: "خانه", to: "/" },
  { id: 6, title: "مهارت‌ها", to: "/skills" },
  { id: 7, title: "تجربه", to: "/experience" },
  { id: 8, title: "درباره", to: "/about" },
  { id: 9, title: "پروژه‌ها", to: "/projects" }
];
const menuItemsDe = [
  { id: 10, title: "Hause", to: "/" },
  { id: 11, title: "Fähigkeiten", to: "/skills" },
  { id: 11, title: "Erfahrung", to: "/experience" },
  { id: 12, title: "Über mich", to: "/about" },
  { id: 13, title: "Projekte", to: "/projects" }
];
 
export const menuItems = i18n.language === "fa"? menuItemsFa: i18n.language === "de"? menuItemsDe : menuItemsEn;
