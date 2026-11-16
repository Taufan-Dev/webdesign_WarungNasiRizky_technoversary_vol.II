import CardArtikel from "./card";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import articlesData from "../../../datas/articles.json";

const ArticleIcon = () => (
  <svg
    className="w-5 h-5 text-primary dark:text-highlight"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
    <path d="M6 6h10" />
    <path d="M6 10h10" />
  </svg>
);

const ListArtikel = () => {
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  // Ambil 5 artikel pertama dari file data JSON
  const articles = articlesData.slice(0, 5).map((a) => ({
    id: a.id,
    image: a.image,
    title: a.title[currLang] || a.title.ID,
    category: a.category[currLang] || a.category.ID,
    date: a.date,
    readTime: a.readTime ? a.readTime[currLang] || a.readTime.ID : "",
    excerpt: a.excerpt ? a.excerpt[currLang] || a.excerpt.ID : "",
  }));

  return (
    <section className="bg-white dark:bg-dark pb-20 lg:pb-28 px-5 md:px-10 xl:px-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header Seksi Artikel */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-secondary dark:text-soft font-semibold">
              <ArticleIcon />
              <span>
                {currLang === "ID"
                  ? "Edukasi & Wawasan Lingkungan"
                  : "Eco Education & Insights"}
              </span>
              <div className="w-10 h-[1px] bg-accent/50 dark:bg-secondary/60 hidden sm:block" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-background">
              {currLang === "ID" ? "Artikel & Kabar " : "Rimba Conservation "}
              <span className="text-secondary dark:text-highlight">
                {currLang === "ID" ? "Konservasi Rimba" : "Articles & Stories"}
              </span>
            </h2>

            <p className="text-sm md:text-base text-primary/70 dark:text-soft/80 max-w-2xl leading-relaxed">
              {currLang === "ID"
                ? "Pelajari keanekaragaman satwa endemik, panduan gaya hidup bebas sampah, serta kisah aksi nyata para relawan penjaga bumi Nusantara."
                : "Explore rich insights into endemic wildlife, zero-waste lifestyle challenges, and inspiring stories of volunteers protecting Nusantara."}
            </p>
          </div>

          {/* Link ke Seluruh Artikel */}
          <Link
            to="/artikel"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-highlight hover:text-secondary dark:hover:text-soft transition-colors duration-300 w-fit pb-1 border-b border-accent/40 dark:border-highlight/40"
          >
            <span>
              {currLang === "ID" ? "Lihat Semua Artikel" : "View All Articles"}
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </div>

        {/* GRID UTAMA ARTIKEL */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* ARTIKEL UTAMA / HERO (Desktop: 3 Kolom) */}
          {articles.length > 0 && (
            <div className="lg:col-span-3 hidden lg:block">
              <CardArtikel {...articles[0]} big />
            </div>
          )}

          {/* DAFTAR ARTIKEL KECIL (Desktop: 2 Kolom berisi grid 2x2) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {articles.map((item, index) => (
              <CardArtikel
                key={item.id}
                {...item}
                // Di mobile/tablet: tampilkan semua
                // Di desktop: lewati artikel index 0 karena sudah jadi kartu besar di sebelah kiri
                className={index === 0 ? "lg:hidden" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListArtikel;
