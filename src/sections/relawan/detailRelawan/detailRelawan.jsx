import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import volunteersData from "../../../datas/volunteers.json";

const ArrowLeftIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4 text-secondary dark:text-soft/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4 text-secondary dark:text-soft/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
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

const CheckCircleIcon = () => (
  <svg className="w-5 h-5 text-accent dark:text-highlight shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-highlight shrink-0 mt-0.5 fill-current" viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const DetailRelawan = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    domicile: "",
    motivation: "",
    agreement: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const item = volunteersData.find((v) => v.id === parseInt(id));

  if (!item) {
    return (
      <div className="py-24 text-center text-primary dark:text-soft">
        <h2 className="text-2xl font-serif font-bold mb-4">
          {currLang === "ID" ? "Aksi Relawan Tidak Ditemukan" : "Volunteer Action Not Found"}
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="text-secondary dark:text-highlight font-semibold hover:underline cursor-pointer"
        >
          {currLang === "ID" ? "← Kembali ke Daftar Aksi" : "← Back to Action List"}
        </button>
      </div>
    );
  }

  const rawContent =
    item.content?.[currLang] ||
    item.content?.ID ||
    item.desc?.[currLang] ||
    item.desc?.ID ||
    "";
  const contentParagraphs = rawContent.split("\n").filter((p) => p.trim() !== "");

  const requirementsList =
    item.requirements?.[currLang] || item.requirements?.ID || [];
  const benefitsList = item.benefits?.[currLang] || item.benefits?.ID || [];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.domicile) {
      setErrorMessage(
        currLang === "ID"
          ? "Mohon lengkapi semua kolom wajib bertanda bintang (*)"
          : "Please complete all mandatory fields (*)"
      );
      return;
    }
    if (!formData.agreement) {
      setErrorMessage(
        currLang === "ID"
          ? "Anda harus menyetujui komitmen relawan untuk melanjutkan."
          : "You must agree to the volunteer commitment to proceed."
      );
      return;
    }

    setErrorMessage("");
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      domicile: "",
      motivation: "",
      agreement: false,
    });
  };

  return (
    <>
      {/* TOMBOL KEMBALI */}
      <button
        onClick={() => navigate(-1)}
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
        <span>{currLang === "ID" ? "Kembali" : "Back"}</span>
      </button>

      {/* KATEGORI & STATUS KUOTA */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="inline-block px-3 py-1 bg-soft/30 dark:bg-light-dark text-secondary dark:text-highlight font-semibold text-xs rounded-full uppercase tracking-wider border border-soft/50 dark:border-secondary/40">
          {item.category?.[currLang] || item.category?.ID}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 dark:bg-highlight/15 text-primary dark:text-highlight font-semibold text-xs rounded-full uppercase tracking-wider">
          <UserGroupIcon />
          <span>{item.quota}</span>
        </span>
      </div>

      {/* JUDUL */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-serif font-bold text-primary dark:text-white mb-4 leading-tight">
        {item.title?.[currLang] || item.title?.ID}
      </h1>

      {/* ORGANIZER & META INFO */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 text-sm">
        <p className="font-semibold text-primary/80 dark:text-soft/80">
          {currLang === "ID" ? "Inisiator" : "Organizer"}:{" "}
          <span className="text-secondary dark:text-highlight">{item.organizer}</span>
        </p>

        <div className="flex items-center gap-2 text-xs text-secondary/70 dark:text-soft/70">
          <CalendarIcon />
          <span>{item.date}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-secondary/70 dark:text-soft/70">
          <ClockIcon />
          <span>{item.time}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-secondary/70 dark:text-soft/70">
          <MapPinIcon />
          <span>{item.location?.[currLang] || item.location?.ID}</span>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="overflow-hidden rounded-3xl mb-10 shadow-xl border border-soft/50 dark:border-secondary/40">
        <img
          src={item.image}
          alt={item.title?.[currLang] || item.title?.ID}
          className="w-full h-[280px] sm:h-[380px] md:h-[460px] object-cover"
        />
      </div>

      {/* KONTEN ARTIKEL / DESKRIPSI KEGIATAN */}
      <article className="prose prose-lg max-w-none text-justify text-primary/90 dark:text-soft/90 font-sans leading-relaxed space-y-6 mb-12">
        {contentParagraphs.map((paragraph, index) => (
          <p key={index} className="text-base md:text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </article>

      {/* SYARAT & FASILITAS GRID */}
      <div className="grid md:grid-cols-2 gap-6 mb-14">
        {/* Syarat & Ketentuan */}
        <div className="p-6 md:p-8 rounded-3xl border border-soft/60 dark:border-secondary/40 bg-soft/10 dark:bg-light-dark">
          <h3 className="font-serif font-bold text-lg text-primary dark:text-white mb-4">
            {currLang === "ID" ? "📋 Kriteria & Persyaratan" : "📋 Volunteer Requirements"}
          </h3>
          <ul className="space-y-3">
            {requirementsList.map((req, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-primary/80 dark:text-soft/85">
                <CheckCircleIcon />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fasilitas & Benefit */}
        <div className="p-6 md:p-8 rounded-3xl border border-soft/60 dark:border-secondary/40 bg-soft/10 dark:bg-light-dark">
          <h3 className="font-serif font-bold text-lg text-primary dark:text-white mb-4">
            {currLang === "ID" ? "🎁 Fasilitas & Apresiasi" : "🎁 Benefits & Support"}
          </h3>
          <ul className="space-y-3">
            {benefitsList.map((ben, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-primary/80 dark:text-soft/85">
                <StarIcon />
                <span>{ben}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FORMULIR PENDAFTARAN RELAWAN */}
      <section id="form-pendaftaran" className="scroll-mt-32">
        <div className="p-6 md:p-10 rounded-3xl border-2 border-accent/40 dark:border-highlight/30 bg-white dark:bg-light-dark shadow-xl">
          <div className="mb-8">
            <span className="inline-block text-xs font-bold tracking-widest text-secondary dark:text-highlight uppercase mb-2">
              {currLang === "ID" ? "Mari Terlibat Nyata" : "Get Involved"}
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary dark:text-white">
              {currLang === "ID"
                ? "Formulir Pendaftaran Relawan"
                : "Volunteer Registration Form"}
            </h2>
            <p className="text-sm text-primary/70 dark:text-soft/75 mt-2">
              {currLang === "ID"
                ? `Daftarkan diri Anda untuk berpartisipasi dalam aksi "${item.title?.ID}". Kuota terbatas!`
                : `Register yourself to participate in "${item.title?.EN}". Limited slots available!`}
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-secondary/10 dark:bg-highlight/10 border border-secondary/20 dark:border-highlight/30 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-secondary dark:bg-highlight text-white dark:text-dark mx-auto flex items-center justify-center text-2xl font-bold shadow-md">
                ✓
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary dark:text-white">
                {currLang === "ID"
                  ? "Pendaftaran Berhasil Dikirim!"
                  : "Registration Successfully Submitted!"}
              </h3>
              <p className="text-sm md:text-base text-primary/85 dark:text-soft/90 max-w-lg mx-auto leading-relaxed">
                {currLang === "ID"
                  ? `Terima kasih, ${formData.fullName}! Konfirmasi pendaftaran, petunjuk perlengkapan, dan undangan grup koordinasi telah dikirimkan ke ${formData.email} & WhatsApp (${formData.phone}).`
                  : `Thank you, ${formData.fullName}! Registration confirmation, gear instructions, and coordination group invite have been sent to ${formData.email} & WhatsApp (${formData.phone}).`}
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  onClick={handleResetForm}
                  className="px-6 py-2.5 rounded-full border border-primary dark:border-highlight text-primary dark:text-highlight hover:bg-primary hover:text-white dark:hover:bg-highlight dark:hover:text-dark text-sm font-semibold transition-colors duration-200 cursor-pointer"
                >
                  {currLang === "ID" ? "Daftar Relawan Lainnya" : "Register Another"}
                </button>
                <button
                  onClick={() => navigate("/aksi")}
                  className="px-6 py-2.5 rounded-full bg-primary text-white dark:bg-highlight dark:text-dark text-sm font-semibold hover:bg-secondary transition-colors duration-200 cursor-pointer"
                >
                  {currLang === "ID" ? "Kembali ke Beranda Aksi" : "Back to Action List"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm">
                  {errorMessage}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {/* Nama Lengkap */}
                <div>
                  <label className="block text-xs font-semibold text-primary dark:text-soft uppercase tracking-wider mb-2">
                    {currLang === "ID" ? "Nama Lengkap *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder={currLang === "ID" ? "Misal: Rian Pratama" : "e.g. John Doe"}
                    className="w-full px-4 py-3 rounded-xl border border-soft/80 dark:border-secondary/50 bg-soft/10 dark:bg-dark text-primary dark:text-white placeholder:text-primary/40 dark:placeholder:text-soft/40 focus:outline-hidden focus:border-accent dark:focus:border-highlight text-sm transition-colors duration-200"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-primary dark:text-soft uppercase tracking-wider mb-2">
                    {currLang === "ID" ? "Alamat Email *" : "Email Address *"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={currLang === "ID" ? "nama@domain.com" : "you@domain.com"}
                    className="w-full px-4 py-3 rounded-xl border border-soft/80 dark:border-secondary/50 bg-soft/10 dark:bg-dark text-primary dark:text-white placeholder:text-primary/40 dark:placeholder:text-soft/40 focus:outline-hidden focus:border-accent dark:focus:border-highlight text-sm transition-colors duration-200"
                    required
                  />
                </div>

                {/* Nomor WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-primary dark:text-soft uppercase tracking-wider mb-2">
                    {currLang === "ID" ? "Nomor WhatsApp (Aktif) *" : "WhatsApp Number *"}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="081234567890"
                    className="w-full px-4 py-3 rounded-xl border border-soft/80 dark:border-secondary/50 bg-soft/10 dark:bg-dark text-primary dark:text-white placeholder:text-primary/40 dark:placeholder:text-soft/40 focus:outline-hidden focus:border-accent dark:focus:border-highlight text-sm transition-colors duration-200"
                    required
                  />
                </div>

                {/* Kota Domisili */}
                <div>
                  <label className="block text-xs font-semibold text-primary dark:text-soft uppercase tracking-wider mb-2">
                    {currLang === "ID" ? "Kota Domisili Saat Ini *" : "City of Residence *"}
                  </label>
                  <input
                    type="text"
                    name="domicile"
                    value={formData.domicile}
                    onChange={handleInputChange}
                    placeholder={currLang === "ID" ? "Misal: Jakarta Selatan" : "e.g. Bandung"}
                    className="w-full px-4 py-3 rounded-xl border border-soft/80 dark:border-secondary/50 bg-soft/10 dark:bg-dark text-primary dark:text-white placeholder:text-primary/40 dark:placeholder:text-soft/40 focus:outline-hidden focus:border-accent dark:focus:border-highlight text-sm transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              {/* Motivasi & Pengalaman */}
              <div>
                <label className="block text-xs font-semibold text-primary dark:text-soft uppercase tracking-wider mb-2">
                  {currLang === "ID"
                    ? "Motivasi Bergabung & Pengalaman Lapangan (Opsional)"
                    : "Motivation & Field Experience (Optional)"}
                </label>
                <textarea
                  rows="4"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder={
                    currLang === "ID"
                      ? "Ceritakan secara singkat alasan ketertarikan Anda mengikuti aksi konservasi ini..."
                      : "Briefly share why you are eager to participate in this conservation action..."
                  }
                  className="w-full px-4 py-3 rounded-xl border border-soft/80 dark:border-secondary/50 bg-soft/10 dark:bg-dark text-primary dark:text-white placeholder:text-primary/40 dark:placeholder:text-soft/40 focus:outline-hidden focus:border-accent dark:focus:border-highlight text-sm transition-colors duration-200 resize-none"
                ></textarea>
              </div>

              {/* Checkbox Persetujuan Komitmen */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 rounded-sm border-soft text-primary focus:ring-accent cursor-pointer"
                  required
                />
                <label htmlFor="agreement" className="text-xs text-primary/80 dark:text-soft/85 leading-relaxed cursor-pointer">
                  {currLang === "ID"
                    ? "Saya menyatakan sehat jasmani, berkomitmen hadir tepat waktu pada tanggal kegiatan, dan siap mematuhi seluruh protokol keselamatan lapangan yayasan Rimba Nusantara."
                    : "I declare that I am physically fit, committed to attending on time on the event date, and ready to comply with all field safety protocols of Rimba Nusantara Foundation."}
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="
                    w-full sm:w-auto px-8 py-3.5
                    rounded-full
                    bg-primary dark:bg-highlight
                    text-white dark:text-dark
                    hover:bg-secondary dark:hover:bg-highlight/90
                    font-serif font-bold text-sm md:text-base
                    shadow-lg shadow-primary/20 dark:shadow-highlight/20
                    transition-all duration-300
                    cursor-pointer
                  "
                >
                  {currLang === "ID" ? "Kirim Pendaftaran Relawan →" : "Submit Volunteer Application →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default DetailRelawan;
