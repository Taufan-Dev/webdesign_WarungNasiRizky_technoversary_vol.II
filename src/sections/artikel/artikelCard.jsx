import { Link } from "react-router-dom";

const CalendarIcon = () => (
  <svg className="w-4 h-4 text-secondary dark:text-soft/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ArtikelCard = ({ id, image, category, title, desc, date, language = "ID" }) => {
  return (
    <Link
      to={`/artikel/${id}`}
      className="
        group
        block
        dark:bg-light-dark
        w-full
        border border-soft/60 dark:border-secondary/40 hover:border-accent dark:hover:border-highlight
        rounded-3xl
        p-6 md:p-8
        bg-white
        hover:shadow-xl hover:shadow-primary/5
        transition-all duration-300
      "
    >
      <div className="grid md:grid-cols-7 gap-8 items-center">
        <div className="md:col-span-3 overflow-hidden rounded-2xl h-[220px] bg-soft/20">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="md:col-span-4">
          <p className="text-secondary dark:text-highlight text-xs font-semibold uppercase tracking-widest">
            {category}
          </p>

          <h3 className="text-xl font-serif font-bold mt-3 mb-3 text-primary dark:text-white group-hover:text-secondary dark:group-hover:text-highlight transition-colors duration-300">
            {title}
          </h3>

          <p className="text-primary/75 dark:text-soft/85 text-sm line-clamp-3 leading-relaxed">
            {desc}
          </p>

          <div className="mt-6 flex justify-between items-center text-sm text-secondary/70 dark:text-soft/70">
            <div className="flex items-center gap-2 text-xs">
              <CalendarIcon />
              <span>{date}</span>
            </div>

            <span className="flex items-center gap-1.5 text-primary dark:text-highlight font-semibold text-xs uppercase tracking-wider">
              {language === "ID" ? "Baca Selengkapnya" : "Read More"} <ArrowRightIcon />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArtikelCard;
