import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { PiTranslateDuotone } from "react-icons/pi";
import { IoLanguageOutline } from "react-icons/io5";

const languages = [
  { code: "en", label: "English" },
  { code: "fa", label: "فارسی" },
  { code: "de", label: "Deutsch" },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    if (i18n.language === lng) {
      setOpen(false);
      return;
    }
    i18n.changeLanguage(lng).then(() => {
      window.location.reload();
    });
    setOpen(false);
  };

  return (
    <div className="absolute top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="text-white text-3xl hover:text-purple-400 transition-colors duration-300"
          aria-label="Toggle language switcher"
        >
          <PiTranslateDuotone className="transform hover:scale-110 transition-transform duration-200" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 bg-gradient-to-b from-white to-purple-50 text-black rounded-xl shadow-xl py-2 w-32 animate-in fade-in slide-in-from-top-2 duration-200 animate-out fade-out slide-out-to-top-2 duration-150">
            {languages.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => changeLanguage(code)}
                className={`flex items-center w-full text-left px-4 py-2 text-sm hover:bg-purple-100 hover:text-purple-700 transition-colors duration-150 ${
                  i18n.language === code ? "text-purple-700 font-semibold bg-purple-200" : ""
                }`}
                aria-current={i18n.language === code ? "true" : undefined}
              >
                <IoLanguageOutline className="mr-2 text-purple-500" />
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;