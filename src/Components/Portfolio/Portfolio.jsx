import React from "react";
import styles from "./Portfolio.module.css";
import { useTranslation } from 'react-i18next';


export default function Portfolio({id}) {
  const { t, i18n } = useTranslation();


  return (
    <div className={styles.portfolioContainer} id={id}>
        <h1>{t("portfolio_title")}</h1>
        <div className={styles.videosContainer}>
          <video src="url_del_video1.mp4" controls className={styles.video} />
          <video src="url_del_video2.mp4" controls className={styles.video} />
          <video src="url_del_video3.mp4" controls className={styles.video} />
        </div>
    </div>

  );
}