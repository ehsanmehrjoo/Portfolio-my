import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProfileImage from "@/assets/profile.png";

const About = () => {
  const { t, i18n } = useTranslation();
  const isFarsi = i18n.language === "fa";

  return (
    <div
      className={`p-3 text-2xl font-medium flex flex-col gap-6 text-primary sm:mt-8 ${
        isFarsi ? "font-vazir text-right rtl" : "font-sans text-left ltr"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.25 }}
        className={`flex flex-col lg:flex-row gap-5 items-center ${
          isFarsi ? "lg:flex-row-reverse" : ""
        }`}
      >
        <img
          src={ProfileImage}
          className="w-72 h-72 rounded-full border-8"
          alt="Profile"
        />
        <p style={
    isFarsi
      ? { whiteSpace: "pre-line", direction: "rtl", textAlign: "right" }
      : undefined
  }>{t("about.paragraph1")}</p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.75 }}
      >
        <p style={
       isFarsi
      ? { whiteSpace: "pre-line", direction: "rtl", textAlign: "right" }
      : undefined
  }>{t("about.paragraph2")}</p>
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 1.25 }}
      >
       <p style={ isFarsi ? { whiteSpace: "pre-line", direction: "rtl", textAlign: "right" }: undefined
  }>
    {t("about.paragraph3")}</p> 
      </motion.p>
    </div>
  );
};

export default About;
