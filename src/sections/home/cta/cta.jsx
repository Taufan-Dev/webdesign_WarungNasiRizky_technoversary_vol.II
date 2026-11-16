import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";

const CtaSection = () => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  const content = {
    ID: {
      tag: "Gerakan Konservasi Alam",
      titlePart1: "Satukan Langkah, ",
      titlePart2: "Lestarikan Bumi Nusantara",
      desc: "Mari ambil bagian dalam aksi nyata menjaga kelestarian ekosistem darat dan perairan. Mulai dari tantangan 7 Days Without Plastic, penanaman mangrove, hingga bergabung menjadi relawan pelindung satwa endemik.",
      btnPrimary: "Gabung Aksi Relawan",
      btnSecondary: "Jelajahi Kawasan 360°",
    },
    EN: {
      tag: "Nature Conservation Movement",
      titlePart1: "Unite for Nature, ",
      titlePart2: "Protect Nusantara's Wild",
      desc: "Take part in real-world actions to safeguard terrestrial and marine ecosystems. From the 7 Days Without Plastic challenge to mangrove restoration and volunteering for endangered wildlife protection.",
      btnPrimary: "Join as Volunteer",
      btnSecondary: "Explore 360° Reserves",
    },
  };

  const text = content[currLang];

  return (
    <section className="bg-white dark:bg-dark px-5 md:px-10 xl:px-20 pb-20 lg:pb-28 transition-colors duration-500">
      {/* Container Card dengan gradasi warna kiri atas & kanan bawah yang terisolasi di dalam kartu agar tidak nabrak section atas/bawah */}
      <div className="relative max-w-5xl mx-auto text-center rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-soft/70 dark:border-secondary/50 bg-soft/30 dark:bg-light-dark/90 px-6 sm:px-12 md:px-16 py-16 md:py-20 backdrop-blur-md">
        {/* Gradasi Kiri Atas - Digelapkan (Deep Forest Green / Deep Leaf) */}
        <div className="absolute -top-16 -left-16 w-80 h-80 bg-gradient-to-br from-secondary/55 via-primary/35 to-transparent dark:from-secondary/40 dark:via-primary/25 rounded-full blur-3xl pointer-events-none" />

        {/* Gradasi Kanan Bawah - Digelapkan (Earth Gold & Forest) */}
        <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-gradient-to-tl from-highlight/50 via-secondary/30 to-transparent dark:from-highlight/35 dark:via-secondary/20 rounded-full blur-3xl pointer-events-none" />

        {/* Konten Utama */}
        <div className="relative z-10">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-secondary dark:text-soft font-semibold mb-3">
            {text.tag}
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wider text-primary dark:text-background leading-tight">
            {text.titlePart1}
            <span className="text-secondary dark:text-highlight">
              {text.titlePart2}
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-primary/80 dark:text-soft/85 leading-relaxed">
            {text.desc}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/aksi"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-secondary text-white font-semibold text-xs tracking-widest uppercase shadow-md shadow-primary/20 hover:shadow-xl hover:scale-105 active:scale-95 dark:bg-highlight dark:hover:bg-highlight/90 dark:text-dark dark:shadow-highlight/10 transition-all duration-300 text-center"
            >
              {text.btnPrimary}
            </Link>

            <Link
              to="/maps"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white dark:border-highlight dark:text-highlight dark:hover:bg-highlight dark:hover:text-dark font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 text-center"
            >
              {text.btnSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
