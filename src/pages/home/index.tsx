import { motion } from "framer-motion";
import HomeButtons from "./home-buttons";
import SocialMedia from "./social-media";
// import ProfileImage from "@/assets/profile.jpg";
import ReactLogo from "@/assets/react.svg?react";
import NextLogo from "@/assets/common/nextjs_icon_dark.svg?react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Home = () => {
  const { i18n } = useTranslation();
  const isFarsi = i18n.language === "fa";

  return (
    <div className={`flex justify-center relative ${isFarsi ? "rtl" : "ltr"}`}>
      {/* لوگوهای پس‌زمینه */}
      <motion.div
        initial={{ transform: "rotate(0deg)", opacity: 0 }}
        animate={{ transform: "rotate(180deg)", opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`absolute -bottom-20 sm:-bottom-32 -right-20 sm:-right-32 ${
          isFarsi ? "left-20 sm:left-32 right-auto" : ""
        }`}
      >
        <ReactLogo className="w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] z-10 blur" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`absolute -top-20 sm:-top-32 -left-10 sm:-left-32 w-[250px] ${
          isFarsi ? "right-10 sm:right-32 left-auto" : ""
        }`}
      >
        <NextLogo className="sm:w-[450px] h-[250px] sm:h-[450px] z-10 blur opacity-75" />
      </motion.div>

      <div
        className={`flex flex-col justify-center gap-6 h-[calc(100vh-100px)] z-20 text-primary ${
          isFarsi ? "text-right font-vazir" : "text-left font-sans"
        }`}
      >
        {/* ترتیب المان‌ها برای فارسی معکوس شود اگر لازم است */}
        {isFarsi ? (
          <>
            <LanguageSwitcher />
            <SocialMedia />
          </>
        ) : (
          <>
            <SocialMedia />
            <LanguageSwitcher />
          </>
        )}

        <Title />
        <HomeButtons />
      </div>
    </div>
  );
};

export default Home;

const Title = () => {
  const { t, i18n } = useTranslation();
  const isFarsi = i18n.language === "fa";
  const name = t("name");
  const role = t("role");

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`title text-3xl sm:text-5xl font-bold ${
        isFarsi ? "text-right rtl" : "text-left ltr"
      }`}
      style={{ direction: isFarsi ? "rtl" : "ltr" }}
    >
      {name.split("").map((el, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: i / 10 }}
        >
          {el}
        </motion.span>
      ))}
      <p
        className={`mt-2 text-base sm:text-xl md:text-4xl text-primary/70 ${
          isFarsi ? "text-right" : "text-left"
        }`}
      >
        {role}
      </p>
    </motion.p>
  );
};
