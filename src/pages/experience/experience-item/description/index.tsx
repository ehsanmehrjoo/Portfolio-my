import { motion } from "framer-motion";
import TimeLine from "./timeline";
import { useTranslation } from "react-i18next";

const Description = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  return (
    <div
      className={`mt-8 ml-4 flex flex-col md:flex-row gap-3 md:gap-10 ${
        isRtl ? "text-right font-vazir" : "text-left font-sans"
      }`}
      dir={isRtl ? "rtl" : "ltr"}
      style={{ lineHeight: isRtl ? "1.8" : "1.4", letterSpacing: isRtl ? "0.03em" : "normal" }}
    >
      <TimeLine />
      <div className={isRtl ? "pr-4" : "pl-4"}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.25 }}
          className="text-5xl font-bold leading-tight"
          style={{ fontFamily: isRtl ? "'Vazir', sans-serif" : undefined }}
        >
          {t("companyName")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.5 }}
          className="text-4xl font-bold"
          style={{ fontFamily: isRtl ? "'Vazir', sans-serif" : undefined }}
        >
          {t("position")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.75 }}
          className="w-full mt-2 text-xl"
          style={{ fontFamily: isRtl ? "'Vazir', sans-serif" : undefined }}
        >
          {t("description")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: 1 }}
          className="flex gap-2 items-center mt-1"
          style={{ justifyContent: isRtl ? "flex-end" : "flex-start" }}
        >
          <span className="w-[3px] h-[3px] rounded-full bg-primary"></span>
          <p
            className="text-sm"
            style={{ fontFamily: isRtl ? "'Vazir', sans-serif" : undefined }}
          >
            {t("skills")}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
