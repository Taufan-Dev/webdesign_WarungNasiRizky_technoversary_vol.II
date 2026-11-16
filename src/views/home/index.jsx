import HeroSection from "../../sections/home/heroSections";
import AboutSection from "../../sections/home/aboutSections/";
import ListArtikel from "../../sections/home/listArtikel/listArtikel";
import CTA from "../../sections/home/cta";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ListArtikel />
      <CTA />
    </>
  );
}

export default Home;
