import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import { DateTime } from 'luxon';
i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en', // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome
    nonExplicitSupportedLngs: true,
    supportedLngs: ['pl', 'en'],
    interpolation: {
      escapeValue: false, // react already safes from xss
      format: (value, format, lng) => {
        if (format === 'date') {
          return DateTime.fromJSDate(value)
            .setLocale(lng)
            .toLocaleString(DateTime.DATE_FULL);
        }
        return value;
      },
    },

    debug: process.env.NODE_ENV === 'development',
  });

export default i18next;
