import React from "react";
import styles from "./Contact.module.css";
import { useTranslation } from 'react-i18next';
import imgGitHub from "../../Images/linkGitHub.png";
import imgEmail from "../../Images/linkEmail.png";
import imgLkdin from "../../Images/linkLinked.png";

export default function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.contactContainer}>
      <h2>{t("contact")}</h2>
      <div className={styles.linksContainer}>

        <div className={styles.contItem}>
          <img className={styles.contItemImg} src={imgEmail} alt="Email Logo" />
          <span className={styles.contItemText}>{t("contact_mail")}</span>
        </div>
        <div className={styles.contItem}>
          <img className={styles.contItemImg} src={imgGitHub} alt="GitHub Logo" />
          <span className={styles.contItemText}>{t("contact_follow")}</span>
        </div>
        <div className={styles.contItem}>
          <img className={styles.contItemImg} src={imgLkdin} alt="LinkedIn logo" />
          <span className={styles.contItemText}>{t("contact_msg")}</span>
        </div>

      </div>

    </div>
  );
}