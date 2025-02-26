import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type ButtonType1Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  to?: string;
};

const ButtonType1 = ({
  children,
  onClick = () => {},
  className,
  to,
}: ButtonType1Props) => {
  if (to) {
    return (
      <Link to={to}>
        <motion.button
          whileHover={{ paddingRight: "30px", paddingLeft: "30px" }}
          whileTap={{
            scale: 0.8,
            // rotate: -90,
            // borderRadius: "100%",
          }}
          onClick={onClick}
          className={`border-2 border-primary p-3 w-full rounded-2xl text-primary text-sm md:text-lg ${className}`}
        >
          {children}
        </motion.button>
      </Link>
    );
  } else {
    return (
      <motion.button
        whileHover={{ paddingRight: "30px", paddingLeft: "30px" }}
        whileTap={{
          scale: 0.8,
          // rotate: -90,
          // borderRadius: "100%",
        }}
        onClick={onClick}
        className={`border-2 border-primary p-3 w-full rounded-2xl text-primary text-sm md:text-lg ${className}`}
      >
        {children}
      </motion.button>
    );
  }
};

export default ButtonType1;
