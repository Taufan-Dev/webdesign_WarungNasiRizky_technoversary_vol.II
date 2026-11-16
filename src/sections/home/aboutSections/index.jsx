import { useLanguage } from "../../../context/LanguageContext";

const LeafIcon = () => (
  <svg
    className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110"
    viewBox="0 0 24 24"
  >
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
  </svg>
);

const About = () => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  const content = {
    ID: {
      story: "RIMBA · Ruang Inspirasi Melestarikan Bumi dan Alam",
      titlePart1: "Jelajahi Alam, ",
      titlePart2: "Lestarikan Nusantara.",
      tags: {
        peta360: "Eksplorasi 360°",
        satwa: "Satwa Endemik",
        relawan: "Aksi Relawan",
      },
      aboutUs: "Mengenal RIMBA",
      desc: "RIMBA (Ruang Inspirasi Melestarikan Bumi dan Alam) adalah platform digital konservasi alam Indonesia yang menggabungkan edukasi lingkungan, eksplorasi kawasan konservasi, pengenalan satwa endemik, tantangan ramah lingkungan, dan program relawan untuk mendorong aksi nyata menjaga kelestarian ekosistem Nusantara.",
      stats: {
        kawasan: "Eksplorasi Peta 360°",
        satwa: "Satwa Endemik",
        relawan: "Relawan Terdaftar",
        mangrove: "Pohon & Mangrove",
      },
      btnLabel: "GABUNG AKSI RELAWAN",
    },
    EN: {
      story: "RIMBA · Inspiring Conservation for Earth and Nature",
      titlePart1: "Explore Nature, ",
      titlePart2: "Preserve Indonesia.",
      tags: {
        peta360: "360° Exploration",
        satwa: "Endemic Wildlife",
        relawan: "Volunteer Action",
      },
      aboutUs: "About RIMBA",
      desc: "RIMBA (Ruang Inspirasi Melestarikan Bumi dan Alam) is an Indonesian nature conservation platform that combines environmental education, conservation area exploration, endemic wildlife discovery, eco-friendly challenges, and volunteer programs to inspire meaningful action in protecting Indonesia's ecosystems.",
      stats: {
        kawasan: "360° Interactive Reserves",
        satwa: "Endemic Species",
        relawan: "Registered Volunteers",
        mangrove: "Trees & Mangroves Planted",
      },
      btnLabel: "JOIN VOLUNTEER ACTION",
    },
  };

  const currentContent = content[currLang];

  return (
    <section
      id="about"
      className="bg-white dark:bg-dark py-24 lg:py-32 px-5 md:px-10 xl:px-20 text-primary dark:text-soft font-sans overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* === LEFT COLUMN === */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {/* Label & Heading */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-secondary dark:text-soft font-semibold">
              <span>{currentContent.story}</span>
              <div className="w-12 h-[1px] bg-accent/50 dark:bg-secondary/60" />
            </div>

            <div className="relative pl-6">
              {/* Vertical Gradient line */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-accent to-transparent dark:from-highlight dark:via-accent dark:to-transparent rounded-full" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold leading-[1.25] text-primary dark:text-background">
                {currentContent.titlePart1}
                <span className="text-secondary dark:text-highlight">
                  {currentContent.titlePart2}
                </span>
              </h2>
            </div>
          </div>

          {/* Large Hero Nature Card */}
          <div className="rounded-3xl mt-16 relative overflow-hidden h-[250px] sm:h-[320px] lg:h-[360px] w-full group shadow-xl shadow-primary/5 border border-soft/60 dark:border-secondary/40 bg-soft/20 dark:bg-light-dark/50">
            <img
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200"
              alt="Hutan Hujan dan Pesisir Indonesia"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-background">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">
                  Ekosistem Darat & Perairan
                </p>
                <p className="text-sm md:text-base font-serif font-bold text-warm-ivory">
                  Kawasan Konservasi & Cagar Alam Nusantara
                </p>
              </div>
              <span className="hidden sm:inline-block bg-primary/90 text-background px-3 py-1 rounded-full text-xs font-semibold border border-soft/30">
                Peta 360°
              </span>
            </div>
          </div>
        </div>

        {/* === RIGHT COLUMN === */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {/* Two Conservation Image Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {/* Card 1: Satwa Endemik */}
            <div className="rounded-3xl relative overflow-hidden h-[200px] sm:h-[220px] group shadow-lg shadow-primary/5 border border-soft/60 dark:border-secondary/40 bg-soft/20 dark:bg-light-dark/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
              <img
                src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800"
                alt="Satwa Endemik Indonesia"
                className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/20 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className="bg-primary/90 dark:bg-dark/90 backdrop-blur-md px-3.5 py-1 text-xs text-background dark:text-highlight border border-soft/30 dark:border-highlight/30 rounded-full font-semibold uppercase tracking-wider shadow-sm">
                  {currentContent.tags.satwa}
                </span>
              </div>
            </div>

            {/* Card 2: Aksi Relawan & Mangrove */}
            <div className="rounded-3xl relative overflow-hidden h-[200px] sm:h-[220px] group shadow-lg shadow-primary/5 border border-soft/60 dark:border-secondary/40 bg-soft/20 dark:bg-light-dark/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800"
                alt="Aksi Tanam Pohon dan Mangrove"
                className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/20 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className="bg-primary/90 dark:bg-dark/90 backdrop-blur-md px-3.5 py-1 text-xs text-background dark:text-highlight border border-soft/30 dark:border-highlight/30 rounded-full font-semibold uppercase tracking-wider shadow-sm">
                  {currentContent.tags.relawan}
                </span>
              </div>
            </div>
          </div>

          {/* Description & Action */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold tracking-widest uppercase text-secondary dark:text-highlight text-base lg:text-xl">
              {currentContent.aboutUs}
            </h3>
            <p className="text-primary/80 dark:text-soft/90 text-sm md:text-base leading-relaxed text-justify">
              {currentContent.desc}
            </p>

    
          </div>

          {/* Platform Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="group p-4 rounded-2xl bg-soft/20 dark:bg-light-dark/60 border border-soft/40 dark:border-secondary/30 hover:border-accent dark:hover:border-highlight hover:bg-soft/30 dark:hover:bg-light-dark transition-all duration-300 hover:-translate-y-1 shadow-sm">
              <h4 className="text-2xl lg:text-3xl font-extrabold text-primary dark:text-highlight mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                360°
              </h4>
              <p className="text-xs font-semibold text-secondary/80 dark:text-soft/80">
                {currentContent.stats.kawasan}
              </p>
            </div>

            <div className="group p-4 rounded-2xl bg-soft/20 dark:bg-light-dark/60 border border-soft/40 dark:border-secondary/30 hover:border-accent dark:hover:border-highlight hover:bg-soft/30 dark:hover:bg-light-dark transition-all duration-300 hover:-translate-y-1 shadow-sm">
              <h4 className="text-2xl lg:text-3xl font-extrabold text-primary dark:text-highlight mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                150+
              </h4>
              <p className="text-xs font-semibold text-secondary/80 dark:text-soft/80">
                {currentContent.stats.satwa}
              </p>
            </div>

            <div className="group p-4 rounded-2xl bg-soft/20 dark:bg-light-dark/60 border border-soft/40 dark:border-secondary/30 hover:border-accent dark:hover:border-highlight hover:bg-soft/30 dark:hover:bg-light-dark transition-all duration-300 hover:-translate-y-1 shadow-sm">
              <h4 className="text-2xl lg:text-3xl font-extrabold text-primary dark:text-highlight mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                12K+
              </h4>
              <p className="text-xs font-semibold text-secondary/80 dark:text-soft/80">
                {currentContent.stats.relawan}
              </p>
            </div>

            <div className="group p-4 rounded-2xl bg-soft/20 dark:bg-light-dark/60 border border-soft/40 dark:border-secondary/30 hover:border-accent dark:hover:border-highlight hover:bg-soft/30 dark:hover:bg-light-dark transition-all duration-300 hover:-translate-y-1 shadow-sm">
              <h4 className="text-2xl lg:text-3xl font-extrabold text-primary dark:text-highlight mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                50K+
              </h4>
              <p className="text-xs font-semibold text-secondary/80 dark:text-soft/80">
                {currentContent.stats.mangrove}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
