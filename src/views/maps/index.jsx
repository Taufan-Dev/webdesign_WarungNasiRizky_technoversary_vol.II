import { useState } from "react";
import MapHeader from "../../sections/maps/mapHeader";
import InteractiveMap from "../../sections/maps/interactiveMap";
import ReservesList from "../../sections/maps/reservesList";

function MapsView() {
  const [activeTab, setActiveTab] = useState("map");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-white dark:bg-dark pt-28 pb-24 px-5 md:px-10 xl:px-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* HEADER & TAB TOGGLE */}
        <MapHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* VIEW CONDITIONAL: PETA INTERAKTIF ATAU DAFTAR KAWASAN */}
        {activeTab === "map" ? (
          <InteractiveMap />
        ) : (
          <ReservesList searchQuery={searchQuery} />
        )}
      </div>
    </main>
  );
}

export default MapsView;
