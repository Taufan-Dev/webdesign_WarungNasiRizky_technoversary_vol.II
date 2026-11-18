import RelawanCard from "./relawanCard";
import { useLanguage } from "../../context/LanguageContext";
import volunteersData from "../../datas/volunteers.json";

const RelawanList = () => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  return (
    <div className="space-y-6">
      {volunteersData.map((item) => {
        const localizedItem = {
          id: item.id,
          image: item.image,
          date: item.date,
          quota: item.quota,
          location: item.location?.[currLang] || item.location?.ID || "",
          title: item.title?.[currLang] || item.title?.ID,
          category: item.category?.[currLang] || item.category?.ID,
          desc: item.desc?.[currLang] || item.desc?.ID || "",
        };
        return <RelawanCard key={item.id} {...localizedItem} language={currLang} />;
      })}
    </div>
  );
};

export default RelawanList;
