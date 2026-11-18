const CardRekomendasiRelawan = ({ category, title, date, location }) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 mb-1">
        <span className="text-secondary dark:text-highlight font-semibold text-[11px] uppercase tracking-wider">
          {category}
        </span>
        {date && (
          <span className="text-[11px] text-secondary/60 dark:text-soft/60">
            {date}
          </span>
        )}
      </div>
      <h5 className="font-serif font-semibold text-primary dark:text-soft group-hover:text-secondary dark:group-hover:text-highlight transition-colors duration-200 text-sm leading-snug">
        {title}
      </h5>
      {location && (
        <p className="text-[11px] text-primary/60 dark:text-soft/60 mt-1 line-clamp-1">
          📍 {location}
        </p>
      )}
    </div>
  );
};

export default CardRekomendasiRelawan;
