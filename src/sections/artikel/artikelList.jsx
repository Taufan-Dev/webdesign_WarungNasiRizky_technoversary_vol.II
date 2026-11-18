import ArtikelCard from "./artikelCard";
import { useLanguage } from "../../context/LanguageContext";
import articlesData from "../../datas/articles.json";

const ArtikelList = () => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  return (
    <div className="space-y-6">
      {articlesData.map((item) => {
        const localizedItem = {
          id: item.id,
          image: item.image,
          date: item.date,
          title: item.title[currLang] || item.title.ID,
          category: item.category[currLang] || item.category.ID,
          desc: item.desc ? item.desc[currLang] || item.desc.ID : (item.excerpt ? item.excerpt[currLang] || item.excerpt.ID : "")
        };
        return <ArtikelCard key={item.id} {...localizedItem} language={currLang} />;
      })}
    </div>
  );
};

export default ArtikelList;
