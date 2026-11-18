import { useState } from "react";
import Hero from "../../sections/hewan/hero/hero";
import CardList from "../../sections/hewan/card/card";

function SatwaView() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-white dark:bg-dark transition-colors duration-500">
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CardList searchQuery={searchQuery} />
    </main>
  );
}

export default SatwaView;
