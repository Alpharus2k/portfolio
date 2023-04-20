import React from "react";
import styles from "./About.module.css";
import { useTranslation } from 'react-i18next';
import imgHTML from "../../Images/skill_html5.png";
import imgCSS from "../../Images/skill_css.png";
import imgNodeJs from "../../Images/skill_nodejs.png";
import imgJS from "../../Images/skill_js.png";
import imgSqlize from "../../Images/skill_sequelize.png";
import imgReact from "../../Images/skill_react.png";
import imgRedux from "../../Images/skill_redux.png";
import imgExpress from "../../Images/skill_express.png";
import imgGit from "../../Images/skill_git.png";
import imgOop from "../../Images/skill_opp.png";
import resumeES from "./Constantin Mitrokhin - FullStack Developer_es.pdf";
import resumeEN from "./Constantin Mitrokhin - FullStack Developer_en.pdf";
import resumeRU from "./Constantin Mitrokhin - FullStack Developer_en.pdf"; //! UNDER CONSTRUCTION!! 
 
export default function About({id}) {
  const { t, i18n } = useTranslation();

  const handleDownload = () => {
    let pdfUrl;
    switch (t("navBar_lang")) {
      case "Русский":
        pdfUrl = resumeRU;
        break;
      case "Español":
        pdfUrl = resumeES;
        break;
      default:
        pdfUrl = resumeEN;
        break;
    }
    window.open(pdfUrl, "_blank");
  };
//t("link_pdf")
  return (
    <div className={styles.aboutContainer} id={id}>
      <h1>{t("about_title")}</h1>
      <div className={styles.contentContainer}>
        <div className={styles.halfContainer}>
          <h2 className={styles.paddingBottom}>{t("about_title_who")}</h2>
          <h2 className={styles.paddingBottom}>{t("about_title_iam1")}</h2>
          <p className={styles.paddingBottom}>{t("about_title_iam2")}</p>
          <button className={styles.btnCV} onClick={handleDownload}>{t("about_download_cv_txt")}</button>
        </div>
        <div className={styles.halfContainer}>
          <h2 className={styles.paddingBottom}>{t("about_title_skills")}</h2>
          <div className={styles.skillsContainer}>
            {/* Skills */}
            <div className={styles.gridItem}>
              <img className={styles.gridItemImg} src={imgHTML} alt="HTML5 Logo" />
              <span className={styles.gridItemText}>HTML</span>
            </div>
            <div className={styles.gridItem}>
              <img className={styles.gridItemImg} src={imgCSS} alt="CSS3 Logo" />
              <span className={styles.gridItemText}>CSS</span>
            </div>
            <div className={styles.gridItem}>
              <img className={styles.gridItemImg} src={imgNodeJs} alt="Node.Js Logo" />
              <span className={styles.gridItemText}>Node.Js</span>
            </div>
            <div className={styles.gridItem}>
              <img className={styles.gridItemImg} src={imgJS} alt="JavaScript Logo" />
              <span className={styles.gridItemText}>JavaScript</span>
            </div>
            <div className={styles.gridItem}>
              <img className={styles.gridItemImg} src={imgReact} alt="React Logo" />
              <span className={styles.gridItemText}>React</span>
            </div>
            <div className={styles.gridItem}>
              <img className={styles.gridItemImg} src={imgRedux} alt="Redux Logo" />
              <span className={styles.gridItemText}>Redux</span>
            </div>
            <div className={styles.gridItem}>
              <img className={styles.gridItemImg} src={imgSqlize} alt="Sequelize Logo" />
              <span className={styles.gridItemText}>Sequelize</span>
            </div>
            <div className={styles.gridItem}>
              <img className={styles.gridItemImg} src={imgExpress} alt="Express Logo" />
              <span className={styles.gridItemText}>Express</span>
            </div>
            <div className={styles.gridItem}>
              <img className={styles.gridItemImg} src={imgGit} alt="Git Logo" />
              <span className={styles.gridItemText}>Git</span>
            </div>
            <div className={styles.gridItem}>
              <img className={styles.gridItemImg} src={imgOop} alt="Object-oriented programming logo" />
              <span className={styles.gridItemText}>OOP</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
