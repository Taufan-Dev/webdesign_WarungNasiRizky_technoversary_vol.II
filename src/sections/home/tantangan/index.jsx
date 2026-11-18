import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";

const CheckIcon = () => (
  <svg className="w-4 h-4 text-white dark:text-dark stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const LeafIcon = () => (
  <svg className="w-5 h-5 text-secondary dark:text-highlight" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const ResetIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

const TantanganPlasticFree = () => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  const [completedDays, setCompletedDays] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("rimba_plastic_free_days");
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const challenges = [
    {
      id: 1,
      day: { ID: "Hari 1", EN: "Day 1" },
      title: {
        ID: "Bawa Botol Minum (Tumbler) Sendiri",
        EN: "Carry Your Own Reusable Water Bottle",
      },
      desc: {
        ID: "Hindari membeli air minum dalam kemasan botol plastik sekali pakai sepanjang hari.",
        EN: "Avoid purchasing single-use plastic bottled beverages throughout the day.",
      },
      icon: "💧",
    },
    {
      id: 2,
      day: { ID: "Hari 2", EN: "Day 2" },
      title: {
        ID: "Gunakan Tas Belanja Kain (Tote Bag)",
        EN: "Bring Reusable Shopping Bags",
      },
      desc: {
        ID: "Tolak kantong kresek saat berbelanja di pasar, supermarket, atau minimarket.",
        EN: "Refuse single-use plastic bags when shopping for groceries or daily supplies.",
      },
      icon: "🛍️",
    },
    {
      id: 3,
      day: { ID: "Hari 3", EN: "Day 3" },
      title: {
        ID: "Katakan Tidak pada Sedotan Plastik",
        EN: "Say No to Plastic Straws",
      },
      desc: {
        ID: "Minum langsung dari gelas atau gunakan sedotan stainless/bambu yang dapat dicuci.",
        EN: "Sip directly from your cup or use washable metal/bamboo straws.",
      },
      icon: "🥤",
    },
    {
      id: 4,
      day: { ID: "Hari 4", EN: "Day 4" },
      title: {
        ID: "Tolak Alat Makan Plastik Sekali Pakai",
        EN: "Decline Single-Use Plastic Cutlery",
      },
      desc: {
        ID: "Pilih opsi 'Tanpa Sendok/Garpu Plastik' saat memesan makanan pesan-antar daring.",
        EN: "Opt out of plastic cutlery when ordering takeout and food delivery online.",
      },
      icon: "🍴",
    },
    {
      id: 5,
      day: { ID: "Hari 5", EN: "Day 5" },
      title: {
        ID: "Bawa Kotak Bekal Makanan Sendiri",
        EN: "Bring Your Own Lunchbox Container",
      },
      desc: {
        ID: "Gunakan kotak makan reusable saat membeli makanan bawa pulang (takeaway).",
        EN: "Pack a reusable food container when purchasing takeaway meals.",
      },
      icon: "🍱",
    },
    {
      id: 6,
      day: { ID: "Hari 6", EN: "Day 6" },
      title: {
        ID: "Belanja Bahan Segar Tanpa Bungkus Plastik",
        EN: "Shop Produce Without Plastic Wrap",
      },
      desc: {
        ID: "Pilih sayur, buah, dan bumbu curah bebas dari styrofoam tray dan plastik cling wrap.",
        EN: "Choose fresh produce free from single-use styrofoam trays and plastic film.",
      },
      icon: "🥦",
    },
    {
      id: 7,
      day: { ID: "Hari 7", EN: "Day 7" },
      title: {
        ID: "Ajak 1 Orang Teman atau Keluarga Berpantang Plastik",
        EN: "Inspire 1 Friend or Family Member",
      },
      desc: {
        ID: "Bagikan pengalamanmu selama 7 hari dan tularkan kebiasaan minim sampah ke orang terdekat.",
        EN: "Share your journey and inspire someone close to embrace plastic-free living.",
      },
      icon: "🌱",
    },
  ];

  const toggleDay = (dayId) => {
    setCompletedDays((prev) => {
      const next = prev.includes(dayId)
        ? prev.filter((id) => id !== dayId)
        : [...prev, dayId];
      try {
        localStorage.setItem("rimba_plastic_free_days", JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleReset = () => {
    setCompletedDays([]);
    try {
      localStorage.removeItem("rimba_plastic_free_days");
    } catch {
      // ignore
    }
  };

  const totalCompleted = completedDays.length;
  const progressPercent = Math.round((totalCompleted / challenges.length) * 100);

  return (
    <section className="bg-white dark:bg-dark py-20 lg:py-28 px-5 md:px-10 xl:px-20 text-primary dark:text-soft transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft/30 dark:bg-light-dark border border-soft/60 dark:border-secondary/40 text-xs font-semibold uppercase tracking-wider text-secondary dark:text-highlight mb-4">
            <LeafIcon />
            <span>
              {currLang === "ID"
                ? "Aksi Nyata Harian"
                : "Daily Environmental Action"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-primary dark:text-white leading-tight mb-4">
            {currLang === "ID" ? (
              <>
                Tantangan 7 Hari{" "}
                <span className="text-secondary dark:text-highlight">
                  Tanpa Plastik
                </span>
              </>
            ) : (
              <>
                7 Days{" "}
                <span className="text-secondary dark:text-highlight">
                  Plastic-Free Challenge
                </span>
              </>
            )}
          </h2>

          <p className="text-sm md:text-base text-primary/75 dark:text-soft/85 max-w-2xl mx-auto leading-relaxed">
            {currLang === "ID"
              ? "Klik setiap tantangan yang berhasil kamu selesaikan hari ini. Bersama kita kurangi timbulan sampah plastik sekali pakai untuk menjaga bumi Nusantara."
              : "Click each challenge you complete today. Small collective daily habits create monumental protection for Indonesia's ecosystems."}
          </p>

          {/* PROGRESS BAR & STATS */}
          <div className="mt-8 max-w-md mx-auto p-4 rounded-2xl bg-soft/10 dark:bg-light-dark border border-soft/50 dark:border-secondary/30">
            <div className="flex justify-between items-center text-xs font-semibold mb-2">
              <span className="text-primary/80 dark:text-soft/80">
                {currLang === "ID" ? "Pencapaian Kamu:" : "Your Progress:"}{" "}
                <strong className="text-secondary dark:text-highlight">
                  {totalCompleted} / {challenges.length} {currLang === "ID" ? "Hari" : "Days"}
                </strong>
              </span>
              <span className="text-secondary dark:text-highlight font-bold">
                {progressPercent}%
              </span>
            </div>

            <div className="w-full h-2.5 bg-soft/40 dark:bg-dark rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-secondary to-accent dark:from-highlight dark:to-accent transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {totalCompleted === challenges.length && (
              <p className="mt-3 text-xs font-bold text-secondary dark:text-highlight text-center animate-pulse">
                🎉{" "}
                {currLang === "ID"
                  ? "Hebat! Kamu berhasil menuntaskan seluruh 7 hari tanpa plastik!"
                  : "Brilliant! You conquered all 7 days plastic-free!"}
              </p>
            )}
          </div>
        </div>

        {/* CHECKLIST ITEMS */}
        <div className="space-y-3.5">
          {challenges.map((item) => {
            const isDone = completedDays.includes(item.id);

            return (
              <div
                key={item.id}
                onClick={() => toggleDay(item.id)}
                className={`
                  group
                  flex items-start sm:items-center gap-4
                  p-4 sm:p-5 rounded-2xl
                  border transition-all duration-300
                  cursor-pointer select-none
                  ${
                    isDone
                      ? "bg-soft/20 dark:bg-light-dark/40 border-secondary/30 dark:border-secondary/30 opacity-75"
                      : "bg-white dark:bg-light-dark border-soft/60 dark:border-secondary/40 hover:border-accent dark:hover:border-highlight shadow-sm hover:shadow-md"
                  }
                `}
              >
                {/* CHECKBOX CIRCLE */}
                <div
                  className={`
                    w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 mt-0.5 sm:mt-0
                    ${
                      isDone
                        ? "bg-secondary dark:bg-highlight text-white dark:text-dark scale-105 shadow-sm"
                        : "border-2 border-secondary/40 dark:border-soft/40 group-hover:border-secondary dark:group-hover:border-highlight"
                    }
                  `}
                >
                  {isDone && <CheckIcon />}
                </div>

                {/* ICON & BADGE */}
                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-soft/25 dark:bg-dark text-lg shrink-0">
                  {item.icon}
                </div>

                {/* CONTENT (STRIKETHROUGH WHEN CHECKED) */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span
                      className={`
                        text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full transition-colors duration-300
                        ${
                          isDone
                            ? "bg-secondary/15 text-secondary dark:text-highlight line-through decoration-secondary/50 dark:decoration-highlight/50"
                            : "bg-primary/10 dark:bg-highlight/15 text-primary dark:text-highlight"
                        }
                      `}
                    >
                      {item.day[currLang] || item.day.ID}
                    </span>
                  </div>

                  <h3
                    className={`
                      text-base sm:text-lg font-serif font-bold transition-all duration-300
                      ${
                        isDone
                          ? "line-through text-primary/40 dark:text-soft/40 decoration-secondary dark:decoration-highlight decoration-2"
                          : "text-primary dark:text-white group-hover:text-secondary dark:group-hover:text-highlight"
                      }
                    `}
                  >
                    {item.title[currLang] || item.title.ID}
                  </h3>

                  <p
                    className={`
                      text-xs sm:text-sm mt-0.5 leading-relaxed transition-all duration-300
                      ${
                        isDone
                          ? "line-through text-primary/30 dark:text-soft/30 decoration-secondary/40 dark:decoration-highlight/40"
                          : "text-primary/75 dark:text-soft/85"
                      }
                    `}
                  >
                    {item.desc[currLang] || item.desc.ID}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* RESET BUTTON */}
        {totalCompleted > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 text-xs font-semibold text-secondary/70 dark:text-soft/70 hover:text-primary dark:hover:text-highlight transition-colors cursor-pointer"
            >
              <ResetIcon />
              <span>
                {currLang === "ID" ? "Ulangi Tantangan" : "Reset Challenge"}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TantanganPlasticFree;
