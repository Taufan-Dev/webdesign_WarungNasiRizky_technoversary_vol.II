import { useParams, useNavigate } from "react-router-dom";
import animalsData from "../../../datas/animals.json";
import { useLanguage } from "../../../context/LanguageContext";

const ArrowLeftIcon = () => (
  <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const LeafIcon = () => (
  <svg className="w-5 h-5 text-secondary dark:text-highlight" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5 text-secondary dark:text-highlight" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-5 h-5 text-secondary dark:text-highlight" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
  </svg>
);

const DetailIlmuan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  const animal = animalsData.find((item) => item.id === parseInt(id));

  const content = {
    ID: {
      back: "Kembali ke Daftar Satwa Endemik",
      notFound: "Satwa Tidak Ditemukan",
      era: "Habitat & Sebaran",
      about: "Profil & Karakteristik Satwa",
      contributions: "Peran Ekologis & Fungsi Alam",
      works: "Fakta Konservasi & Keunikan",
      fields: "Klasifikasi & Status",
      scientificName: "Nama Ilmiah / Taksonomi",
      statusIUCN: "Status Konservasi IUCN",
    },
    EN: {
      back: "Back to Endemic Wildlife List",
      notFound: "Wildlife Not Found",
      era: "Habitat & Range",
      about: "Wildlife Profile & Traits",
      contributions: "Ecological Roles & Biodiversity",
      works: "Conservation Facts & Uniqueness",
      fields: "Classification & Status",
      scientificName: "Scientific Taxonomy Name",
      statusIUCN: "IUCN Conservation Status",
    },
  };

  const currentContent = content[currLang];

  if (!animal) {
    return (
      <section className="bg-white dark:bg-dark min-h-screen text-primary dark:text-soft transition-colors duration-500 pt-32 pb-24 px-5 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">{currentContent.notFound}</h2>
        <button
          onClick={() => navigate("/satwa")}
          className="text-secondary dark:text-highlight font-semibold hover:underline cursor-pointer"
        >
          ← {currentContent.back}
        </button>
      </section>
    );
  }

  const textData = animal[currLang] || animal.ID;

  return (
    <section className="bg-white dark:bg-dark min-h-screen text-primary dark:text-soft transition-colors duration-500 pb-24">
      {/* Tombol Back */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-20 pt-32 pb-8">
        <button
          onClick={() => navigate("/satwa")}
          className="flex items-center gap-2 text-secondary dark:text-soft/80 hover:text-primary dark:hover:text-highlight transition-colors font-medium group cursor-pointer text-sm"
        >
          <ArrowLeftIcon />
          <span>{currentContent.back}</span>
        </button>
      </div>

      {/* Main Grid: Split Screen Layout */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* === KIRI: STICKY PROFILE === */}
        <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-32 space-y-6 flex flex-col">
          {/* Foto Profile Besar */}
          <div className="w-full aspect-4/5 rounded-3xl overflow-hidden shadow-2xl relative border-2 border-soft/60 dark:border-secondary/40 group">
            <img
              src={animal.image}
              alt={animal.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />

            {/* Nama di Atas Gambar */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-highlight font-bold tracking-widest uppercase text-xs mb-1 block">
                {animal.era}
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif font-black text-white leading-tight">
                {animal.name}
              </h1>
              <p className="text-soft/90 italic text-xs mt-1">
                {animal.scientificName}
              </p>
            </div>
          </div>

          {/* Kartu Info Tambahan (Era & Fields) */}
          <div className="bg-soft/10 dark:bg-light-dark p-6 rounded-3xl shadow-lg border border-soft/50 dark:border-secondary/40 space-y-5">
            <div>
              <p className="text-xs font-semibold text-secondary/70 dark:text-soft/70 uppercase tracking-widest mb-1">
                {currentContent.scientificName}
              </p>
              <p className="text-base font-serif font-bold text-primary dark:text-white">
                {animal.fullName}
              </p>
            </div>

            <hr className="border-soft/40 dark:border-secondary/30" />

            <div>
              <p className="text-xs font-semibold text-secondary/70 dark:text-soft/70 uppercase tracking-widest mb-1">
                {currentContent.statusIUCN}
              </p>
              <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-highlight/15 text-primary dark:text-highlight text-xs font-bold rounded-full mt-1">
                {textData.status || animal.status}
              </span>
            </div>

            <hr className="border-soft/40 dark:border-secondary/30" />

            <div>
              <p className="text-xs font-semibold text-secondary/70 dark:text-soft/70 uppercase tracking-widest mb-2 flex items-center gap-2">
                <LeafIcon />
                <span>{currentContent.fields}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {textData.fields?.map((field, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-soft/30 dark:bg-dark text-secondary dark:text-highlight border border-soft/50 dark:border-secondary/40"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === KANAN: SCROLLABLE CONTENT === */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-10 pt-0 lg:pt-2">
          {/* Section: Biografi / Karakteristik Singkat */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary dark:text-white flex items-center gap-3">
              <LeafIcon /> {currentContent.about}
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-primary/80 dark:text-soft/90 leading-relaxed text-justify space-y-4">
              <p className="text-lg md:text-xl font-serif italic text-primary dark:text-highlight leading-relaxed border-l-4 border-secondary dark:border-highlight pl-5 py-1">
                "{textData.shortDescription}"
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                {textData.about}
              </p>
            </div>
          </div>

          <hr className="border-soft/40 dark:border-secondary/30" />

          {/* Section: Peran Ekologis */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary dark:text-white flex items-center gap-3">
              <ShieldIcon /> {currentContent.contributions}
            </h2>
            <ul className="space-y-4">
              {textData.contributions?.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start group">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-secondary/10 dark:bg-highlight/15 flex items-center justify-center text-secondary dark:text-highlight font-bold group-hover:bg-primary group-hover:text-white dark:group-hover:bg-highlight dark:group-hover:text-dark transition-colors mt-0.5 text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-base md:text-lg text-primary/80 dark:text-soft/90 leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-soft/40 dark:border-secondary/30" />

          {/* Section: Fakta Menarik & Konservasi */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary dark:text-white flex items-center gap-3">
              <SparklesIcon /> {currentContent.works}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {textData.works?.map((work, idx) => (
                <div
                  key={idx}
                  className="bg-soft/10 dark:bg-light-dark p-5 rounded-2xl border border-soft/50 dark:border-secondary/30 shadow-sm hover:border-accent dark:hover:border-highlight transition-all flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 dark:bg-highlight/10 flex items-center justify-center shrink-0 mt-0.5">
                    <SparklesIcon />
                  </div>
                  <p className="font-sans font-medium text-primary/85 dark:text-soft/90 text-sm leading-relaxed">
                    {work}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailIlmuan;
