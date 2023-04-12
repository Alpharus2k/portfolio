import React from "react";
import styles from "./Home.module.css";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <p>{t("home_hi")}</p>
    </div>
  );
}
