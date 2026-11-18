import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import animalsData from "../../../datas/animals.json";

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const AnimalCard = ({ animal, language = "ID" }) => {
  const currLang = language === "EN" ? "EN" : "ID";
  const localized = animal[currLang] || animal.ID;

  return (
    <Link 
      to={`/satwa/${animal.id}`}
      className="rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group border border-soft/60 dark:border-secondary/40 hover:border-accent dark:hover:border-highlight shadow-md hover:shadow-2xl bg-white dark:bg-light-dark cursor-pointer"
    >
      <div className="relative h-64 md:h-72 overflow-hidden bg-soft/20 dark:bg-dark">
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent z-15 pointer-events-none" />

        <div className="absolute top-4 right-4 z-20 flex flex-wrap gap-2 justify-end max-w-[80%]">
          {localized?.fields?.slice(0, 2).map((field, idx) => (
            <span
              key={idx}
              className="w-fit bg-primary/90 dark:bg-dark/90 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white dark:text-highlight rounded-full uppercase tracking-wider border border-white/10 dark:border-highlight/20 shadow-sm"
            >
              {field}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
        <span className="text-secondary dark:text-highlight text-xs font-bold tracking-widest uppercase mb-2 block">
          {animal.era}
        </span>
        <h3 className="text-xl lg:text-2xl font-serif font-bold text-primary dark:text-white mb-3 group-hover:text-secondary dark:group-hover:text-highlight transition-colors duration-300">
          {animal.name}
        </h3>
        <p className="text-primary/75 dark:text-soft/85 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
          {localized?.shortDescription}
        </p>

        <span
          className="inline-flex items-center gap-2 text-primary dark:text-highlight font-semibold text-xs uppercase tracking-wider group-hover:gap-3 transition-all duration-300 w-fit mt-auto"
        >
          {currLang === "ID" ? "Pelajari Satwa" : "Discover Wildlife"}
          <ArrowRightIcon />
        </span>
      </div>
    </Link>
  );
};

const CardList = ({ searchQuery = "" }) => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";
  const [showAll, setShowAll] = useState(false);

  // Filter data based on search query
  const filteredAnimals = animalsData.filter((animal) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    
    const nameMatch = animal.name.toLowerCase().includes(query);
    const scientificMatch = animal.scientificName?.toLowerCase().includes(query) || false;
    const descMatchEn = animal.EN?.shortDescription?.toLowerCase().includes(query) || false;
    const descMatchId = animal.ID?.shortDescription?.toLowerCase().includes(query) || false;
    const fieldMatchEn = animal.EN?.fields?.some((field) => field.toLowerCase().includes(query)) || false;
    const fieldMatchId = animal.ID?.fields?.some((field) => field.toLowerCase().includes(query)) || false;
    const eraMatch = animal.era?.toLowerCase().includes(query) || false;
    
    return nameMatch || scientificMatch || descMatchEn || descMatchId || fieldMatchEn || fieldMatchId || eraMatch;
  });

  // Tampilkan max 6 kalau tidak showAll
  const displayedAnimals = showAll
    ? filteredAnimals
    : filteredAnimals.slice(0, 6);

  const buttonText =
    currLang === "ID"
      ? showAll
        ? "Tampilkan Lebih Sedikit"
        : "Lihat Semua Satwa Endemik"
      : showAll
        ? "Show Less"
        : "View All Endemic Animals";

  return (
    <section className="w-full pb-24 px-5 md:px-10 xl:px-20 flex justify-center bg-white dark:bg-dark transition-colors duration-500">
      <div className="max-w-7xl w-full flex flex-col items-center">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
          {displayedAnimals.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              language={currLang}
            />
          ))}
        </div>

        {/* Empty state when query matches nothing */}
        {displayedAnimals.length === 0 && (
          <div className="py-16 text-center text-primary/70 dark:text-soft/70">
            <p className="text-lg font-serif font-bold mb-2">
              {currLang === "ID" ? "Satwa tidak ditemukan" : "No animals found"}
            </p>
            <p className="text-sm">
              {currLang === "ID"
                ? `Tidak ada satwa yang cocok dengan kata kunci "${searchQuery}"`
                : `No endemic wildlife matches "${searchQuery}"`}
            </p>
          </div>
        )}

        {/* Show More Button */}
        {filteredAnimals.length > 6 && (
          <div className="mt-16 md:mt-20">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3.5 rounded-full border border-soft dark:border-secondary text-primary dark:text-soft font-semibold hover:bg-primary hover:text-white dark:hover:bg-highlight dark:hover:text-dark transition-colors duration-300 flex items-center justify-center min-w-[220px] cursor-pointer shadow-sm"
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardList;
