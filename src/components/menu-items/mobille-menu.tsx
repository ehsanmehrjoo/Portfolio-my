import { motion } from "framer-motion";
import { useState } from "react";
import { MENU_ITEMS } from "./contants";
import { Link, useLocation } from "react-router-dom";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const MobilleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(true);
    setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 250);
    window.scrollTo(0, 0);
  };
  const closeHandler = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="flex sm:hidden justify-end">
      <div onClick={openHandler}>
        <MenuIcon />
      </div>
      {isOpen && (
        <>
          <motion.div
            className="w-scree h-[100dvh] absolute top-0 left-0 bg-slate-950 bg-opacity-90 backdrop-blur-lg flex flex-col gap-1 items-center overflow-auto z-10"
            initial={{ right: "100vh" }}
            animate={{ right: "0" }}
          >
            {MENU_ITEMS.map((item) => (
              <MenuItem onClose={closeHandler} key={item.id} {...item} />
            ))}
          </motion.div>
          <motion.div
            className="absolute top-3 z-20"
            initial={{ right: "-100px" }}
            animate={{ right: "12px" }}
          >
            <Button
              className="rounded-full text-black bg-gray-300 w-8 h-8"
              size="icon"
              onClick={closeHandler}
            >
              <Cross2Icon width={20} height={20} />
            </Button>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default MobilleMenu;

const MenuItem = ({
  title,
  to,
  className,
  onClose,
}: {
  title: string;
  to: string;
  className?: string;
  onClose: () => void;
}) => {
  const { pathname } = useLocation();
  return (
    <motion.span
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      transition={{ duration: 1 }}
      className="relative w-full h-full text-7xl flex justify-center items-center z-[10000]"
    >
      <Link
        onClick={onClose}
        className={`${className} relative w-full text-center`}
        to={to}
      >
        {title}
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "anticipate" }}
          className={`absolute left-0 bottom-0 bg-primary h-[2px] group-hover:w-full transition-[width] ease-in-out duration-300 ${
            to === pathname ? "w-full" : "w-0"
          }`}
        ></motion.span>
      </Link>
    </motion.span>
  );
};

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    viewBox="0 0 256 256"
  >
    <path
      fill="#e2e8f0"
      strokeMiterlimit={10}
      d="M5 8a2 2 0 1 0 0 4h40a2 2 0 1 0 0-4zm0 15a2 2 0 1 0 0 4h40a2 2 0 1 0 0-4zm0 15a2 2 0 1 0 0 4h40a2 2 0 1 0 0-4z"
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
      transform="scale(5.12)"
    />
  </svg>
);
