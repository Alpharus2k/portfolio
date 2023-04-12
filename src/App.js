import './App.css';
//import { Routes, Route } from "react-router-dom";
import i18n from 'i18next';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


function App() {

  // function cambiarIdioma(lang) {
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
      {/* <Routes>
          <Route exact path={"/"} element={<Home />} />
      </Routes> */}
      <Home />
      <Footer />
    </>

  );
}

export default App;
