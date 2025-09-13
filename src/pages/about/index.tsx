import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProfileImage from "@/assets/profile.png";
import { CSSProperties } from "react"; // Import CSSProperties for type safety

// Animation variants for staggered fade-in effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const About = () => {
  const { t, i18n } = useTranslation();
  const isFarsi = i18n.language === "fa";

  // Define text styles with consistent shape
  const textStyles: CSSProperties = {
    direction: isFarsi ? "rtl" : "ltr",
    textAlign: isFarsi ? "right" : "left",
    whiteSpace: isFarsi ? "pre-line" : "normal", // Provide default value
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`p-6 sm:p-8 max-w-5xl mx-auto text-primary font-medium ${
        isFarsi ? "font-vazir rtl" : "font-sans ltr"
      }`}
    >
      {/* Profile section with image and introduction */}
      <motion.div
        variants={itemVariants}
        className={`flex flex-col lg:flex-row gap-8 items-center justify-center ${
          isFarsi ? "lg:flex-row-reverse" : ""
        }`}
      >
        <motion.img
          src={ProfileImage}
          alt={t("about.profileAlt")}
          className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-8 border-primary/20 shadow-lg object-cover"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        />
        <p
          className="text-lg sm:text-xl lg:text-2xl leading-relaxed"
          style={textStyles}
        >
          {t("about.paragraph1")}
        </p>
      </motion.div>

      {/* Additional paragraphs */}
      <motion.p
        variants={itemVariants}
        className="mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed"
        style={textStyles}
      >
        {t("about.paragraph2")}
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed"
        style={textStyles}
      >
        {t("about.paragraph3")}
      </motion.p>
    </motion.section>
  );
};

export default About;