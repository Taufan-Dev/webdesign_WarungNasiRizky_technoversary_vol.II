import { Link } from "react-router-dom";
import reservesData from "../../datas/reserves.json";
import { useLanguage } from "../../context/LanguageContext";

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const CompassIcon = () => (
  <svg className="w-4 h-4 text-secondary dark:text-highlight" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const ReservesList = ({ searchQuery = "" }) => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  const filtered = reservesData.filter((item) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    const nameMatch =
      item.name.ID.toLowerCase().includes(q) ||
      item.name.EN.toLowerCase().includes(q);
    const regionMatch =
      item.region.ID.toLowerCase().includes(q) ||
      item.region.EN.toLowerCase().includes(q);
    const catMatch =
      item.category.ID.toLowerCase().includes(q) ||
      item.category.EN.toLowerCase().includes(q);
    return nameMatch || regionMatch || catMatch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filtered.map((item) => {
        const title = item.name[currLang] || item.name.ID;
        const region = item.region[currLang] || item.region.ID;
        const category = item.category[currLang] || item.category.ID;
        const desc = item.shortDesc[currLang] || item.shortDesc.ID;

        return (
          <Link
            to={`/maps/${item.id}`}
            key={item.id}
            className="group block rounded-3xl overflow-hidden bg-white dark:bg-light-dark border border-soft/60 dark:border-secondary/40 hover:border-accent dark:hover:border-highlight shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-56 overflow-hidden bg-soft/20">
              <img
                src={item.image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-transparent to-transparent" />
              
              <div className="absolute top-3.5 left-3.5">
                <span className="bg-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-highlight uppercase tracking-wider border border-white/10">
                  {category}
                </span>
              </div>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-soft/90">
                <span className="flex items-center gap-1">
                  <CompassIcon />
                  <span>{item.area}</span>
                </span>
                <span className="bg-primary/90 text-white dark:bg-highlight dark:text-dark px-2.5 py-0.5 rounded-full font-bold text-[10px]">
                  360° Ready
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between">
              <div>
                <p className="text-secondary dark:text-highlight text-xs font-semibold mb-1">
                  📍 {region}
                </p>
                <h3 className="text-xl font-serif font-bold text-primary dark:text-white group-hover:text-secondary dark:group-hover:text-highlight transition-colors duration-200 mb-2.5">
                  {title}
                </h3>
                <p className="text-primary/75 dark:text-soft/85 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6">
                  {desc}
                </p>
              </div>

              <div className="pt-2 border-t border-soft/40 dark:border-secondary/30 flex items-center justify-between">
                <span className="text-xs text-primary/60 dark:text-soft/60 font-medium">
                  {currLang === "ID" ? "Eksplorasi Panorama" : "Explore Panorama"}
                </span>
                <span className="inline-flex items-center gap-1.5 text-primary dark:text-highlight font-semibold text-xs uppercase tracking-wider">
                  {currLang === "ID" ? "Buka 360°" : "Open 360°"}
                  <ArrowRightIcon />
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ReservesList;
