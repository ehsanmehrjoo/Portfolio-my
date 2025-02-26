import { motion } from "framer-motion";
import HomeButtons from "./home-buttons";
import SocialMedia from "./social-media";
// import ProfileImage from "@/assets/profile.jpg";
import ReactLogo from "@/assets/react.svg?react";
import NextLogo from "@/assets/common/nextjs_icon_dark.svg?react";

const Home = () => {
  return (
    <div className="flex justify-center relative">
      <motion.div
        initial={{ transform: "rotate(0deg)", opacity: 0 }}
        animate={{ transform: "rotate(180deg)", opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="absolute -bottom-20 sm:-bottom-32 -right-20 sm:-right-32"
      >
        <ReactLogo className="w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] z-10 blur" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="absolute -top-20 sm:-top-32 -left-10 sm:-left-32 w-[250px]"
      >
        <NextLogo className="sm:w-[450px] h-[250px] sm:h-[450px] z-10 blur opacity-75" />
      </motion.div>
      <div className="flex flex-col justify-center gap-6 h-[calc(100vh-100px)] z-20">
        <SocialMedia />
        <Title />
        <HomeButtons />
      </div>
    </div>
  );
};

export default Home;

const Title = () => (
  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="title">
    {"Ehsan Mehrjo".split("").map((el, i) => (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: i / 10,
        }}
        key={i}
      >
        {el}
      </motion.span>
    ))}
    <p className="text-base sm:text-xl md:text-4xl md:ml-1 text-primary/70">
      Front End Developer
    </p>
  </motion.p>
);
