import { useLanguage } from "../../context/LanguageContext";
import articlesData from "../../datas/articles.json";
import { Link } from "react-router-dom";

const TrendingIcon = () => (
  <svg className="w-5 h-5 text-highlight fill-current" viewBox="0 0 24 24">
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.399 8.163-7.333-3.855-7.333 3.855 1.399-8.163-5.934-5.784 8.2-1.192z" />
  </svg>
);

const ArtikelSidebar = () => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";
  
  // Mengambil 3 artikel (index 1, 2, 3) sebagai artikel terpopuler
  const sidebarArticles = articlesData.slice(1, 4);

  return (
    <div className="sticky top-28 pt-2 space-y-6">
      <h2 className="text-xl flex items-center gap-2.5 font-serif font-bold text-primary dark:text-white mb-4">
        <TrendingIcon />
        {currLang === "ID" ? "Sering Dibaca" : "Most Read"}
      </h2>
      <div className="space-y-4">
        {sidebarArticles.map((item) => (
          <Link 
            to={`/artikel/${item.id}`} 
            key={item.id} 
            className="p-4 rounded-2xl border border-soft/40 dark:border-secondary/30 bg-soft/10 dark:bg-light-dark/50 hover:bg-soft/25 dark:hover:bg-light-dark transition-all duration-300 block group"
          >
            <p className="text-secondary dark:text-highlight text-xs font-semibold uppercase tracking-wider mb-1">
              {item.category[currLang] || item.category.ID}
            </p>

            <h4 className="text-primary dark:text-soft font-serif font-semibold text-sm leading-snug group-hover:text-secondary dark:group-hover:text-highlight transition-colors duration-200">
              {item.title[currLang] || item.title.ID}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArtikelSidebar;
