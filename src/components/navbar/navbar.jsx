import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

// Clean SVG Icons untuk Pilar Rimba
const HomeIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const Map360Icon = () => (
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h16.8" />
    <path d="M12 3a14 14 0 0 1 0 18" />
    <path d="M12 3a14 14 0 0 0 0 18" />
  </svg>
);

const SatwaIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="4" r="2" />
    <circle cx="18" cy="8" r="2" />
    <circle cx="4" cy="8" r="2" />
    <path d="M12 10a5 5 0 0 0-5 5c0 2.5 2 4.5 5 4.5s5-2 5-4.5a5 5 0 0 0-5-5Z" />
  </svg>
);

const RelawanIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const ArticleIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
    <path d="M6 6h10" />
    <path d="M6 10h10" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const SunIcon = () => (
  <svg className="w-5 h-5 transition-transform duration-300 hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5 transition-transform duration-300 hover:-rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const LeafLogoIcon = () => (
  <svg className="w-6 h-6 fill-current text-primary dark:text-highlight" viewBox="0 0 24 24">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
  </svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });
  const { language = "ID", toggleLanguage } = useLanguage();

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Efek scroll halus muncul setelah section Bento
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setVisible(rect.top <= window.innerHeight * 0.85);
      } else {
        setVisible(window.scrollY > window.innerHeight * 1.2);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const menuItems = [
    {
      label: language === "ID" ? "Beranda" : "Home",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      label: language === "ID" ? "Kawasan 360°" : "360° Reserves",
      path: "/maps",
      icon: <Map360Icon />,
    },
    {
      label: language === "ID" ? "Satwa Endemik" : "Endemic Fauna",
      path: "/satwa",
      icon: <SatwaIcon />,
    },
    {
      label: language === "ID" ? "Aksi Relawan" : "Action & Volunteer",
      path: "/aksi",
      icon: <RelawanIcon />,
    },
    {
      label: language === "ID" ? "Edukasi & Artikel" : "Articles",
      path: "/artikel",
      icon: <ArticleIcon />,
    },
  ];

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl transition-all duration-700 ease-out transform ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-12 pointer-events-none"
      }`}
    >
      <nav className="bg-white/90 dark:bg-dark/90 backdrop-blur-md rounded-full px-5 md:px-7 py-3 flex items-center justify-between relative border border-soft/50 dark:border-secondary/40 shadow-xl shadow-primary/5 transition-all duration-300">
        {/* Brand / Logo: RIMBA */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 transition-all duration-300"
          title="RIMBA - Ruang Inspirasi Melestarikan Bumi dan Alam"
        >
          <LeafLogoIcon />
          <div className="flex flex-col text-left">
            <span className="font-serif text-lg md:text-xl font-extrabold tracking-widest uppercase text-primary dark:text-highlight group-hover:text-secondary dark:group-hover:text-soft transition-colors duration-300">
              RIMBA
            </span>
   
          </div>
        </Link>

        {/* Desktop Menu Items dengan Efek Hover Pill */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 font-sans">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 whitespace-nowrap
                ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20 dark:bg-highlight dark:text-dark font-bold scale-100"
                    : "text-primary/80 dark:text-soft/80 hover:text-primary dark:hover:text-white hover:bg-soft/30 dark:hover:bg-light-dark/80 hover:scale-105 active:scale-95"
                }`
              }
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Tombol Kanan: Bahasa & Mode Gelap */}
        <div className="hidden lg:flex items-center gap-2.5 font-sans">
          <button
            onClick={toggleLanguage}
            className="text-xs font-bold px-3 py-1.5 border border-accent/60 rounded-full text-primary dark:text-soft hover:bg-accent/20 dark:hover:bg-secondary/40 hover:border-primary dark:hover:border-highlight hover:text-primary dark:hover:text-highlight transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            title="Ganti Bahasa (ID / EN)"
          >
            {language}
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-full text-xl text-primary dark:text-highlight hover:bg-soft/30 dark:hover:bg-light-dark/80 hover:text-secondary dark:hover:text-white transition-all duration-300 hover:rotate-12 hover:scale-110 active:scale-90 cursor-pointer"
            title={darkMode ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap"}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* Tombol Hamburger Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-2xl text-primary dark:text-highlight hover:bg-soft/30 dark:hover:bg-light-dark/80 transition-all duration-300 focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="absolute top-full left-0 right-0 mt-3 mx-1 bg-white/95 dark:bg-dark/95 backdrop-blur-xl rounded-3xl p-6 flex flex-col gap-5 lg:hidden z-50 shadow-2xl shadow-primary/10 border border-soft/50 dark:border-secondary/40">
            <div className="flex flex-col gap-1 border-b border-soft/40 dark:border-secondary/30 pb-3">
              <span className="font-serif text-lg font-bold text-primary dark:text-highlight">
                RIMBA
              </span>
              <span className="text-[11px] text-secondary/80 dark:text-soft/80">
                Ruang Inspirasi Melestarikan Bumi dan Alam
              </span>
            </div>

            <div className="flex flex-col gap-2 border-b border-soft/40 dark:border-secondary/30 pb-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm uppercase tracking-wider font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "bg-primary text-white shadow-md shadow-primary/20 dark:bg-highlight dark:text-dark font-bold"
                        : "text-primary/80 dark:text-soft/90 hover:bg-soft/30 dark:hover:bg-light-dark/80 hover:text-primary dark:hover:text-highlight hover:translate-x-1"
                    }`
                  }
                >
                  <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>

            <div className="flex justify-between items-center pt-1">
              <button
                onClick={toggleLanguage}
                className="text-xs font-bold px-4 py-2 border border-accent/60 rounded-full text-primary dark:text-soft hover:bg-accent/20 dark:hover:bg-secondary/40 hover:border-primary dark:hover:border-highlight hover:text-primary dark:hover:text-highlight transition-all duration-300 cursor-pointer"
              >
                Lang: {language}
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-full text-xl text-primary dark:text-highlight bg-soft/30 dark:bg-light-dark/80 hover:bg-soft/50 dark:hover:bg-light-dark hover:rotate-12 transition-all duration-300 cursor-pointer"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
