"use client";

import { createContext, useContext, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBand from "@/components/ContactBand";
import MobileDrawer from "@/components/MobileDrawer";
import ConsultationModal from "@/components/ConsultationModal";
import WhatsAppFab from "@/components/WhatsAppFab";

// Estructura común de las páginas por área. El contenido llega desde un
// Server Component (children) para que se renderice como HTML estático;
// acá solo vive el estado del menú y del modal de consulta.

const ConsultaContext = createContext<() => void>(() => {});

export function ConsultaButton({ className, children }: { className?: string; children: React.ReactNode }) {
  const open = useContext(ConsultaContext);
  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}

export default function AreaShell({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [consultaOpen, setConsultaOpen] = useState(false);
  const openConsulta = () => setConsultaOpen(true);

  return (
    <ConsultaContext.Provider value={openConsulta}>
      <Header onMenuOpen={() => setDrawerOpen(true)} onConsultaOpen={openConsulta} />
      <main>{children}</main>
      <ContactBand onConsultaOpen={openConsulta} />
      <Footer />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} onConsultaOpen={openConsulta} />
      <ConsultationModal isOpen={consultaOpen} onClose={() => setConsultaOpen(false)} />
      <WhatsAppFab onConsultaOpen={openConsulta} />
    </ConsultaContext.Provider>
  );
}
