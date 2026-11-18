import ArtikelHero from "../../sections/artikel/artikelHero";
import ArtikelVideo from "../../sections/artikel/artikelVidio";
import ArtikelList from "../../sections/artikel/artikelList";
import ArtikelPagination from "../../sections/artikel/artikelPagination";
import ArtikelSidebar from "../../sections/artikel/artikelSidebar";

function ArtikelView() {
  return (
    <main className="bg-white dark:bg-dark min-h-screen pt-28 pb-20 px-5 md:px-10 xl:px-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* TOP HERO & VIDEO ROW */}
        <div className="grid xl:grid-cols-4 gap-6 items-stretch">
          <ArtikelHero />
          <ArtikelVideo />
        </div>

        {/* MAIN CONTENT & SIDEBAR ROW */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <ArtikelList />
            <ArtikelPagination />
          </div>
          <div className="lg:col-span-1">
            <ArtikelSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ArtikelView;
