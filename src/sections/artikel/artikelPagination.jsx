const ArtikelPagination = () => {
  return (
    <div className="flex justify-center mt-10 mb-10">
      <div className="flex gap-2 font-sans text-sm">
        <button className="px-4 h-9 rounded-full bg-soft/30 dark:bg-light-dark text-secondary/60 dark:text-soft/60 cursor-pointer">
          ‹
        </button>
        <button className="px-4 h-9 rounded-full bg-primary text-white dark:bg-highlight dark:text-dark font-bold shadow-md shadow-primary/20 cursor-pointer">
          1
        </button>
        <button className="px-4 h-9 rounded-full bg-soft/20 dark:bg-light-dark text-primary dark:text-soft hover:bg-primary hover:text-white dark:hover:bg-highlight dark:hover:text-dark transition-colors duration-200 cursor-pointer">
          2
        </button>
      </div>
    </div>
  );
};

export default ArtikelPagination;
