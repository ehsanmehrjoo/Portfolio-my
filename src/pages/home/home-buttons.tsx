

// components
import ButtonType1 from "../../components/button-type1";
import i18n from "@/i18n";

const HomeButtons = () => {
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
 
const menuItems =
  i18n.language === "fa"? menuItemsFa: i18n.language === "de"? menuItemsDe : menuItemsEn;


 const isDe = i18n.language === "de";


  return (
    <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
      <a target="_blank" download={true} href={`${isDe ?  "/ehsan mehrjo-De.pdf" : "/ehsan mehrjo-En.pdf"}`}>
 
        <ButtonType1>Download CV</ButtonType1>
      </a>
      <DividerLine />
      {menuItems.map((item) => (
        <ButtonType1 key={item.id} to={item.to}>
          {item.title}
        </ButtonType1>
      ))}
    </div>
  );
};

export default HomeButtons;

const DividerLine = () => (
  <div className="w-[2px] rounded-lg bg-primary mx-2 hidden sm:block"></div>
);
