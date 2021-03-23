import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/translations/en.json";
import zh from "@/translations/zh.json";

export const i18nSetup = i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    zh: {
      translation: zh,
    },
    "zh-CN": {
      translation: zh,
    },
  },
  lng: navigator.language,
  fallbackLng: "en",
  keySeparator: ":",
  interpolation: {
    escapeValue: false,
  },
});
