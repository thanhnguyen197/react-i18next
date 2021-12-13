import React from "react";
import { useTranslation } from "react-i18next";

const Text = () => {
  const { t, i18n } = useTranslation(["order"]);
  const { t: trans } = useTranslation("common");

  const handleChangeLng = (e, lng) => {
    e.preventDefault();
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t("Đây là module order")}</h1>
      <p>{trans("welcome")}</p>
      <div>
        <button onClick={(e) => handleChangeLng(e, "en")}>English</button>
        <button onClick={(e) => handleChangeLng(e, "vi")}>VietNam</button>
      </div>
    </div>
  );
};

export default Text;
