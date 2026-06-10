"use client";

interface ContactBandProps {
  onConsultaOpen: () => void;
}

export default function ContactBand({ onConsultaOpen }: ContactBandProps) {
  return (
    <section className="bg-inverse-surface text-surface relative overflow-hidden py-24 md:py-32" id="contacto">
      <div className="sobre-star sobre-star--1" aria-hidden="true">★</div>
      <div className="sobre-star sobre-star--2" aria-hidden="true">★</div>
      <div className="section-shell px-4 md:px-6 text-center relative z-10">
        <span className="font-label text-[0.65rem] uppercase tracking-[0.35em] font-bold text-primary-fixed-dim/40 block mb-4">
          Consulta personalizada
        </span>
        <h2 className="font-headline font-bold uppercase leading-[0.92] text-surface mb-6" style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)", letterSpacing: "-0.04em" }}>
          ¿HABLAMOS<br />DE TU CASO?
        </h2>
        <p className="mx-auto max-w-xl text-sm md:text-base leading-relaxed text-surface-variant/60 mb-9">
          Si necesitás orientación sobre salud, trabajo, sucesiones o un reclamo por daños, un primer contacto claro puede ordenar todo el caso.
        </p>
        <button type="button" onClick={onConsultaOpen} className="sobre-cta-btn">
          Agendar consulta
          <span className="material-symbols-outlined text-base ml-2" style={{ fontSize: 18 }}>arrow_forward</span>
        </button>
      </div>
    </section>
  );
}
