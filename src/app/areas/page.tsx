"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileDrawer from "@/components/MobileDrawer";
import ConsultationModal from "@/components/ConsultationModal";
import { useAreasAnimations } from "@/hooks/useAreasAnimations";

const areas = [
  {
    icon: "balance",
    title: "Derecho laboral y despidos",
    subtitle: "LABORAL",
    image: "/imagenes/area-laboral.jpg",
    paragraphs: [
      "Defensa integral en conflictos laborales: despidos sin causa o con causa injustificada, diferencias salariales, horas extras impagas, falta de registración y todo tipo de irregularidades en la relación de trabajo.",
      "Se analizan las condiciones de cada caso para determinar la mejor estrategia: negociación, mediación o demanda judicial. El objetivo es proteger tus derechos como trabajador y obtener la indemnización o reparación que corresponda según la ley.",
      "Asesoramiento previo al despido, durante el proceso y hasta la resolución definitiva, con seguimiento personalizado en cada instancia."
    ],
  },
  {
    icon: "healing",
    title: "ART, accidentes laborales y enfermedades profesionales",
    subtitle: "ART",
    image: "/imagenes/area-art.jpg",
    paragraphs: [
      "Reclamos frente a Aseguradoras de Riesgos del Trabajo por accidentes ocurridos en el ámbito laboral o in itinere, enfermedades profesionales y toda incapacidad derivada de las condiciones de trabajo.",
      "Se gestionan las prestaciones médicas, dinerarias y por incapacidad que la ART debe otorgar, y en caso de incumplimiento, se inicia la vía judicial para exigir la reparación integral del daño sufrido.",
      "Incluye pericias médicas, determinación del grado de incapacidad, reclamos por alta prematura y todo lo vinculado al sistema de riesgos del trabajo."
    ],
  },
  {
    icon: "directions_car",
    title: "Daños y perjuicios por accidentes de tránsito",
    subtitle: "TRÁNSITO",
    image: "/imagenes/area-transito.jpg",
    paragraphs: [
      "Reclamos por lesiones físicas, daño moral, incapacidad sobreviniente, gastos médicos y toda consecuencia derivada de accidentes de tránsito, tanto como conductor, pasajero o peatón.",
      "Se trabaja con compañías de seguros para obtener una indemnización justa y, en caso de negativa o demora, se promueve la acción judicial correspondiente con el respaldo probatorio necesario.",
      "Seguimiento integral del caso: desde el siniestro hasta el cobro efectivo de la indemnización, con intervención en pericias, mediaciones y audiencias."
    ],
  },
  {
    icon: "health_and_safety",
    title: "Derecho de salud y amparos",
    subtitle: "SALUD",
    image: "/imagenes/area-salud.jpg",
    paragraphs: [
      "Acciones de amparo contra obras sociales y prepagas que niegan o demoran coberturas médicas, tratamientos, cirugías, medicamentos, prótesis y prestaciones esenciales.",
      "El amparo es una herramienta judicial urgente que permite obtener una orden del juez en días, obligando a la entidad de salud a cumplir con su obligación de cobertura.",
      "Se trabaja con urgencia y compromiso en cada caso, priorizando la salud del paciente y el acceso efectivo a los tratamientos que necesita."
    ],
  },
  {
    icon: "family_restroom",
    title: "Derecho sucesorio",
    subtitle: "SUCESIONES",
    image: "/imagenes/area-sucesiones.jpg",
    paragraphs: [
      "Tramitación completa de sucesiones: inicio del proceso, declaratoria de herederos, inventario de bienes, inscripción registral y partición de la herencia.",
      "Asesoramiento en conflictos entre herederos, impugnación de testamentos, legítimas afectadas, cesión de derechos hereditarios y administración judicial de bienes.",
      "Cada caso se aborda con sensibilidad y eficiencia, buscando resolver el proceso sucesorio en el menor tiempo posible y sin complicaciones innecesarias."
    ],
  },
  {
    icon: "diversity_1",
    title: "Derecho de familia",
    subtitle: "FAMILIA",
    image: "/imagenes/area-familia.jpg",
    paragraphs: [
      "Asistencia legal en divorcios, convenios reguladores, régimen de comunicación con hijos, cuidado personal, alimentos y todo lo vinculado a conflictos dentro del grupo familiar.",
      "Se prioriza la resolución consensuada cuando es posible, y se actúa con firmeza en sede judicial cuando las circunstancias lo requieren, siempre protegiendo los derechos de las partes.",
      "Intervención en medidas cautelares, restricciones de acercamiento, compensaciones económicas y cuestiones patrimoniales derivadas de la disolución del vínculo."
    ],
  },
];

