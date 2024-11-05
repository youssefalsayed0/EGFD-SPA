// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationAR from "./locales/ar/translation.json";

// Check for saved language in localStorage, or default to Arabic
const savedLanguage = localStorage.getItem("language") || "ar";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ar: {
      translation: translationAR,
    },
  },
  lng: savedLanguage, // Use saved language from localStorage, or default to Arabic
  fallbackLng: "ar", // Fallback to Arabic
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
