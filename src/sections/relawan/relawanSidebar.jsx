import { useLanguage } from "../../context/LanguageContext";
import volunteersData from "../../datas/volunteers.json";
import { Link } from "react-router-dom";

const FlameIcon = () => (
  <svg className="w-5 h-5 text-highlight fill-current" viewBox="0 0 24 24">
    <path d="M12 23c-4.97 0-9-4.03-9-9 0-4.16 2.84-7.66 6.75-8.68-.31 1.28-.21 2.65.34 3.86.6 1.34 1.7 2.37 3.03 2.87-.27-1.42.06-2.92.93-4.11C15.12 6.46 16.5 4.8 17 2c2.6 2.33 4.2 5.76 4 9.5-.2 4.8-4.16 8.7-8.96 8.99A8.99 8.99 0 0 1 12 23z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-3.5 h-3.5 text-secondary/70 dark:text-soft/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const RelawanSidebar = () => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  const sidebarActions = volunteersData.slice(1, 4);

  return (
    <div className="sticky top-28 pt-2 space-y-6">
      <h2 className="text-xl flex items-center gap-2.5 font-serif font-bold text-primary dark:text-white mb-4">
        <FlameIcon />
        {currLang === "ID" ? "Aksi Mendesak" : "Urgent Actions"}
      </h2>

      <div className="space-y-4">
        {sidebarActions.map((item) => (
          <Link
            to={`/aksi/${item.id}`}
            key={item.id}
            className="p-4 rounded-2xl border border-soft/40 dark:border-secondary/30 bg-soft/10 dark:bg-light-dark/50 hover:bg-soft/25 dark:hover:bg-light-dark transition-all duration-300 block group"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-secondary dark:text-highlight text-[11px] font-semibold uppercase tracking-wider">
                {item.category?.[currLang] || item.category?.ID}
              </span>
              <span className="text-[11px] text-primary/70 dark:text-soft/70 font-medium">
                {item.quota}
              </span>
            </div>

            <h4 className="text-primary dark:text-soft font-serif font-semibold text-sm leading-snug group-hover:text-secondary dark:group-hover:text-highlight transition-colors duration-200 mb-2">
              {item.title?.[currLang] || item.title?.ID}
            </h4>

            <div className="flex items-center gap-1.5 text-xs text-secondary/70 dark:text-soft/70">
              <CalendarIcon />
              <span>{item.date}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Box Info Donasi atau Relawan Komunitas */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg border border-primary/20">
        <h4 className="font-serif font-bold text-base mb-1 text-highlight">
          {currLang === "ID" ? "Ingin Kolaborasi Komunitas?" : "Want Community Collaboration?"}
        </h4>
        <p className="text-xs text-soft/90 leading-relaxed mb-4">
          {currLang === "ID"
            ? "Punya kelompok pemuda atau institusi yang ingin membuka posko aksi konservasi bersama Rimba? Hubungi tim lapangan kami."
            : "Have a youth group or institution wanting to open a joint conservation post with Rimba? Contact our field coordinators."}
        </p>
        <a
          href="mailto:relawan@rimbanusantara.org"
          className="inline-block text-xs font-semibold px-3.5 py-1.5 rounded-full bg-highlight text-dark hover:bg-white transition-colors duration-200"
        >
          {currLang === "ID" ? "Hubungi Koordinator" : "Contact Coordinator"}
        </a>
      </div>
    </div>
  );
};

export default RelawanSidebar;
