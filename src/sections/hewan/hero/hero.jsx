import { useLanguage } from "../../../context/LanguageContext";

const SearchIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const Hero = ({ searchQuery, setSearchQuery }) => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  const content = {
    EN: {
      title1: "Endemic Wildlife of ",
      title2: "Indonesia",
      subtitle:
        "Explore the rare and extraordinary fauna found exclusively across the Indonesian archipelago. Discover their ecological roles and join our conservation mission.",
      placeholder: "Search animal name, habitat, or taxonomy...",
    },
    ID: {
      title1: "Satwa Endemik ",
      title2: "Indonesia",
      subtitle:
        "Jelajahi keanekaragaman fauna unik dan langka yang hanya hidup di belantara Nusantara. Kenali peran ekologis mereka dan mari bersama menjaga kelestariannya.",
      placeholder: "Cari nama satwa, habitat, atau ordo taksonomi...",
    },
  };

  const text = content[currLang];

  return (
    <section className="bg-white dark:bg-dark py-24 md:py-32 flex justify-center mt-20 md:mt-0 relative overflow-hidden transition-colors duration-500">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(#173D2B 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-accent/20 dark:bg-highlight/10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-0 -ml-32 w-[500px] h-[500px] rounded-full bg-primary/10 dark:bg-secondary/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full px-6 md:px-12 flex flex-col justify-center items-start pt-10 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black tracking-tight text-primary dark:text-white mb-6 leading-tight">
            {text.title1}
            <span className="text-secondary dark:text-highlight">{text.title2}</span>
          </h1>

          <p className="md:text-base lg:text-lg text-primary/80 dark:text-soft/90 font-sans mb-10 max-w-3xl leading-relaxed">
            {text.subtitle}
          </p>

          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <SearchIcon className="text-secondary dark:text-highlight w-6 h-6" />
            </div>
            <input
              type="text"
              className="w-full pl-14 pr-6 py-4 rounded-2xl border border-soft/80 dark:border-secondary/50 bg-soft/10 dark:bg-light-dark text-primary dark:text-white placeholder:text-primary/40 dark:placeholder:text-soft/40 focus:outline-hidden focus:border-accent dark:focus:border-highlight text-base transition-colors duration-200 shadow-sm"
              placeholder={text.placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
