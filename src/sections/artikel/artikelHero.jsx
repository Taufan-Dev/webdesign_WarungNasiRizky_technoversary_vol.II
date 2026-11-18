import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import articlesData from "../../datas/articles.json";

const ArtikelHero = () => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";
  const heroArticle = articlesData[0] || {};

  return (
    <div
      className="xl:col-span-3 h-[280px] md:h-[350px] xl:h-[450px] relative flex items-end rounded-2xl overflow-hidden p-6 md:p-10 shadow-lg border border-soft/50 dark:border-secondary/40"
      style={{
        backgroundImage: `url('${heroArticle.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/70 to-dark/30"></div>

      <div className="relative z-10 w-full max-w-3xl">
        <span className="inline-block px-3 py-1 bg-primary/90 text-white dark:bg-highlight/90 dark:text-dark font-semibold text-xs md:text-sm rounded-full mb-3 uppercase tracking-wider shadow-sm">
          {heroArticle.category?.[currLang] || heroArticle.category?.ID}
        </span>

        <Link to={`/artikel/${heroArticle.id}`}>
          <h2 className="text-white font-serif font-bold text-xl md:text-2xl xl:text-3xl hover:text-highlight transition-colors duration-300 leading-snug">
            {heroArticle.title?.[currLang] || heroArticle.title?.ID}
          </h2>
        </Link>

        <p className="text-soft/90 mt-3 text-sm md:text-base hidden xl:block line-clamp-2 leading-relaxed">
          {heroArticle.desc?.[currLang] || heroArticle.excerpt?.[currLang] || heroArticle.desc?.ID}
        </p>
      </div>
    </div>
  );
};

export default ArtikelHero;
