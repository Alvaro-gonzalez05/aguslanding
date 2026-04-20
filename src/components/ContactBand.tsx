export default function ContactBand() {
  return (
    <section className="px-6 py-6 bg-surface">
      <div className="section-shell px-4 md:px-6">
        <div className="contact-band reveal-soft px-6 py-8 text-center md:px-10 md:py-10" data-animate="footer-block">
          <p className="section-kicker font-label text-xs font-black uppercase tracking-[0.28em]">Consulta personalizada</p>
          <h2 className="mt-3 font-headline text-2xl md:text-3xl leading-tight text-on-surface lg:text-4xl">Un primer contacto claro puede ordenar todo el caso</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-on-surface-variant md:text-base">
            Si necesitas orientación sobre salud, trabajo, sucesiones o un reclamo por daños, podés escribir por WhatsApp para coordinar una consulta.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a className="gold-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-center font-label text-xs font-bold uppercase tracking-[0.18em] text-on-primary" href="#consulta">Escribir por WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