export default function AreasPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [consultaOpen, setConsultaOpen] = useState(false);
  useAreasAnimations();

  return (
    <>
      <Header onMenuOpen={() => setDrawerOpen(true)} onConsultaOpen={() => setConsultaOpen(true)} />
      <main data-header-transparent>
        {/* ── Hero Section ── */}
        <section className="areas-hero bg-inverse-surface text-surface relative overflow-hidden">
          <div className="section-shell px-4 md:px-6 relative z-10 flex flex-col items-center text-center py-32 md:py-44">
            <span className="font-label text-xs uppercase tracking-[0.35em] font-bold text-primary-fixed-dim/60 mb-4" data-animate="areas-kicker">
              Agustina Gonzalez Vicario
            </span>
            <h1 className="areas-hero-title font-headline" data-animate="areas-title">
              ÁREAS DE<br />PRÁCTICA
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-surface-variant/70 max-w-xl" data-animate="areas-subtitle">
              Conocé en detalle cada una de las especialidades en las que brindo asesoramiento y representación legal.
            </p>
          </div>
          {/* Decorative stars */}
          <div className="areas-star areas-star--1" aria-hidden="true">★</div>
          <div className="areas-star areas-star--2" aria-hidden="true">★</div>
          <div className="areas-star areas-star--3" aria-hidden="true">★</div>
          <div className="areas-star areas-star--4" aria-hidden="true">★</div>
        </section>

        {/* ── Area Blocks ── */}
        <section className="bg-inverse-surface text-surface pb-24 md:pb-32">
          <div className="section-shell px-4 md:px-6">
            {areas.map((area, i) => {
              const isEven = i % 2 === 0;
              return (
                <article
                  key={area.title}
                  className="area-block"
                  data-animate="area-block"
                  data-direction={isEven ? "left" : "right"}
                >
                  <div className={`area-block__grid ${isEven ? "" : "area-block__grid--reversed"}`}>
                    {/* Copy side */}
                    <div className="area-block__copy">
                      <span className="area-block__kicker font-label text-[0.65rem] uppercase tracking-[0.3em] font-bold text-primary-fixed-dim/30">
                        {area.subtitle}
                      </span>
                      <h2 className="area-block__title font-headline leading-[0.95] text-surface mt-2 uppercase font-bold"
                          style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)', letterSpacing: '-0.03em' }}>
                        {area.title}
                      </h2>
                      <div className="area-block__text mt-6 md:mt-8 space-y-4">
                        {area.paragraphs.map((p, j) => (
                          <p key={j} className="text-xs md:text-sm leading-relaxed text-surface-variant/50 uppercase tracking-wide">
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Image side */}
                    <div className="area-block__image-wrap">
                      <div className={`area-block__card ${isEven ? "area-block__card--tilt-right" : "area-block__card--tilt-left"}`}>
                        <div className="area-block__card-inner">
                          <div className="area-block__image-placeholder">
                            <span className="material-symbols-outlined text-5xl text-surface-variant/20">{area.icon}</span>
                            <span className="text-[0.65rem] text-surface-variant/20 mt-3 uppercase tracking-[0.2em]">
                              Imagen de {area.subtitle}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative star between blocks */}
                  {i < areas.length - 1 && (
                    <div className="flex justify-center my-16 md:my-24">
                      <span className="text-[4rem] md:text-[6rem] text-white/[0.04] leading-none select-none" aria-hidden="true">★</span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} onConsultaOpen={() => setConsultaOpen(true)} />
      <ConsultationModal isOpen={consultaOpen} onClose={() => setConsultaOpen(false)} />
    </>
  );
}
