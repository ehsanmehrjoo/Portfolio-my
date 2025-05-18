import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PiTranslateDuotone } from "react-icons/pi";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "fa", label: "فارسی" },
    { code: "de", label: "Deutsch" },
  ];

  return (
    <div className="absolute top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="text-white text-3xl hover:text-purple-400"
        >
          <PiTranslateDuotone />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md py-1 w-24">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`block w-full text-left px-4 py-1 hover:bg-gray-100 ${
                  i18n.language === lang.code
                    ? "text-purple-600 font-semibold"
                    : ""
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
