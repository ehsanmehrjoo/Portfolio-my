import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en/translation.json'
import fa from '../locales/fa/translation.json'
import de from '../locales/de/translation.json'

const detectLanguageFromCountry = async () => {
  try {
    const res = await fetch('https://ipapi.co/json/')
    const data = await res.json()
    const country = data.country_code

    if (country === 'IR') return 'fa'
    if (country === 'DE') return 'de'
    return 'en'
  } catch (err) {
    return 'en'
  }
}

export const setupI18n = async () => {
  const detectedLang = await detectLanguageFromCountry()

  await i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        fa: { translation: fa },
        de: { translation: de },
      },
      lng: detectedLang,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    })
}

export default i18n
