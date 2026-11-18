import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import reservesData from "../../datas/reserves.json";
import { useLanguage } from "../../context/LanguageContext";

const InteractiveMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const navigate = useNavigate();
  const [isExplored, setIsExplored] = useState(false);
  const { language = "ID" } = useLanguage() || {};
  const currLang = language === "EN" ? "EN" : "ID";

  useEffect(() => {
    if (!mapRef.current) return;

    // Inisialisasi peta hanya sekali
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
    }

    // Default center di kepulauan Indonesia
    const map = L.map(mapRef.current, {
      center: [-2.5, 118],
      zoom: 5,
      minZoom: 4,
      maxZoom: 16,
      zoomControl: false,
    });

    mapInstanceRef.current = map;

    // Zoom control di pojok kanan bawah seperti di referensi
    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);

    // Basemaps BEBAS API KEY & TANPA WATERMARK
    // 1. Esri World Street Map (Tampilan bersih pastel, 100% bebas watermark)
    const streetLayer = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          '&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Conservation Geospatial Data',
        maxZoom: 18,
      }
    );

    // 2. Citra Satelit Asli Esri (Hutan hijau & perairan tropis Nusantara)
    const satelliteLayer = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          '&copy; <a href="https://www.esri.com/">Esri</a>, Earthstar Geographics',
        maxZoom: 18,
      }
    );

    // 3. OpenStreetMap (Open Source Universal)
    const osmLayer = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }
    );

    // Set default basemap
    streetLayer.addTo(map);

    // Layer Switcher di pojok kanan atas
    const baseMaps = {
      [currLang === "ID" ? "🗺️ Peta Standar" : "🗺️ Standard Map"]: streetLayer,
      [currLang === "ID" ? "🛰️ Citra Satelit" : "🛰️ Satellite View"]: satelliteLayer,
      [currLang === "ID" ? "🌍 OpenStreetMap" : "🌍 OpenStreetMap"]: osmLayer,
    };

    L.control
      .layers(baseMaps, null, {
        position: "topright",
      })
      .addTo(map);

    // Tambahkan Custom Marker DivIcon dengan foto thumbnail untuk setiap cagar alam
    reservesData.forEach((item) => {
      const title = item.name[currLang] || item.name.ID;
      const desc = item.shortDesc[currLang] || item.shortDesc.ID;
      const category = item.category[currLang] || item.category.ID;
      const btnText = currLang === "ID" ? "Baca Selengkapnya" : "Read More";

      // HTML custom pin dengan foto bulat-kotak (polaroid style) + panah penunjuk
      const customMarkerHtml = `
        <div class="rimba-map-marker group">
          <div class="marker-thumb-box">
            <img 
              src="${item.image}" 
              alt="${title}" 
              class="marker-thumb-img" 
              onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600'"
            />
          </div>
          <div class="marker-pin-tip"></div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: "rimba-div-icon",
        html: customMarkerHtml,
        iconSize: [52, 60],
        iconAnchor: [26, 60],
        popupAnchor: [0, -62],
      });

      // Popup Content Card persis seperti di screenshot referensi
      const popupHtml = `
        <div class="rimba-popup-card">
          <div class="popup-image-wrapper">
            <img 
              src="${item.image}" 
              alt="${title}" 
              class="popup-img" 
              onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600'"
            />
            <span class="popup-category">${category}</span>
          </div>
          <div class="popup-content">
            <h4 class="popup-title">${title}</h4>
            <p class="popup-desc">${desc}</p>
            <button class="popup-btn" data-url="/maps/${item.id}">
              ${btnText}
            </button>
          </div>
        </div>
      `;

      const marker = L.marker(item.coordinates, { icon: customIcon }).addTo(map);
      marker.bindPopup(popupHtml, {
        maxWidth: 290,
        minWidth: 260,
        className: "rimba-leaflet-popup",
      });
    });

    // Event listener untuk tombol "Baca Selengkapnya" di dalam popup Leaflet
    const handlePopupOpen = (e) => {
      const popupEl = e.popup.getElement();
      if (!popupEl) return;
      const btn = popupEl.querySelector(".popup-btn");
      if (btn) {
        btn.onclick = (evt) => {
          evt.preventDefault();
          const targetUrl = btn.getAttribute("data-url");
          if (targetUrl) {
            navigate(targetUrl);
          }
        };
      }
    };

    map.on("popupopen", handlePopupOpen);

    return () => {
      map.off("popupopen", handlePopupOpen);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [currLang, navigate]);

  return (
    <div className="relative w-full h-[620px] md:h-[720px] rounded-3xl overflow-hidden shadow-2xl border border-soft/60 dark:border-secondary/40">
      <div ref={mapRef} className="w-full h-full z-0" />

      {/* OVERLAY OPACITY PUTIH: "GESER DAN KETUK UNTUK EKSPLORASI" */}
      <div
        onClick={() => setIsExplored(true)}
        className={`
          absolute inset-0 z-[1000]
          bg-white/80 dark:bg-dark/85 backdrop-blur-[3px]
          flex flex-col items-center justify-center p-6 text-center
          cursor-pointer transition-all duration-700 select-none
          ${
            isExplored
              ? "opacity-0 pointer-events-none scale-105"
              : "opacity-100 pointer-events-auto scale-100"
          }
        `}
      >
        <div className="w-16 h-16 rounded-full bg-secondary/10 dark:bg-highlight/15 border-2 border-secondary/30 dark:border-highlight/30 flex items-center justify-center mb-4 shadow-lg animate-pulse">
          <span className="text-2xl">👆</span>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-primary dark:text-white mb-2 tracking-tight">
          {currLang === "ID"
            ? "Geser dan Ketuk untuk Eksplorasi"
            : "Swipe and Tap to Explore"}
        </h3>

        <p className="text-xs sm:text-sm text-primary/75 dark:text-soft/85 max-w-sm mb-6 leading-relaxed">
          {currLang === "ID"
            ? "Sentuh atau klik layar ini untuk mulai menjelajahi peta kawasan konservasi Nusantara."
            : "Tap or click here to start exploring Indonesia's conservation reserves on the interactive map."}
        </p>

        <span className="px-6 py-2.5 rounded-full bg-secondary dark:bg-highlight text-white dark:text-dark text-xs sm:text-sm font-semibold shadow-lg shadow-secondary/20 dark:shadow-highlight/20 hover:scale-105 transition-transform duration-200">
          {currLang === "ID" ? "Mulai Eksplorasi →" : "Start Exploring →"}
        </span>
      </div>

      {/* FLOATING HINT PILL KECIL SETELAH EKSPLORASI AKTIF */}
      {isExplored && (
        <div className="absolute bottom-5 left-5 z-[500] pointer-events-none hidden sm:block">
          <div className="bg-white/95 dark:bg-dark/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-soft/80 dark:border-secondary/40 shadow-xl text-primary dark:text-soft text-xs font-semibold flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary dark:bg-highlight animate-pulse" />
            <span>
              {currLang === "ID"
                ? "Geser dan ketuk pin foto untuk eksplorasi"
                : "Drag and tap photo pins to explore"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
