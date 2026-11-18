import DetailRelawan from "../../sections/relawan/detailRelawan/detailRelawan";
import SidebarRelawan from "../../sections/relawan/detailRelawan/sidebarRelawan";

function DetailRelawanView() {
  return (
    <main className="bg-white dark:bg-dark min-h-screen pt-28 pb-20 px-5 md:px-10 xl:px-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <DetailRelawan />
        </div>
        <div className="lg:col-span-1">
          <SidebarRelawan />
        </div>
      </div>
    </main>
  );
}

export default DetailRelawanView;
