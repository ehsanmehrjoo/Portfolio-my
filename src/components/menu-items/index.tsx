import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import MobilleMenu from "./mobille-menu";
import { MENU_ITEMS } from "./contants";

const MenuItems = () => {
  return (
    <div className="text-primary">
      <div className="text-2xl sm:flex gap-5 ml-3 w-full hidden ">
        {MENU_ITEMS.map((item) => (
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
