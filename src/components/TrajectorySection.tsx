import Image from "next/image";

export default function TrajectorySection() {
  return (
    <section className="relative z-10 py-14 md:py-24 space-y-12" id="trayectoria">
      <div className="section-shell px-4 md:px-6 space-y-12">
        <div className="space-y-4 max-w-2xl reveal-soft" data-animate="section-heading">
          <span className="section-kicker font-label text-xs uppercase tracking-[0.3em] font-black">Nuestra trayectoria</span>
          <h2 className="font-headline text-2xl md:text-3xl leading-snug text-on-surface">Experiencia jurídica con mirada estratégica</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,34rem)_minmax(0,1fr)] lg:items-center">
          <div className="trajectory-visual aspect-[4/5] sm:aspect-[5/4] lg:aspect-[3/4] reveal-soft -mb-8 md:-mb-20 lg:-mb-24" data-animate="trajectory-media">
            <div className="trajectory-statue-glow"></div>
            <div className="trajectory-base-shadow"></div>
            <div className="trajectory-base-glow"></div>
            <div className="trajectory-sheen"></div>
            <div className="trajectory-reflect"></div>
            <Image alt="Estatua de la justicia en bronce" className="trajectory-statue" src="/imagenes/estatua-transparente.png" fill sizes="(max-width: 1024px) 100vw, 34rem" />
          </div>
          <div className="rounded-[1.5rem] border border-outline-variant/25 bg-surface-container-lowest p-6 shadow-xl md:p-8 reveal-soft" data-animate="trajectory-copy">
            <p className="text-on-surface-variant italic font-serif text-lg leading-relaxed md:text-xl">
              &ldquo;Mi compromiso es ofrecer una defensa clara, humana y rigurosa, enfocada en proteger tus intereses con seriedad y convicción.&rdquo;
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-surface-container-low p-4">
                <p className="text-xs font-label font-bold uppercase tracking-[0.2em] text-primary">Atención personalizada</p>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">Cada caso se analiza de forma individual, con estrategia legal adaptada a tu situación.</p>
              </div>
              <div className="rounded-xl bg-surface-container-low p-4">
                <p className="text-xs font-label font-bold uppercase tracking-[0.2em] text-primary">Seguimiento cercano</p>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">Comunicación clara durante todo el proceso, para que sepas cada paso que se da.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
