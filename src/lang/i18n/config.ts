import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEnglish from './en/translation.json';
import translationChinese from './zh-cn/translation.json';


i18next.use(initReactI18next).init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
        translation:translationEnglish,
    },
    cn: {
        translation:translationChinese,
    },
  },
});
