import RelawanHero from "../../sections/relawan/relawanHero";
import RelawanMedia from "../../sections/relawan/relawanMedia";
import RelawanList from "../../sections/relawan/relawanList";
import RelawanPagination from "../../sections/relawan/relawanPagination";
import RelawanSidebar from "../../sections/relawan/relawanSidebar";

function RelawanView() {
  return (
    <main className="bg-white dark:bg-dark min-h-screen pt-28 pb-20 px-5 md:px-10 xl:px-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* TOP HERO & MEDIA ROW */}
        <div className="grid xl:grid-cols-4 gap-6 items-stretch">
          <RelawanHero />
          <RelawanMedia />
        </div>

        {/* MAIN CONTENT & SIDEBAR ROW */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <RelawanList />
            <RelawanPagination />
          </div>
          <div className="lg:col-span-1">
            <RelawanSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default RelawanView;
