import RecommendationCard from "./cardRekomendasi";
import { useLanguage } from "../../../context/LanguageContext";
import articlesData from "../../../datas/articles.json";
import { Link } from "react-router-dom";

const ArticleSidebar = () => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  // Ambil beberapa artikel untuk rekomendasi (skip artikel index 0)
  const recommendations = articlesData.slice(1, 4);

  return (
    <aside className="sticky top-28 space-y-6">
      {/* Thumbnail Aksen Rimba */}
      <div className="relative h-[230px] rounded-3xl overflow-hidden shadow-lg border border-soft/50 dark:border-secondary/40">
        <img
          src={
            articlesData[0]?.image ||
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800"
          }
          alt="Rimba Sidebar Thumbnail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent p-5 flex flex-col justify-end">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-highlight">
            {currLang === "ID" ? "Eksplorasi Rimba" : "Rimba Explore"}
          </span>
          <p className="text-white text-xs font-serif font-bold mt-1">
            {currLang === "ID" ? "Konservasi Hayati Indonesia" : "Indonesian Biodiversity"}
          </p>
        </div>
      </div>

      <h3 className="font-serif font-bold text-lg text-primary dark:text-white mt-8 mb-4">
        {currLang === "ID" ? "Artikel Terkait" : "Related Articles"}
      </h3>

      {/* Rekomendasi */}
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <Link
            to={`/artikel/${rec.id}`}
            key={rec.id}
            className="block p-4 rounded-2xl border border-soft/40 dark:border-secondary/30 bg-soft/10 dark:bg-light-dark/50 hover:bg-soft/25 dark:hover:bg-light-dark transition-all duration-300 group"
          >
            <RecommendationCard
              category={rec.category?.[currLang] || rec.category?.ID}
              title={rec.title?.[currLang] || rec.title?.ID}
            />
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default ArticleSidebar;
