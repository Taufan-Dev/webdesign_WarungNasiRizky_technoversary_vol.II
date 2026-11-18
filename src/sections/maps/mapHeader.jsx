import { useLanguage } from "../../context/LanguageContext";

const MapIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" x2="9" y1="3" y2="18" />
    <line x1="15" x2="15" y1="6" y2="21" />
  </svg>
);

const ListIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" x2="21" y1="6" y2="6" />
    <line x1="8" x2="21" y1="12" y2="12" />
    <line x1="8" x2="21" y1="18" y2="18" />
    <line x1="3" x2="3.01" y1="6" y2="6" />
    <line x1="3" x2="3.01" y1="12" y2="12" />
    <line x1="3" x2="3.01" y1="18" y2="18" />
  </svg>
);

const MapHeader = ({ activeTab, setActiveTab, searchQuery, setSearchQuery }) => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  return (
    <div className="flex flex-col items-center text-center mb-10">
      {/* BADGE PILAR RIMBA */}
      <span className="inline-block px-3.5 py-1 rounded-full bg-soft/30 dark:bg-light-dark border border-soft/60 dark:border-secondary/40 text-xs font-semibold uppercase tracking-widest text-secondary dark:text-highlight mb-4">
        {currLang === "ID" ? "Eksplorasi Spasial Nusantara" : "Spatial Reserve Exploration"}
      </span>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-white leading-tight mb-4">
        {currLang === "ID" ? (
          <>
            Peta Kawasan Konservasi{" "}
            <span className="text-secondary dark:text-highlight">360°</span>
          </>
        ) : (
          <>
            Interactive 360°{" "}
            <span className="text-secondary dark:text-highlight">Reserves Map</span>
          </>
        )}
      </h1>

      <p className="text-sm md:text-base text-primary/75 dark:text-soft/85 max-w-2xl mx-auto leading-relaxed mb-8">
        {currLang === "ID"
          ? "Klik penanda foto di atas peta untuk meninjau cagar alam dan taman nasional, lalu jelajahi panorama interaktif 360 derajat."
          : "Click photo markers across the interactive map to preview conservation parks and enter immersive 360-degree panoramic tours."}
      </p>

      {/* PILL TOGGLE: PETA INTERAKTIF VS DAFTAR KAWASAN (PERSIS SEPERTI DI SCREENSHOT) */}
      <div className="inline-flex p-1.5 rounded-full bg-soft/20 dark:bg-light-dark border border-soft/60 dark:border-secondary/40 shadow-inner gap-1">
        <button
          onClick={() => setActiveTab("map")}
          className={`
            flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer
            ${
              activeTab === "map"
                ? "bg-secondary text-white dark:bg-highlight dark:text-dark shadow-md"
                : "text-primary/75 dark:text-soft/75 hover:text-primary dark:hover:text-white"
            }
          `}
        >
          <MapIcon />
          <span>{currLang === "ID" ? "Peta Interaktif" : "Interactive Map"}</span>
        </button>

        <button
          onClick={() => setActiveTab("list")}
          className={`
            flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer
            ${
              activeTab === "list"
                ? "bg-secondary text-white dark:bg-highlight dark:text-dark shadow-md"
                : "text-primary/75 dark:text-soft/75 hover:text-primary dark:hover:text-white"
            }
          `}
        >
          <ListIcon />
          <span>{currLang === "ID" ? "Daftar Kawasan" : "Reserves List"}</span>
        </button>
      </div>

      {/* PENCARIAN CEPAT SAAT DI TAB DAFTAR KAWASAN */}
      {activeTab === "list" && (
        <div className="w-full max-w-md mt-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              currLang === "ID"
                ? "Cari nama taman nasional, pulau, atau provinsi..."
                : "Search national park, island, or province..."
            }
            className="w-full px-5 py-3 rounded-full border border-soft/80 dark:border-secondary/50 bg-soft/10 dark:bg-light-dark text-primary dark:text-white placeholder:text-primary/40 dark:placeholder:text-soft/40 focus:outline-hidden focus:border-accent dark:focus:border-highlight text-sm transition-colors duration-200 shadow-sm"
          />
        </div>
      )}
    </div>
  );
};

export default MapHeader;
