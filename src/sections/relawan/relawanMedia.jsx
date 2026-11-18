import { useLanguage } from "../../context/LanguageContext";

const RelawanMedia = () => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  return (
    <div className="hidden xl:block h-full">
      <div className="relative w-full h-full max-w-[280px] mx-auto rounded-2xl overflow-hidden shadow-lg border border-soft/50 dark:border-secondary/40">
        {/* VIDEO DOKUMENTER AKSI */}
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source
            src="https://v1.pinimg.com/videos/mc/720p/5f/fb/b3/5ffbb3be23d853129a1bd0597c45e41b.mp4"
            type="video/mp4"
          />
        </video>

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent p-5 flex flex-col justify-end">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-highlight">
            {currLang === "ID" ? "Dokumenter Aksi" : "Action Reel"}
          </span>
          <p className="text-white text-xs font-serif font-bold mt-1">
            {currLang === "ID" ? "Jejak Langkah Relawan Rimba" : "Footprints of Rimba Volunteers"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RelawanMedia;
