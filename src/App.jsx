import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/navbar/navbar";
import Home from "./views/home/index";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
