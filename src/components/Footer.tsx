import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-16 border-t border-outline-variant/30 bg-white px-6 pt-10 pb-8 text-on-surface" id="contacto">
      <div className="section-shell flex flex-col gap-6" data-animate="footer-block">
        {/* Top row: logo + copyright left, contact links + CODEA right */}
        <div className="flex flex-col items-center text-center gap-6 md:flex-row md:items-start md:justify-between md:text-left md:gap-4">
          <div className="flex flex-col items-center md:items-start">
            <div className="brand-logo" style={{ width: "min(200px, 48vw)" }}>
              <Image alt="Agustina Gonzalez Vicario" className="brand-logo__image" src="/logo-agv-footer.svg" width={200} height={52} />
            </div>
            <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-secondary mt-2">© 2026 Agustina Gonzalez Vicario.</p>
          </div>
          <div className="flex flex-col items-center gap-6 md:items-end md:gap-8">
            <div className="flex flex-wrap justify-center items-center gap-3 text-[10px] font-sans tracking-[0.2em] uppercase text-secondary">
              <a className="rounded-full border border-outline-variant/30 px-4 py-2 hover:border-primary/50 hover:text-primary transition-colors" href="/">Inicio</a>
              <a className="rounded-full border border-outline-variant/30 px-4 py-2 hover:border-primary/50 hover:text-primary transition-colors" href="/areas">Áreas</a>
              <a className="rounded-full border border-outline-variant/30 px-4 py-2 hover:border-primary/50 hover:text-primary transition-colors" href="/sobre_mi">Sobre mí</a>
              <a className="rounded-full border border-outline-variant/30 px-4 py-2 hover:border-primary/50 hover:text-primary transition-colors" href="https://wa.me/542616399640" target="_blank" rel="noreferrer">WhatsApp</a>
              <a className="rounded-full border border-outline-variant/30 px-4 py-2 hover:border-primary/50 hover:text-primary transition-colors" href="https://www.google.com/maps/search/?api=1&query=Loria+Oeste+165+Godoy+Cruz+Mendoza" target="_blank" rel="noreferrer">Ubicación</a>
            </div>
            <a
              href="https://www.codeadesarrollos.com"
              target="_blank"
              rel="noreferrer"
              className="block font-black text-[clamp(3.5rem,10vw,7rem)] leading-none tracking-[-0.04em] uppercase text-on-surface/[0.06] hover:text-on-surface/[0.12] transition-colors select-none"
              style={{ fontFamily: "var(--font-body, 'Manrope', sans-serif)" }}
            >
              CODEA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
