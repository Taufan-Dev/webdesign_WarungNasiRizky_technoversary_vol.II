/* oxlint-disable react/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({
  language: "ID",
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "ID";
    }
    return "ID";
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "ID" ? "EN" : "ID";
      if (typeof window !== "undefined") {
        localStorage.setItem("language", next);
      }
      return next;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export default LanguageContext;
