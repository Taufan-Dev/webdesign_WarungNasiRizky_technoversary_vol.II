import CardRekomendasiRelawan from "./cardRekomendasiRelawan";
import { useLanguage } from "../../../context/LanguageContext";
import volunteersData from "../../../datas/volunteers.json";
import { Link, useParams } from "react-router-dom";

const SidebarRelawan = () => {
  const { id } = useParams();
  const currentId = parseInt(id) || 1;
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  // Ambil program lain selain yang sedang dibuka
  const otherActions = volunteersData
    .filter((v) => v.id !== currentId)
    .slice(0, 4);

  return (
    <aside className="sticky top-28 space-y-6">
      {/* Banner / Poster Panggilan Relawan */}
      <div className="relative h-[220px] rounded-3xl overflow-hidden shadow-lg border border-soft/50 dark:border-secondary/40">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800"
          alt="Aksi Konservasi Rimba"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/40 to-transparent p-5 flex flex-col justify-end">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-highlight">
            {currLang === "ID" ? "Gerakan Hijau" : "Green Movement"}
          </span>
          <p className="text-white text-xs font-serif font-bold mt-1">
            {currLang === "ID" ? "Satu Tangan, Sejuta Pohon Untuk Nusantara" : "One Hand, A Million Trees for Nusantara"}
          </p>
        </div>
      </div>

      <h3 className="font-serif font-bold text-lg text-primary dark:text-white mt-8 mb-4">
        {currLang === "ID" ? "Aksi Relawan Lainnya" : "Other Volunteer Actions"}
      </h3>

      {/* List Rekomendasi */}
      <div className="space-y-4">
        {otherActions.map((item) => (
          <Link
            to={`/aksi/${item.id}`}
            key={item.id}
            className="block p-4 rounded-2xl border border-soft/40 dark:border-secondary/30 bg-soft/10 dark:bg-light-dark/50 hover:bg-soft/25 dark:hover:bg-light-dark transition-all duration-300 group"
          >
            <CardRekomendasiRelawan
              category={item.category?.[currLang] || item.category?.ID}
              title={item.title?.[currLang] || item.title?.ID}
              date={item.date}
              location={item.location?.[currLang] || item.location?.ID}
            />
          </Link>
        ))}
      </div>

      {/* Box Hotline Bantuan */}
      <div className="p-4 rounded-2xl border border-soft/50 dark:border-secondary/30 bg-white dark:bg-light-dark text-xs text-primary/80 dark:text-soft/80">
        <p className="font-semibold text-primary dark:text-highlight mb-1">
          {currLang === "ID" ? "Butuh Bantuan Pendaftaran?" : "Need Registration Help?"}
        </p>
        <p className="leading-relaxed">
          {currLang === "ID"
            ? "Hubungi tim narahubung relawan melalui WhatsApp di "
            : "Contact our volunteer hotline via WhatsApp at "}
          <span className="font-bold text-secondary dark:text-highlight">+62 812-3456-7890</span>
        </p>
      </div>
    </aside>
  );
};

export default SidebarRelawan;
