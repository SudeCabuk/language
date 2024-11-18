"use client";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import tr from "./locales/tr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  lng: "en",
  fallbackLng: "en",
});

export default function Home() {
  const [selectedLanguages, setSelectedlanguages] = useState("en");

  const languages = [
    { label: "English", value: "en" },
    { label: "Türkçe", value: "tr" },
  ];

  const handleLanguageChange = (lang) => {
    setSelectedlanguages(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <div className="card flex justify-content-center">
        <Dropdown
          value={selectedLanguages}
          onChange={(e) => handleLanguageChange(e.target.value)}
          options={languages}
          optionLabel="label"
          placeholder="Select a Language"
          className="w-full md:w-14rem"
        />
        <h2>{i18n.t("welcome")}</h2>
      </div>
    </div>
  );
}
