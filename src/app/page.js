"use client";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome:
        "Sample text in English is also used in software development for testing user interfaces. For example, when developing text-editing software or word processors, placeholder text helps in ensuring that the software correctly handles formatting, text wrapping, and more.",
    },
  },
  tr: {
    translation: {
      welcome:
        "İngilizce örnek metin, kullanıcı arayüzlerini test etmek için yazılım geliştirmede de kullanılır. Örneğin, metin düzenleme yazılımı veya kelime işlemciler geliştirirken, yer tutucu metin, yazılımın biçimlendirme, metin kaydırma ve daha fazlasını doğru şekilde işlemesini sağlamaya yardımcı olur.",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
  });

export default function Home() {
  const [selectedLanguages, setSelectedlanguages] = useState("en");

  const languages = [
    { label: "English", value: "en" },
    { label: "Turkish", value: "tr" },
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
