import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "navBar_home": "Home",
      "navBar_about": "About",
      "navBar_portfolio": "Portfolio",
      "navBar_contact": "Contact",
      "navBar_flag": "Flag",
      "navBar_lang": "English",
      "myCard_hi": "Hi!",
      "myCard_iam": "I'm Constantin Mitrokhin",
      "myCard_dev": "Full-Stack Developer",
      "myCard_imgAlt": "Profile Picture",
      "flag_alt": "Britsh American Flag",
      "about_title": "About",
      "about_title_who": "Who am I?",
      "about_title_skills": "My skills:",
      "about_title_iam1": "I'm Constantin Mitrokhin, Full-Stack Developer",
      "about_title_iam2": "My name is Constantin Mitrokhin, and I am a Full-Stack Developer passionate about problem-solving with excellent interpersonal skills. I enjoy collaborating and working in teams to achieve shared objectives. My communication abilities are clear and effective, and I am always eager to share my ideas and insights with others. If you would like to learn more about my strengths and accomplishments, I would be happy to share some of my key projects with you.",
      "about_download_cv_txt": "Download CV",
      "portfolio_title": "Portfolio",
      "lang_es": "Spanish",
      "lang_en": "English",
      "lang_ru": "Russian",
      "contact": "Contact",
      "contact_mail": "Mail Me",
      "contact_follow": "Follow Me",
      "contact_msg": "Contact Me",
      "link_pdf": "resume_en.pdf",
    }
  },
  ru: {
    translation: {
      "navBar_home": "Дом",
      "navBar_about": "О себе",
      "navBar_portfolio": "Портфолио",
      "navBar_contact": "Контакт",
      "navBar_flag": "Флаг",
      "navBar_lang": "Русский",
      "myCard_hi": "Привет!",
      "myCard_iam": "Константин Митрохин",
      "myCard_dev": "Full-Stack разработчик",
      "myCard_imgAlt": "Фото профиля",
      "flag_alt": "Британский американский флаг",
      "about_title": "О себе",
      "about_title_who": "Кто я?",
      "about_title_skills": "Мои навыки:",
      "about_title_iam1": "Я - Константин Митрохин, Full-Stack разработчик",
      "about_title_iam2": "Меня зовут Константин Митрохин, и я Full-Stack разработчик, увлеченный решением проблем и обладающий отличными межличностными навыками. Я люблю сотрудничать и работать в команде, чтобы достигать общих целей. Мои навыки коммуникации ясны и эффективны, и я всегда готов поделиться своими идеями и знаниями с другими. Если вы хотите узнать больше о моих сильных сторонах и достижениях, я буду рад поделиться некоторыми из моих ключевых проектов с вами.",
      "about_download_cv_txt": "Скачать резюме",
      "portfolio_title": "Портфолио",
      "lang_es": "Испанский",
      "lang_en": "Английский",
      "lang_ru": "Русский",
      "contact": "Контакт",
      "contact_mail": "Написать письмо",
      "contact_follow": "Подписаться",
      "contact_msg": "Связаться со мной",
      "link_pdf": "resume_ru.pdf",
    }
  },
  es: {
    translation: {
      "navBar_home": "Inicio",
      "navBar_about": "Acerca",
      "navBar_portfolio": "Portafolio",
      "navBar_contact": "Contacte",
      "navBar_flag": "Band",
      "navBar_lang": "Español",
      "myCard_hi": "Hola!",
      "myCard_iam": "Soy Constantin Mitrokhin",
      "myCard_dev": "Desarrollador Full-Stack",
      "myCard_imgAlt": "Foto de Perfil",
      "flag_alt": "Bandera Argentino-Española",
      "about_title": "Sobre mi",
      "about_title_who": "¿Quién soy yo?",
      "about_title_skills": "Mis destrezas:",
      "about_title_iam1": "Soy Constantin Mitrokhin, Desarrollador Full-Stack",
      "about_title_iam2": "Mi nombre es Constantin Mitrokhin y soy un desarrollador Full-Stack apasionado por la resolución de problemas con excelentes habilidades interpersonales. Disfruto colaborar y trabajar en equipo para lograr objetivos compartidos. Mis habilidades de comunicación son claras y efectivas, y siempre estoy dispuesto a compartir mis ideas y conocimientos con los demás. Si desea conocer más sobre mis fortalezas y logros, estaré encantado de compartir algunos de mis proyectos clave con usted",
      "about_download_cv_txt": "Descargar CV",
      "portfolio_title": "Portafolio",
      "lang_es": "Español",
      "lang_en": "Inglés",
      "lang_ru": "Ruso",
      "contact": "Contacto",
      "contact_mail": "Contáctame",
      "contact_follow": "Sígueme",
      "contact_msg": "Contáctame",
      "link_pdf": "./resume_es.pdf",
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