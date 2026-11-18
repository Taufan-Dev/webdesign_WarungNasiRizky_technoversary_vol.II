import ArticleDetail from "../../sections/artikel/detailArtikel/detailArtikel";
import ArticleSidebar from "../../sections/artikel/detailArtikel/sideBarAritikel";

function DetailArtikelView() {
  return (
    <main className="bg-white dark:bg-dark min-h-screen pt-28 pb-20 px-5 md:px-10 xl:px-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <ArticleDetail />
        </div>
        <div className="lg:col-span-1">
          <ArticleSidebar />
        </div>
      </div>
    </main>
  );
}

export default DetailArtikelView;
