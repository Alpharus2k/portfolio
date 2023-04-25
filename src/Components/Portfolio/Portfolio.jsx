import React from "react";
import styles from "./Portfolio.module.css";
import { useTranslation } from 'react-i18next';


export default function Portfolio({id}) {
  const { t, i18n } = useTranslation();


  return (
    <div className={styles.portfolioContainer} id={id}>
        <h1>{t("portfolio_title")}</h1>
        <div className={styles.videosContainer}>
          {/* <video src="https://youtu.be/vyjot-8z66E" controls className={styles.video} /> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vyjot-8z66E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen style={{width: "100%"}}></iframe>
          {/* <video src="url_del_video2.mp4" controls className={styles.video} />
          <video src="url_del_video3.mp4" controls className={styles.video} /> */}
        </div>
    </div>

  );
}