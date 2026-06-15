"use client";

interface ContactBandProps {
  onConsultaOpen: () => void;
}

export default function ContactBand({ onConsultaOpen }: ContactBandProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: "#5b768e" }} id="contacto">
      <div className="section-shell px-4 md:px-6 text-center relative z-10">
        <span className="font-label text-[0.65rem] uppercase tracking-[0.3em] font-semibold block mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
          Consulta personalizada
        </span>
        <h2 className="mb-5" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontStyle: "italic", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.95)" }}>
          ¿Hablamos<br />de tu caso?
        </h2>
        <p className="mx-auto max-w-lg text-sm leading-relaxed mb-9" style={{ color: "rgba(255,255,255,0.6)" }}>
          Si necesitás orientación sobre salud, trabajo, sucesiones o un reclamo por daños, un primer contacto claro puede ordenar todo el caso.
        </p>
        <button type="button" onClick={onConsultaOpen} className="contact-cta-btn">
          Agendar consulta
          <span className="material-symbols-outlined ml-2" style={{ fontSize: 17 }}>arrow_forward</span>
        </button>
      </div>
    </section>
  );
}
