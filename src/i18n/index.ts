import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from '../locales/en/translation.json'
import fa from '../locales/fa/translation.json'
import de from '../locales/de/translation.json'  // 🔹 اضافه‌شده

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
      de: { translation: de },  
    },
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n