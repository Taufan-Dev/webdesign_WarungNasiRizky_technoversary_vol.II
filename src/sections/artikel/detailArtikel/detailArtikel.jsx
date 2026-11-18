import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import articlesData from "../../../datas/articles.json";

const ArrowLeftIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4 text-secondary dark:text-soft/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const ArticleDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  const article = articlesData.find((a) => a.id === parseInt(id));

  // Fallback jika artikel tidak ditemukan
  if (!article) {
    return (
      <div className="py-24 text-center text-primary dark:text-soft">
        <h2 className="text-2xl font-serif font-bold mb-4">
          {currLang === "ID" ? "Artikel Tidak Ditemukan" : "Article Not Found"}
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="text-secondary dark:text-highlight font-semibold hover:underline cursor-pointer"
        >
          {currLang === "ID" ? "← Kembali ke Daftar Artikel" : "← Back to Articles"}
        </button>
      </div>
    );
  }

  // Parse lines to paragraphs
  const rawContent =
    article.content?.[currLang] ||
    article.content?.ID ||
    article.desc?.[currLang] ||
    article.desc?.ID ||
    "";
  const contentParagraphs = rawContent
    .split("\n")
    .filter((p) => p.trim() !== "");

  return (
    <>
      {/* TOMBOL KEMBALI */}
      <button
        onClick={() => navigate(-1)}
        className="
          mb-6
          flex items-center gap-2
          text-sm font-semibold
          text-secondary dark:text-soft
          hover:text-primary dark:hover:text-highlight
          transition-colors duration-200
          cursor-pointer
        "
      >
        <ArrowLeftIcon />
        <span>{currLang === "ID" ? "Kembali" : "Back"}</span>
      </button>

      {/* KATEGORI */}
      <span className="inline-block px-3 py-1 bg-soft/30 dark:bg-light-dark text-secondary dark:text-highlight font-semibold text-xs rounded-full uppercase tracking-wider mb-4 border border-soft/50 dark:border-secondary/40">
        {article.category?.[currLang] || article.category?.ID}
      </span>

      {/* JUDUL */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-6 leading-tight">
        {article.title?.[currLang] || article.title?.ID}
      </h1>

      {/* AUTHOR & TANGGAL */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-sm">
        <p className="font-semibold text-primary/80 dark:text-soft/80">
          {currLang === "ID" ? "Oleh" : "By"}:{" "}
          <span className="text-secondary dark:text-highlight">{article.author}</span>
        </p>

        <div className="flex items-center gap-2 text-xs text-secondary/70 dark:text-soft/70">
          <CalendarIcon />
          <span>{article.date}</span>
        </div>

        {article.readTime && (
          <span className="text-xs text-secondary/60 dark:text-soft/60">
            • {article.readTime?.[currLang] || article.readTime?.ID}
          </span>
        )}
      </div>

      {/* IMAGE */}
      <div className="overflow-hidden rounded-3xl mb-10 shadow-xl border border-soft/50 dark:border-secondary/40">
        <img
          src={article.image}
          alt={article.title?.[currLang] || article.title?.ID}
          className="w-full h-[280px] sm:h-[380px] md:h-[480px] object-cover"
        />
      </div>

      {/* CONTENT */}
      <article className="prose prose-lg max-w-none text-justify text-primary/90 dark:text-soft/90 font-sans leading-relaxed space-y-6">
        {contentParagraphs.map((paragraph, index) => (
          <p key={index} className="text-base md:text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </article>
    </>
  );
};

export default ArticleDetail;
