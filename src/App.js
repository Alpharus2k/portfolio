import './App.css';
//import { Routes, Route } from "react-router-dom";
import i18n from 'i18next';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact';
import './Themes/color-dark.css'; // "dark-theme" by Default
import React from 'react';
//import { useState } from 'react';

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // function handleModeChange() {
  //   setIsDarkMode(!isDarkMode);
  //   const variablesFile = isDarkMode ? './Themes/color-dark.css' : './Themes/color-light.css';
  //   import(variablesFile);
  // }
  // function changeLang(lang) {
  //   i18n.changeLanguage(lang); // cambia el idioma actual a 'lang'
  //   document.documentElement.lang = lang; // actualiza la etiqueta 'lang' en el HTML
  // }
  // render() {
  //   return (
  //     <div>
  //       {/* aquí va el resto del contenido del componente */}
  //     </div>
  //   );
  //   document.documentElement.lang = i18n.language;
  // }

  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </>

  );
}

export default App;
