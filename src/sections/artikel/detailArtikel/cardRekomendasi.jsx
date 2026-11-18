const RecommendationCard = ({ category, title }) => {
  return (
    <div>
      <p className="text-secondary dark:text-highlight font-semibold text-xs uppercase tracking-wider mb-1">
        {category}
      </p>
      <h5 className="font-serif font-semibold text-primary dark:text-soft group-hover:text-secondary dark:group-hover:text-highlight transition-colors duration-200 text-sm leading-snug">
        {title}
      </h5>
    </div>
  );
};

export default RecommendationCard;
