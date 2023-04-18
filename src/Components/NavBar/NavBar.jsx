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

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  }

  return (
    <div className={styles.navbar}>
      {isMobile && (
        <button className={styles.btnBurger} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="4x" style={{ fontWeight: "bold" }}/>
        </button>
      )}
      {!isMobile && (
        <div>
          <span className={styles.spanElem}>{t("navBar_home")}</span>
          <span className={styles.spanElem}>{t("navBar_about")}</span>
          <span className={styles.spanElem}>{t("navBar_portfolio")}</span>
          <span className={styles.spanElem}>{t("navBar_contact")}</span>
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
            <span className={styles.spanElemOverlay}>{t("navBar_home")}</span>
            <span className={styles.spanElemOverlay}>{t("navBar_about")}</span>
            <span className={styles.spanElemOverlay}>{t("navBar_portfolio")}</span>
            <span className={styles.spanElemOverlay}>{t("navBar_contact")}</span>
            <select value={i18n.language} onChange={handleLangChange}>
              <option className={styles.spanElem} value="en">{t("lang_en")}</option>
              <option className={styles.spanElem} value="es">{t("lang_es")}</option>
              <option className={styles.spanElem} value="ru">{t("lang_ru")}</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}