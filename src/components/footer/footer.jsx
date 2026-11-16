import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const MapPinIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  const { language = "ID" } = useLanguage() || {};

  const content = {
    EN: {
      desc: "Indonesia's digital nature conservation platform dedicated to protecting endemic wildlife, restoring rainforest ecosystems, and inspiring collective environmental action.",
      menuTitle: "Menu",
      servicesTitle: "Programs",
      contactTitle: "Contact",
      menu: [
        { label: "Home", path: "/" },
        { label: "Endemic Wildlife", path: "/satwa" },
        { label: "360° Reserves", path: "/maps" },
        { label: "Articles", path: "/artikel" },
      ],
      services: [
        "360° Interactive Reserves",
        "Endemic Wildlife Registry",
        "7 Days Plastic-Free",
        "Volunteer Programs",
      ],
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
    ID: {
      desc: "Platform digital konservasi alam Indonesia yang berdedikasi menjaga kelestarian satwa liar endemik, merawat hutan hujan tropis, dan menggerakkan aksi nyata pelestarian bumi.",
      menuTitle: "Menu",
      servicesTitle: "Program",
      contactTitle: "Kontak",
      menu: [
        { label: "Beranda", path: "/" },
        { label: "Satwa Endemik", path: "/satwa" },
        { label: "Kawasan 360°", path: "/maps" },
        { label: "Artikel", path: "/artikel" },
      ],
      services: [
        "Eksplorasi Peta 360°",
        "Ensiklopedia Satwa",
        "Tantangan 7 Days",
        "Aksi Relawan Rimba",
      ],
      privacy: "Kebijakan Privasi",
      terms: "Syarat & Ketentuan",
    },
  };

  const text = content[language] || content.ID;

  return (
    <footer className="relative border-t border-soft/40 dark:border-secondary/40 bg-white dark:bg-dark text-primary/80 dark:text-soft/80">
      {/* aksen gradient halus */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 dark:via-highlight/30 to-transparent" />

      <div className="px-5 md:px-10 xl:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif tracking-widest uppercase text-primary dark:text-highlight text-2xl font-bold">
              RIMBA
            </h3>
            <p className="mt-4 text-sm text-secondary/80 dark:text-soft/80 text-justify leading-relaxed pr-4">
              {text.desc}
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-semibold text-primary dark:text-background mb-4 uppercase tracking-wider">
              {text.menuTitle}
            </h4>
            <ul className="space-y-3 text-sm text-secondary/80 dark:text-soft/80">
              {text.menu.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-primary dark:hover:text-highlight transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan / Program */}
          <div>
            <h4 className="text-sm font-semibold text-primary dark:text-background mb-4 uppercase tracking-wider">
              {text.servicesTitle}
            </h4>
            <ul className="space-y-3 text-sm text-secondary/80 dark:text-soft/80">
              {text.services.map((service, index) => (
                <li
                  key={index}
                  className="hover:text-primary dark:hover:text-highlight transition-colors duration-200 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-sm font-semibold text-primary dark:text-background mb-4 uppercase tracking-wider">
              {text.contactTitle}
            </h4>
            <ul className="space-y-4 text-sm text-secondary/80 dark:text-soft/80 flex flex-col items-start">
              <li className="flex gap-4 group cursor-pointer w-full">
                <div className="w-10 h-10 rounded-full bg-soft/30 dark:bg-light-dark/80 flex items-center justify-center group-hover:bg-primary dark:group-hover:bg-highlight transition-colors flex-shrink-0">
                  <MapPinIcon className="w-4 h-4 text-primary dark:text-highlight group-hover:text-white dark:group-hover:text-dark transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="leading-tight text-primary dark:text-soft">Indonesia</span>
                  <span className="text-xs text-secondary/60 dark:text-soft/60">
                    Pusat Konservasi Alam Rimba
                  </span>
                </div>
              </li>
              <li className="flex gap-4 group cursor-pointer w-full">
                <div className="w-10 h-10 rounded-full bg-soft/30 dark:bg-light-dark/80 flex items-center justify-center group-hover:bg-primary dark:group-hover:bg-highlight transition-colors flex-shrink-0">
                  <MailIcon className="w-4 h-4 text-primary dark:text-highlight group-hover:text-white dark:group-hover:text-dark transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="leading-tight text-primary dark:text-soft">
                    konservasi@rimba.id
                  </span>
                  <span className="text-xs text-secondary/60 dark:text-soft/60">
                    Hubungi Kami Kapan Saja
                  </span>
                </div>
              </li>
              <li className="flex gap-4 group cursor-pointer w-full">
                <div className="w-10 h-10 rounded-full bg-soft/30 dark:bg-light-dark/80 flex items-center justify-center group-hover:bg-primary dark:group-hover:bg-highlight transition-colors flex-shrink-0">
                  <PhoneIcon className="w-4 h-4 text-primary dark:text-highlight group-hover:text-white dark:group-hover:text-dark transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="leading-tight text-primary dark:text-soft">
                    +62 812-3456-7890
                  </span>
                  <span className="text-xs text-secondary/60 dark:text-soft/60">
                    Layanan Informasi & Relawan
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-16 pt-8 border-t border-soft/30 dark:border-secondary/30 flex flex-col md:flex-row items-center justify-between text-sm text-secondary/70 dark:text-soft/70">
          <p className="text-center md:text-left mb-4 md:mb-0 uppercase max-w-lg leading-relaxed">
            © {CURRENT_YEAR}{" "}
            <span className="font-serif tracking-widest text-primary dark:text-highlight font-bold text-sm lg:text-md ml-1 mr-1">
              RIMBA
            </span>
            . All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="#"
              className="hover:text-primary dark:hover:text-highlight transition-colors duration-200"
            >
              {text.privacy}
            </Link>
            <Link
              to="#"
              className="hover:text-primary dark:hover:text-highlight transition-colors duration-200"
            >
              {text.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
