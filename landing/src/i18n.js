import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to our website",
      "profile": "Profile",
      "home": "Home",
      // Add more translations here
    }
  },
  id: {
    translation: {
      "welcome": "Selamat datang di situs kami",
      "profile": "Profil",
      "home": "Beranda",
      // Add more translations here
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
