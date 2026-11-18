import { Link } from "react-router-dom";

const CalendarIcon = () => (
  <svg className="w-4 h-4 text-secondary dark:text-soft/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4 text-secondary dark:text-soft/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const UserGroupIcon = () => (
  <svg className="w-4 h-4 text-secondary dark:text-soft/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const RelawanCard = ({
  id,
  image,
  category,
  title,
  desc,
  date,
  location,
  quota,
  language = "ID",
}) => {
  return (
    <Link
      to={`/aksi/${id}`}
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
        <div className="md:col-span-3 overflow-hidden rounded-2xl h-[220px] bg-soft/20 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {quota && (
            <div className="absolute top-3 left-3 bg-dark/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
              <UserGroupIcon />
              <span>{quota}</span>
            </div>
          )}
        </div>

        <div className="md:col-span-4">
          <div className="flex items-center justify-between">
            <p className="text-secondary dark:text-highlight text-xs font-semibold uppercase tracking-widest">
              {category}
            </p>
            <div className="flex items-center gap-1 text-xs text-secondary/70 dark:text-soft/70">
              <CalendarIcon />
              <span>{date}</span>
            </div>
          </div>

          <h3 className="text-xl font-serif font-bold mt-2.5 mb-2.5 text-primary dark:text-white group-hover:text-secondary dark:group-hover:text-highlight transition-colors duration-300">
            {title}
          </h3>

          <p className="text-primary/75 dark:text-soft/85 text-sm line-clamp-2 leading-relaxed mb-4">
            {desc}
          </p>

          <div className="flex items-center gap-2 text-xs text-secondary/80 dark:text-soft/80 mb-5">
            <MapPinIcon />
            <span className="line-clamp-1">{location}</span>
          </div>

          <div className="flex justify-end items-center text-sm">
            <span className="flex items-center gap-1.5 text-primary dark:text-highlight font-semibold text-xs uppercase tracking-wider group-hover:underline">
              {language === "ID" ? "Daftar Relawan" : "Join as Volunteer"} <ArrowRightIcon />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RelawanCard;
