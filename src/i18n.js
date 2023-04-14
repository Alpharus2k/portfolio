import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "myCard_hi": "Hi!",
      "myCard_iam": "I'm Constantin Mitrokhin",
      "myCard_dev": "Full-Stack Developer",
      "myCard_imgAlt": "Profile Picture",
      "flag": '../Images/flag_brit_usa.jpg',
      "flag_alt": "Britsh American Flag",

      "Welcome to React": "Welcome to React and react-i18next",
      "footer_hi": "Hello from Footer",
      "header_hi": "Hello from Header",
      "home_hi": "Hello from Home",
      "navBar_home": "Home",
      "navBar_about": "About",
      "navBar_portfolio": "Portfolio",
      "navBar_contact": "Contact",
      "navBar_flag": "Flag",
      "navBar_lang": "English",
    }
  },
  es: {
    translation: {
      "myCard_hi": "Hola!",
      "myCard_iam": "Soy Constantin Mitrokhin",
      "myCard_dev": "Desarrollador Full-Stack",
      "myCard_imgAlt": "Foto de Perfil",

      "Welcome to React": "Bienvenido a React y react-i18next",
      "footer_hi": "Hola Desde Footer",
      "header_hi": "Hola Desde Header",
      "home_hi": "Hola Desde Home",
      "navBar_home": "Inicio",
      "navBar_about": "Acerca",
      "navBar_portfolio": "Portafolio",
      "navBar_contact": "Contacte",
      "navBar_flag": "Band",
      "navBar_lang": "Español",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;