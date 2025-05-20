import Images from "./images";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";

const ScreenShots = () => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.language === "fa";

  return (
    <div className={`sm:px-7 ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
      <p className="text-xl">
        {t("liveProject")}{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://thewildoasis-1.netlify.app/"
          className="underline text-blue-600 hover:text-blue-800"
        >

          {t("projectLinkAdmin")}

        </a>

         ,,

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://the-wild-oasis-client-three.vercel.app/"
          className="underline text-blue-600 hover:text-blue-800"
        >

          {t("projectLinkUser")}

        </a>
      </p>
      <div
        className={`flex items-center gap-1 text-slate-400 mt-0 ${
          isRtl ? "justify-end" : "justify-start"
        }`}
        style={{ direction: isRtl ? "rtl" : "ltr" }}
      >
        <InfoCircledIcon />
        <p className="text-sm">{t("infoText")}</p>
      </div>
      <Images />
    </div>
  );
};

export default ScreenShots;
