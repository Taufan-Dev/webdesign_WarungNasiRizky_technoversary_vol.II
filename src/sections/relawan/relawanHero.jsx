import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import volunteersData from "../../datas/volunteers.json";

const MapPinIcon = () => (
  <svg className="w-4 h-4 text-highlight" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4 text-highlight" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const RelawanHero = () => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";
  const heroItem = volunteersData[0] || {};

  return (
    <div
      className="xl:col-span-3 h-[300px] md:h-[380px] xl:h-[450px] relative flex items-end rounded-2xl overflow-hidden p-6 md:p-10 shadow-lg border border-soft/50 dark:border-secondary/40"
      style={{
        backgroundImage: `url('${heroItem.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/75 to-dark/30"></div>

      <div className="relative z-10 w-full max-w-3xl">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-block px-3 py-1 bg-primary/90 text-white dark:bg-highlight/90 dark:text-dark font-semibold text-xs md:text-sm rounded-full uppercase tracking-wider shadow-sm">
            {heroItem.category?.[currLang] || heroItem.category?.ID}
          </span>
          <span className="inline-block px-3 py-1 bg-highlight/90 text-dark font-bold text-xs rounded-full uppercase tracking-wider shadow-sm">
            {currLang === "ID" ? "Aksi Unggulan" : "Featured Action"}
          </span>
        </div>

        <Link to={`/aksi/${heroItem.id}`}>
          <h2 className="text-white font-serif font-bold text-xl md:text-2xl xl:text-3xl hover:text-highlight transition-colors duration-300 leading-snug">
            {heroItem.title?.[currLang] || heroItem.title?.ID}
          </h2>
        </Link>

        <p className="text-soft/90 mt-3 text-sm md:text-base hidden xl:block line-clamp-2 leading-relaxed">
          {heroItem.desc?.[currLang] || heroItem.desc?.ID}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs md:text-sm text-soft/80">
          <div className="flex items-center gap-1.5">
            <MapPinIcon />
            <span>{heroItem.location?.[currLang] || heroItem.location?.ID}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CalendarIcon />
            <span>{heroItem.date} ({heroItem.time})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelawanHero;
