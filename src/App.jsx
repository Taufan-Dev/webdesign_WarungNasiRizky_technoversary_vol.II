import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import Navbar from "./components/navbar/navbar";
import Home from "./views/home/index";
import ArtikelView from "./views/artikel/index";
import DetailArtikelView from "./views/artikel/detail";
import RelawanView from "./views/relawan/index";
import DetailRelawanView from "./views/relawan/detail";
import SatwaView from "./views/hewan/index";
import DetailSatwaView from "./views/hewan/detail";
import MapsView from "./views/maps/index";
import DetailMapView from "./views/maps/detail";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artikel" element={<ArtikelView />} />
          <Route path="/artikel/:id" element={<DetailArtikelView />} />
          <Route path="/aksi" element={<RelawanView />} />
          <Route path="/aksi/:id" element={<DetailRelawanView />} />
          <Route path="/relawan" element={<RelawanView />} />
          <Route path="/relawan/:id" element={<DetailRelawanView />} />
          <Route path="/satwa" element={<SatwaView />} />
          <Route path="/satwa/:id" element={<DetailSatwaView />} />
          <Route path="/maps" element={<MapsView />} />
          <Route path="/maps/:id" element={<DetailMapView />} />
          <Route path="/kawasan" element={<MapsView />} />
          <Route path="/kawasan/:id" element={<DetailMapView />} />
          <Route path="/hewan" element={<SatwaView />} />
          <Route path="/hewan/:id" element={<DetailSatwaView />} />
          <Route path="/ilmuan" element={<SatwaView />} />
          <Route path="/ilmuan/:id" element={<DetailSatwaView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
