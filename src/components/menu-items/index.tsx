import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import MobilleMenu from "./mobille-menu";
import i18n from "@/i18n";


const MenuItems = () => {
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
];MobilleMenu
 
const menuItems =
  i18n.language === "fa"? menuItemsFa: i18n.language === "de"? menuItemsDe : menuItemsEn;
  return (
    <div className="text-primary">
     <div
  className={`text-2xl sm:flex gap-5 ml-3 w-full hidden ${
    i18n.language === "fa" ? "flex-row-reverse text-right" : ""
  }`}
>
  {menuItems.map((item) => (
    <MenuItem key={item.id} {...item} />
  ))}
</div>

      <MobilleMenu />
    </div>
  );
};

export default MenuItems;

const MenuItem = ({
  title,
  to,
  className,
}: {
  title: string;
  to: string;
  className?: string;
}) => {
  const { pathname } = useLocation();
  return (
    <motion.span
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5 }}
      className="relative group inline-block"
    >
      <Link className={`${className} `} to={to}>
        {title}
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "anticipate" }}
          className={`absolute left-0 -bottom-1 bg-primary h-[2px] group-hover:w-full transition-[width] ease-in-out duration-300 ${
            to === pathname ? "w-full" : "w-0"
          }`}
        ></motion.span>
      </Link>
    </motion.span>
  );
};
