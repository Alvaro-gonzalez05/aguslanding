export default function ServiceCard() {
  return (
    <section className="px-6 py-12 bg-surface">
      <div className="section-shell reveal-soft" data-animate="service-card">
        <div className="bg-surface-container-low p-4 md:p-8 rounded-[1.5rem] flex flex-col items-center text-center space-y-4 border border-outline-variant/10 shadow-[0_16px_40px_rgba(53,86,102,0.06)]">
          <span className="material-symbols-outlined text-primary text-4xl">history_toggle_off</span>
          <h2 className="font-headline text-2xl text-on-surface">Atención 24/7</h2>
          <p className="text-secondary text-sm leading-relaxed max-w-xs">
            Sé que las urgencias legales no esperan. Por eso ofrezco acompañamiento ágil y respuesta clara cuando más lo necesitas.
          </p>
          <div className="w-12 h-0.5 bg-primary/30"></div>
          <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Disponibilidad inmediata</span>
        </div>
      </div>
    </section>
  );
}
