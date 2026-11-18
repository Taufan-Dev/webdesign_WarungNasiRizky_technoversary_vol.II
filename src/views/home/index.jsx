import HeroSection from "../../sections/home/heroSections";
import AboutSection from "../../sections/home/aboutSections/";
import ListArtikel from "../../sections/home/listArtikel/listArtikel";
import TantanganPlasticFree from "../../sections/home/tantangan";
import CTA from "../../sections/home/cta";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ListArtikel />
      <TantanganPlasticFree />
      <CTA />
    </>
  );
}

export default Home;
