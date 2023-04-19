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


  return (
    <>
      <Header id="home"/>
      <About  id="about"/>
      <Portfolio id="portfolio" />
      <Contact id="contact" />
    </>

  );
}

export default App;
