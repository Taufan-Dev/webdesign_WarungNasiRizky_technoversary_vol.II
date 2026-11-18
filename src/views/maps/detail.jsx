import { useParams, useNavigate, Link } from "react-router-dom";
import reservesData from "../../datas/reserves.json";
import { useLanguage } from "../../context/LanguageContext";
import Panorama360 from "../../sections/maps/panorama360";

const ArrowLeftIcon = () => (
  <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const CompassIcon = () => (
  <svg className="w-4 h-4 text-secondary dark:text-highlight shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-5 h-5 text-secondary dark:text-highlight shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-5 h-5 text-highlight shrink-0 mt-0.5 fill-current" viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

function DetailMapView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  const reserve = reservesData.find((item) => item.id === parseInt(id));

  if (!reserve) {
    return (
      <main className="min-h-screen bg-white dark:bg-dark pt-32 pb-20 px-5 text-center text-primary dark:text-soft">
        <h2 className="text-2xl font-serif font-bold mb-4">
          {currLang === "ID" ? "Kawasan Tidak Ditemukan" : "Reserve Not Found"}
        </h2>
        <button
          onClick={() => navigate("/maps")}
          className="text-secondary dark:text-highlight font-semibold hover:underline cursor-pointer"
        >
          {currLang === "ID" ? "← Kembali ke Peta" : "← Back to Map"}
        </button>
      </main>
    );
  }

  const title = reserve.name[currLang] || reserve.name.ID;
  const region = reserve.region[currLang] || reserve.region.ID;
  const category = reserve.category[currLang] || reserve.category.ID;
  const fullDesc = reserve.fullDesc[currLang] || reserve.fullDesc.ID;
  const highlights = reserve.highlights[currLang] || reserve.highlights.ID;
  const guidelines = reserve.guidelines[currLang] || reserve.guidelines.ID;

  return (
    <main className="min-h-screen bg-white dark:bg-dark pt-28 pb-24 px-5 md:px-10 xl:px-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* TOMBOL KEMBALI */}
        <button
          onClick={() => navigate("/maps")}
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
          <span>{currLang === "ID" ? "Kembali ke Peta Kawasan" : "Back to Reserves Map"}</span>
        </button>

        {/* HEADER KAWASAN */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-block px-3 py-1 bg-soft/30 dark:bg-light-dark text-secondary dark:text-highlight font-semibold text-xs rounded-full uppercase tracking-wider border border-soft/50 dark:border-secondary/40">
              {category}
            </span>
            <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-highlight/15 text-primary dark:text-highlight font-semibold text-xs rounded-full uppercase tracking-wider">
              {reserve.area}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-white leading-tight mb-2">
            {title}
          </h1>

          <p className="text-secondary dark:text-highlight font-medium text-sm md:text-base">
            📍 {region}
          </p>
        </div>

        {/* INTERACTIVE 360° PANORAMA VIEWER */}
        <div className="mb-12">
          <Panorama360 panoramaUrl={reserve.panorama} title={title} />
        </div>

        {/* QUICK FACTS METRICS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-soft/10 dark:bg-light-dark border border-soft/50 dark:border-secondary/40">
            <p className="text-xs uppercase tracking-wider text-secondary/70 dark:text-soft/70 font-semibold mb-1">
              {currLang === "ID" ? "Luas Wilayah" : "Total Area"}
            </p>
            <p className="text-lg font-bold text-primary dark:text-white">
              {reserve.area}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-soft/10 dark:bg-light-dark border border-soft/50 dark:border-secondary/40">
            <p className="text-xs uppercase tracking-wider text-secondary/70 dark:text-soft/70 font-semibold mb-1">
              {currLang === "ID" ? "Tahun Penetapan" : "Established"}
            </p>
            <p className="text-lg font-bold text-primary dark:text-white">
              {reserve.established}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-soft/10 dark:bg-light-dark border border-soft/50 dark:border-secondary/40">
            <p className="text-xs uppercase tracking-wider text-secondary/70 dark:text-soft/70 font-semibold mb-1">
              {currLang === "ID" ? "Ketinggian" : "Elevation"}
            </p>
            <p className="text-lg font-bold text-primary dark:text-white">
              {reserve.elevation}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-soft/10 dark:bg-light-dark border border-soft/50 dark:border-secondary/40">
            <p className="text-xs uppercase tracking-wider text-secondary/70 dark:text-soft/70 font-semibold mb-1">
              {currLang === "ID" ? "Titik Koordinat" : "Coordinates"}
            </p>
            <p className="text-sm font-mono font-bold text-primary dark:text-white">
              {reserve.coordinates[0].toFixed(2)}°, {reserve.coordinates[1].toFixed(2)}°
            </p>
          </div>
        </div>

        {/* CONTENT SPLIT: DESKRIPSI UTAMA & HIGHLIGHTS */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          {/* KOLOM KIRI: DESKRIPSI & HIGHLIGHTS (8 COL) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Deskripsi Lengkap */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary dark:text-white mb-4">
                {currLang === "ID" ? "Tentang Kawasan Konservasi" : "About the Nature Reserve"}
              </h2>
              <p className="text-base md:text-lg text-primary/85 dark:text-soft/90 leading-relaxed text-justify">
                {fullDesc}
              </p>
            </div>

            {/* Daya Tarik Utama */}
            <div>
              <h3 className="text-xl font-serif font-bold text-primary dark:text-white mb-5 flex items-center gap-2">
                <SparklesIcon />
                <span>{currLang === "ID" ? "Daya Tarik & Lanskap Utama" : "Key Highlights & Landscapes"}</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-soft/10 dark:bg-light-dark border border-soft/50 dark:border-secondary/30 flex items-start gap-3"
                  >
                    <CompassIcon />
                    <p className="text-sm text-primary/80 dark:text-soft/85 leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pedoman Kunjungan Bertanggung Jawab */}
            <div className="p-6 md:p-8 rounded-3xl border border-secondary/20 dark:border-secondary/40 bg-secondary/5 dark:bg-light-dark">
              <h3 className="text-xl font-serif font-bold text-primary dark:text-white mb-4 flex items-center gap-2">
                <ShieldCheckIcon />
                <span>{currLang === "ID" ? "Pedoman Bertamu Ramah Lingkungan" : "Responsible Visitor Code"}</span>
              </h3>
              <ul className="space-y-3">
                {guidelines.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-primary/80 dark:text-soft/85">
                    <span className="w-5 h-5 rounded-full bg-secondary text-white dark:bg-highlight dark:text-dark flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* KOLOM KANAN: SATWA KUNCI & AKSI RELAWAN (4 COL) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Kartu Satwa Kunci */}
            <div className="p-6 rounded-3xl bg-white dark:bg-light-dark border border-soft/60 dark:border-secondary/40 shadow-lg">
              <h3 className="font-serif font-bold text-lg text-primary dark:text-white mb-4">
                {currLang === "ID" ? "🐾 Satwa Kunci Kawasan" : "🐾 Key Regional Fauna"}
              </h3>
              <div className="space-y-2.5">
                {reserve.keySpecies.map((sp, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-soft/10 dark:bg-dark border border-soft/40 dark:border-secondary/30 text-xs sm:text-sm font-medium text-primary dark:text-soft flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-secondary dark:bg-highlight"></span>
                    <span>{sp}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-soft/40 dark:border-secondary/30">
                <Link
                  to="/satwa"
                  className="inline-block text-xs font-bold text-secondary dark:text-highlight hover:underline"
                >
                  {currLang === "ID" ? "Jelajahi Ensiklopedia Satwa →" : "Explore Endemic Species →"}
                </Link>
              </div>
            </div>

            {/* Banner Aksi Konservasi */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-primary to-secondary text-white shadow-xl">
              <span className="text-[10px] font-bold tracking-widest uppercase text-highlight mb-1 block">
                {currLang === "ID" ? "Terjun Langsung" : "Take Action"}
              </span>
              <h4 className="font-serif font-bold text-lg mb-2">
                {currLang === "ID" ? "Ikut Aksi Konservasi Rimba" : "Join Rimba Conservation Action"}
              </h4>
              <p className="text-xs text-soft/90 leading-relaxed mb-5">
                {currLang === "ID"
                  ? "Daftarkan dirimu dalam program penanaman pohon, restorasi terumbu karang, dan aksi perlindungan flora & fauna."
                  : "Sign up for mangrove planting, coral reef restorations, and wild fauna preservation field actions."}
              </p>
              <Link
                to="/aksi"
                className="inline-block px-5 py-2.5 rounded-full bg-highlight text-dark text-xs font-bold hover:bg-white transition-colors duration-200"
              >
                {currLang === "ID" ? "Lihat Jadwal Relawan →" : "View Volunteer Schedule →"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DetailMapView;
