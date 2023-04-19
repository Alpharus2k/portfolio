import React from "react";
import styles from "./Header.module.css";
import { useTranslation } from 'react-i18next';
import NavBar from '../NavBar/NavBar';
import profilePic from '../../Images/profile.png';


export default function Header({id}) {
  const { t, i18n } = useTranslation();
  let imgAltText = t("myCard_imgAlt");
  
  return (
    <>

    <div className={styles.header}  id={id}>
      <NavBar />
      <div className={styles.myCard}>
        <div className={styles.myImgContainer}>
          <img src={profilePic} alt={imgAltText} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.hi}>{t("myCard_hi")}</div>
          <div className={styles.name}>{t("myCard_iam")}</div>
          <div className={styles.desc}>{t("myCard_dev")}</div>
        </div>

      </div>
    </div>
    </>

  );
}
