"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileDrawer from "@/components/MobileDrawer";
import ConsultationModal from "@/components/ConsultationModal";
import { useSobreMiAnimations } from "@/hooks/useSobreMiAnimations";

const values = [
  { icon: "balance", label: "Compromiso", desc: "Cada caso recibe dedicación plena desde el primer contacto." },
  { icon: "verified", label: "Responsabilidad", desc: "Claridad y transparencia en cada etapa del proceso legal." },
  { icon: "favorite", label: "Empatía", desc: "Acompañamiento cercano entendiendo la situación personal de cada cliente." },
  { icon: "lightbulb", label: "Soluciones eficaces", desc: "Búsqueda constante de la estrategia más adecuada para cada caso." },
];

const specialties = [
  { icon: "balance", label: "Derecho laboral", sub: "Despidos · Reclamos ART" },
  { icon: "family_restroom", label: "Derecho de familia", sub: "Divorcios · Alimentos" },
  { icon: "directions_car", label: "Daños y perjuicios", sub: "Accidentes de tránsito" },
  { icon: "family_restroom", label: "Derecho sucesorio", sub: "Sucesiones · Herencias" },
];

export default function SobreMiPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [consultaOpen, setConsultaOpen] = useState(false);
  useSobreMiAnimations();

  return (
    <>
      <Header onMenuOpen={() => setDrawerOpen(true)} onConsultaOpen={() => setConsultaOpen(true)} />
      <main data-header-transparent>

        {/* ── HERO ── */}
        <section className="sobre-hero bg-inverse-surface text-surface relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="sobre-star sobre-star--1" aria-hidden="true">★</div>
          <div className="sobre-star sobre-star--2" aria-hidden="true">★</div>
          <div className="sobre-star sobre-star--3" aria-hidden="true">★</div>

          <div className="section-shell px-4 md:px-6 relative z-10">
            <div className="sobre-hero__grid">

              {/* Text side */}
              <div className="sobre-hero__copy" data-animate="sobre-copy">
                <span className="font-label text-[0.65rem] uppercase tracking-[0.35em] font-bold text-primary-fixed-dim/40 block mb-4">
                  Abogada · Mendoza, Argentina
                </span>
                <h1 className="sobre-hero__title font-headline uppercase font-bold">
                  SOBRE<br />MÍ
                </h1>
                <p className="mt-6 text-sm md:text-base leading-relaxed text-surface-variant/60 uppercase tracking-wide max-w-lg">
                  Soy Agustina Elin González Vicario, abogada egresada de la Universidad Champagnat, con amplia experiencia en el asesoramiento y la representación legal de personas en distintas áreas del derecho.
                </p>
                <button
                  onClick={() => setConsultaOpen(true)}
                  className="sobre-cta-btn mt-8"
                  type="button"
                >
                  Agendar consulta
                  <span className="material-symbols-outlined text-base ml-2" style={{ fontSize: 18 }}>arrow_forward</span>
                </button>
              </div>

              {/* Photo side */}
              <div className="sobre-hero__photo-wrap" data-animate="sobre-photo">
                <div className="sobre-photo-card">
                  <div className="sobre-photo-inner">
                    <Image
                      src="/imagenes/abogada.jpeg"
                      alt="Agustina Elin González Vicario — Abogada"
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover object-top"
                      priority
                    />
                    <div className="sobre-photo-overlay" />
                  </div>
                  {/* Floating badge */}
                  <div className="sobre-badge" data-animate="sobre-badge">
                    <span className="material-symbols-outlined text-[var(--accent-strong)] text-xl">verified</span>
                    <span className="text-[0.65rem] uppercase tracking-[0.18em] font-bold text-on-surface">Matrícula activa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BIO EXTENDED ── */}
        <section className="bg-inverse-surface text-surface py-20 md:py-28 border-t border-white/[0.05]">
          <div className="section-shell px-4 md:px-6">
            <div className="sobre-bio-grid">

              {/* Left: quote/kicker */}
              <div className="sobre-bio__left" data-animate="sobre-bio-left">
                <span className="font-label text-[0.6rem] uppercase tracking-[0.3em] font-bold text-primary-fixed-dim/30 block mb-3">
                  Trayectoria
                </span>
                <p className="sobre-pullquote font-headline">
                  "Cada cliente atraviesa situaciones personales complejas — el acompañamiento cercano marca la diferencia."
                </p>
              </div>

              {/* Right: paragraphs */}
              <div className="sobre-bio__right space-y-5" data-animate="sobre-bio-right">
                <p className="text-sm md:text-base leading-relaxed text-surface-variant/60 uppercase tracking-wide">
                  A lo largo de mi ejercicio profesional me he especializado en derecho laboral —incluyendo despidos y reclamos ante ART—, sucesiones, daños y perjuicios derivados de accidentes de tránsito, y derecho de familia, abarcando procesos de divorcio y fijación de cuotas alimentarias.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-surface-variant/60 uppercase tracking-wide">
                  Mi forma de trabajar se basa en el compromiso, la responsabilidad y la búsqueda constante de soluciones eficaces para cada caso. Entiendo que cada cliente atraviesa situaciones personales complejas, por lo que considero fundamental brindar un acompañamiento cercano, con empatía, claridad y transparencia en cada etapa del proceso.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-surface-variant/60 uppercase tracking-wide">
                  Ofrezco un servicio jurídico personalizado, enfocado no solo en la resolución legal, sino también en la contención y orientación necesaria para transitar cada situación con seguridad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALORES ── */}
        <section className="bg-inverse-surface text-surface py-20 md:py-28 border-t border-white/[0.05]">
          <div className="section-shell px-4 md:px-6">
            <div className="mb-12 md:mb-16" data-animate="sobre-values-heading">
              <span className="font-label text-[0.65rem] uppercase tracking-[0.35em] font-bold text-primary-fixed-dim/30 block mb-3">
                Valores
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase leading-none text-surface" style={{ letterSpacing: '-0.03em' }}>
                MI FORMA<br />DE TRABAJAR
              </h2>
            </div>
            <div className="sobre-values-grid">
              {values.map((v, i) => (
                <div key={v.label} className="sobre-value-card" data-animate="sobre-value" data-index={i}>
                  <div className="sobre-value-icon">
                    <span className="material-symbols-outlined text-2xl text-[var(--accent-strong)]">{v.icon}</span>
                  </div>
                  <h3 className="font-headline text-xl md:text-2xl font-bold uppercase text-surface mt-4" style={{ letterSpacing: '-0.02em' }}>
                    {v.label}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed text-surface-variant/50 uppercase tracking-wide mt-3">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ESPECIALIDADES ── */}
        <section className="bg-inverse-surface text-surface py-20 md:py-28 border-t border-white/[0.05]">
          <div className="section-shell px-4 md:px-6">
            <div className="mb-12 md:mb-16" data-animate="sobre-spec-heading">
              <span className="font-label text-[0.65rem] uppercase tracking-[0.35em] font-bold text-primary-fixed-dim/30 block mb-3">
                Especialidades
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase leading-none text-surface" style={{ letterSpacing: '-0.03em' }}>
                ÁREAS DE<br />PRÁCTICA
              </h2>
            </div>
            <div className="sobre-spec-list">
              {specialties.map((s, i) => (
                <div key={s.label} className="sobre-spec-item" data-animate="sobre-spec" data-index={i}>
                  <span className="sobre-spec-number font-headline">0{i + 1}</span>
                  <div className="flex-1">
                    <h3 className="font-headline text-xl md:text-3xl font-bold uppercase text-surface" style={{ letterSpacing: '-0.02em' }}>{s.label}</h3>
                    <p className="text-xs text-surface-variant/40 uppercase tracking-[0.2em] mt-1">{s.sub}</p>
                  </div>
                  <span className="material-symbols-outlined text-surface-variant/20 text-3xl">{s.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-inverse-surface text-surface py-20 md:py-28 border-t border-white/[0.05]" data-animate="sobre-cta">
          <div className="section-shell px-4 md:px-6 text-center">
            <span className="font-label text-[0.65rem] uppercase tracking-[0.35em] font-bold text-primary-fixed-dim/30 block mb-4">
              Contacto
            </span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold uppercase leading-none text-surface mb-8" style={{ letterSpacing: '-0.04em' }}>
              ¿HABLAMOS<br />DE TU CASO?
            </h2>
            <button
              onClick={() => setConsultaOpen(true)}
              className="sobre-cta-btn"
              type="button"
            >
              Agendar consulta
              <span className="material-symbols-outlined text-base ml-2" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
          </div>
        </section>

      </main>
      <Footer />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} onConsultaOpen={() => setConsultaOpen(true)} />
      <ConsultationModal isOpen={consultaOpen} onClose={() => setConsultaOpen(false)} />
    </>
  );
}
