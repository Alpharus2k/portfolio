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
          <span className={styles.spanElem}>{t("navBar_lang")}</span>
        </div>
      )}
      {isMobile && isOpen && (
        <div className={styles.overlay} onClick={toggleMenu}>
          <div className={styles.overlayContent}>
            <span className={styles.spanElemOverlay}>{t("navBar_home")}</span>
            <span className={styles.spanElemOverlay}>{t("navBar_about")}</span>
            <span className={styles.spanElemOverlay}>{t("navBar_portfolio")}</span>
            <span className={styles.spanElemOverlay}>{t("navBar_contact")}</span>
            <span className={styles.spanElemOverlay}>{t("navBar_lang")}</span>
          </div>
        </div>
      )}
    </div>
  );
}