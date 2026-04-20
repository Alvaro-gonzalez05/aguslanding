"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AreasSection from "@/components/AreasSection";
import ConsultationForm from "@/components/ConsultationForm";
import TrajectorySection from "@/components/TrajectorySection";
import StatsSection from "@/components/StatsSection";
import ProfileSection from "@/components/ProfileSection";
import ContactBand from "@/components/ContactBand";
import Footer from "@/components/Footer";
import MobileDrawer from "@/components/MobileDrawer";
import ConsultationModal from "@/components/ConsultationModal";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [consultaOpen, setConsultaOpen] = useState(false);
  useGSAPAnimations();

  return (
    <>
      <Header onMenuOpen={() => setDrawerOpen(true)} onConsultaOpen={() => setConsultaOpen(true)} />
      <main>
        <HeroSlider />
        <AreasSection />
        <ConsultationForm />
        <TrajectorySection />
        <StatsSection />
        <ProfileSection />
        <ContactBand />
      </main>
      <Footer />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} onConsultaOpen={() => setConsultaOpen(true)} />
      <ConsultationModal isOpen={consultaOpen} onClose={() => setConsultaOpen(false)} />
    </>
  );
}
