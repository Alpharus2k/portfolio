import React from "react";
import styles from "./Footer.module.css";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <p>{t("footer_hi")}</p>
    </div>
  );
}