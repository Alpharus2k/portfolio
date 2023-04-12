import React from "react";
import styles from "./Header.module.css";
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <p>{t("header_hi")}</p>
    </div>
  );
}
