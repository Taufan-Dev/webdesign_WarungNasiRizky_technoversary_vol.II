import { Link } from "react-router-dom";

const Card = ({
  id,
  image,
  title,
  category,
  date,
  readTime,
  excerpt,
  big = false,
  className = "",
}) => {
  return (
    <Link
      to={`/artikel/${id}`}
      className={`group relative overflow-hidden rounded-2xl block transition-all duration-500 hover:-translate-y-1.5 shadow-md shadow-primary/5 hover:shadow-2xl hover:shadow-primary/15 border border-soft/50 dark:border-secondary/40 bg-soft/20 dark:bg-light-dark/60 ${className} ${
        big ? "h-[380px] lg:h-[460px]" : "h-[220px]"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/45 to-transparent p-5 lg:p-6 flex flex-col justify-end">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-primary/90 dark:bg-highlight/90 backdrop-blur-md px-3 py-0.5 text-[11px] font-semibold text-background dark:text-dark rounded-full uppercase tracking-wider shadow-sm">
            {category}
          </span>
          {readTime && (
            <span className="text-[11px] text-warm-ivory/80 font-medium">
              • {readTime}
            </span>
          )}
        </div>

        <h3
          className={`text-warm-ivory font-serif font-bold leading-snug group-hover:text-highlight transition-colors duration-300 ${
            big ? "text-xl sm:text-2xl" : "text-sm sm:text-base line-clamp-2"
          }`}
        >
          {title}
        </h3>

        {big && excerpt && (
          <p className="mt-2 text-xs sm:text-sm text-soft/90 line-clamp-2 leading-relaxed">
            {excerpt}
          </p>
        )}

        <div className="mt-3 flex items-center justify-between text-xs text-soft/80 pt-2 border-t border-soft/20">
          <span>{date}</span>
          <span className="inline-flex items-center gap-1 font-semibold text-highlight group-hover:translate-x-1 transition-transform duration-300">
            Baca →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
