import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import { useTranslation } from 'react-i18next';
import flag from '../../Images/flag_brit_usa.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleLangChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
      setIsOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const sections = document.querySelectorAll("div[id]");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (
        currentScrollY >= sectionTop &&
        currentScrollY < sectionTop + sectionHeight
      ) {
        setActiveSection(section.id);
      }
    });
    if (currentScrollY > 0) {
      setIsNavbarFixed(true);
    } else {
      setIsNavbarFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.navbar} ${isNavbarFixed ? styles.fixedNavbar : ""}`}>
      {isMobile && (
        <button className={styles.btnBurger} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="3x" style={{ fontWeight: "bold" }}/>
        </button>
      )}
      {!isMobile && (
        <div>
          <span className={styles.spanElem}><a className={activeSection === "home" ? styles.active : "" } href="#home">{t("navBar_home")}</a></span>
          <span className={styles.spanElem}><a className={activeSection === "about" ? styles.active : "" } href="#about">{t("navBar_about")}</a></span>
          <span className={styles.spanElem}><a className={activeSection === "portfolio" ? styles.active : "" } href="#portfolio">{t("navBar_portfolio")}</a></span>
          <span className={styles.spanElem}><a className={activeSection === "contact" ? styles.active : "" } href="#contact">{t("navBar_contact")}</a></span>
          <select className={styles.langSelect} value={i18n.language} onChange={handleLangChange}>
            <option className={styles.spanElem} style={{ backgroundColor: 'black' }} value="en">{t("lang_en")}</option>
            <option className={styles.spanElem} style={{ backgroundColor: 'black' }} value="es">{t("lang_es")}</option>
            <option className={styles.spanElem} style={{ backgroundColor: 'black' }} value="ru">{t("lang_ru")}</option>
          </select>
        </div>
      )}
      {isMobile && isOpen && (
        <div className={styles.overlay} onClick={toggleMenu}>
          <div className={styles.overlayContent}>
            <span className={styles.spanElemOverlay}><a className={activeSection === "home" ? styles.active : "" } href="#home">{t("navBar_home")}</a></span>
            <span className={styles.spanElemOverlay}><a className={activeSection === "about" ? styles.active : "" } href="#about">{t("navBar_about")}</a></span>
            <span className={styles.spanElemOverlay}><a className={activeSection === "portfolio" ? styles.active : "" } href="#portfolio">{t("navBar_portfolio")}</a></span>
            <span className={styles.spanElemOverlay}><a className={activeSection === "contact" ? styles.active : "" } href="#contact">{t("navBar_contact")}</a></span>
            <select value={i18n.language} onChange={handleLangChange} onClick={(e) => e.stopPropagation()}>
              <option className={styles.spanElem} style={{ backgroundColor: 'black' }} value="en">{t("lang_en")}</option>
              <option className={styles.spanElem} style={{ backgroundColor: 'black' }} value="es">{t("lang_es")}</option>
              <option className={styles.spanElem} style={{ backgroundColor: 'black' }} value="ru">{t("lang_ru")}</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}