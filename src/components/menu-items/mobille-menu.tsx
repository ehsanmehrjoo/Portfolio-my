import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { menuItems } from "./menuItems";

// Interface for MenuItem props
interface MenuItemProps {
  title: string;
  to: string;
  className?: string;
  onClose: () => void;
  custom?: number; // Add custom prop for Framer Motion
}

// Animation variants for mobile menu and close button
const menuVariants = {
  initial: { x: "100%" },
  animate: { x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const closeButtonVariants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const MenuItemVariants = {
  initial: { opacity: 0, x: -50 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: custom * 0.1, // Stagger delay based on index
    },
  }),
};

const underlineVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "100%", opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open menu and lock body scroll
  const openHandler = () => {
    setIsOpen(true);
    setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 250);
    window.scrollTo(0, 0);
  };

  // Close menu and restore body scroll
  const closeHandler = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="flex sm:hidden justify-end">
      {/* Menu toggle icon */}
      <div onClick={openHandler} className="p-2">
        <MenuIcon />
      </div>

      {isOpen && (
        <>
          {/* Mobile menu overlay */}
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            className="fixed inset-0 bg-slate-950 bg-opacity-90 backdrop-blur-lg flex flex-col gap-4 items-center justify-center z-50 overflow-auto"
          >
            {menuItems.map((item, index) => (
              <MenuItem
                key={item.id}
                {...item}
                onClose={closeHandler}
                // Stagger animation for menu items
                custom={index}
                
              />
            ))}
          </motion.div>

          {/* Close button */}
          <motion.div
            variants={closeButtonVariants}
            initial="initial"
            animate="animate"
            className="fixed top-4 right-4 z-50"
          >
            <Button
              className="rounded-full bg-gray-300 text-black hover:bg-gray-400 transition-colors w-10 h-10"
              size="icon"
              onClick={closeHandler}
            >
              <Cross2Icon width={24} height={24} />
            </Button>
          </motion.div>
        </>
      )}
    </div>
  );
};

// Menu item component
const MenuItem = ({ title, to, className, onClose, custom }: MenuItemProps) => {
  const { pathname } = useLocation();
  const isActive = to === pathname;

  return (
    <motion.div
      variants={MenuItemVariants}
      initial="initial"
      animate="animate"
      custom={custom} // Pass custom prop to Framer Motion
      className="relative w-full text-center"
    >
      <Link
        to={to}
        onClick={onClose}
        className={`block py-4 text-4xl font-semibold text-white hover:text-primary transition-colors ${
          isActive ? "text-primary" : ""
        } ${className}`}
      >
        {title}
        {/* Underline effect */}
        <motion.span
          variants={underlineVariants}
          initial="initial"
          animate={isActive ? "animate" : "initial"}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] bg-primary w-0"
        />
      </Link>
    </motion.div>
  );
};

// Menu icon component
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 256 256"
    className="text-gray-200 hover:text-primary transition-colors"
  >
    <path
      fill="currentColor"
      d="M5 8a2 2 0 1 0 0 4h40a2 2 0 1 0 0-4zm0 15a2 2 0 1 0 0 4h40a2 2 0 1 0 0-4zm0 15a2 2 0 1 0 0 4h40a2 2 0 1 0 0-4z"
      transform="scale(5.12)"
    />
  </svg>
);

export default MobileMenu;