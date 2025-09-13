import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./mobille-menu";
import i18n from "@/i18n";
import { menuItems } from "./menuItems";

// Interface for MenuItem props
interface MenuItemProps {
  title: string;
  to: string;
  className?: string;
}

// Animation variants for reusable animations
const linkVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const underlineVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "100%", opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  hover: { width: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
};

const MenuItems = () => {
  const isRtl = i18n.language === "fa"; // Check language direction

  return (
    <nav className="text-primary font-medium">
      {/* Desktop menu */}
      <div
        className={`hidden sm:flex gap-6 ml-3 w-full items-center ${
          isRtl ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>

      {/* Mobile menu */}
      <MobileMenu />
    </nav>
  );
};

// Menu item component
const MenuItem = ({ title, to, className }: MenuItemProps) => {
  const { pathname } = useLocation();
  const isActive = to === pathname;

  return (
    <motion.div
      variants={linkVariants}
      initial="initial"
      animate="animate"
      className="relative group"
      whileHover={{ scale: 1.05 }} // Add subtle hover effect
    >
      <Link
        to={to}
        className={`px-2 py-1 text-lg transition-colors duration-300 hover:text-primary-dark ${
          isActive ? "text-primary-dark font-semibold" : ""
        } ${className}`}
      >
        {title}
        {/* Underline with animation */}
        <motion.span
          variants={underlineVariants}
          initial="initial"
          animate={isActive ? "animate" : "initial"}
          whileHover="hover"
          className="absolute left-0 bottom-0 h-[2px] bg-primary"
        />
      </Link>
    </motion.div>
  );
};

export default MenuItems;