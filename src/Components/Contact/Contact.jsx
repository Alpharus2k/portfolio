import React from "react";
import styles from "./Contact.module.css";
import { useTranslation } from 'react-i18next';
import imgGitHub from "../../Images/linkGitHub.png";
import imgEmail from "../../Images/linkEmail.png";
import imgLkdin from "../../Images/linkLinked.png";

export default function Contact({id}) {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.contactContainer} id={id}>
      <h2>{t("contact")}</h2>
      <div className={styles.linksContainer}>
        <a className={styles.contItem} href="mailto:constantin.mitrokhin@gmail.com">
          <img className={styles.contItemImg} src={imgEmail} alt="Email Logo" />
          <span className={styles.contItemText}>{t("contact_mail")}</span>
          {/* constantin.mitrokhin@gmail.com */}
        </a>
        <a className={styles.contItem} href="https://github.com/Alpharus2k/" target="_blank" rel="noopener noreferrer">
          <img className={styles.contItemImg} src={imgGitHub} alt="GitHub Logo" />
          <span className={styles.contItemText}>{t("contact_follow")}</span>
          {/* https://github.com/Alpharus2k/ */}
        </a>
        <a className={styles.contItem} href="https://www.linkedin.com/in/constantin-mitrokhin/" target="_blank" rel="noopener noreferrer">
          <img className={styles.contItemImg} src={imgLkdin} alt="LinkedIn logo" />
          <span className={styles.contItemText}>{t("contact_msg")}</span>
          {/* https://www.linkedin.com/in/constantin-mitrokhin/ */}
        </a>

      </div>

    </div>
  );
}