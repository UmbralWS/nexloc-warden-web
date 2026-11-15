import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroDemo } from "./components/HeroDemo";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { ContactForm } from "./components/ContactForm";

export const App: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("Warden Flotas");

  return (
    <>
      <div className="ambient-bg" aria-hidden="true" />
      <Navbar />
      <main>
        <HeroDemo />
        <Features />
        <Pricing onSelectPlan={setSelectedPlan} />
        <ContactForm selectedPlan={selectedPlan} />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>NEXLOC - WARDEN</strong> &bull; Telemetría GPS &amp;
            Inmovilización Segura
          </div>
          <div>&copy; {new Date().getFullYear()} Nexloc Warden. Todos los derechos reservados.</div>
        </div>
      </footer>
    </>
  );
};

export default App;

