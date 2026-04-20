import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="py-14 md:py-24 bg-surface-container-low" id="perfil">
      <div className="section-shell px-4 md:px-6">
        <div className="mb-12 space-y-4 reveal-soft" data-animate="section-heading">
          <span className="section-kicker font-label text-xs uppercase tracking-[0.3em] font-black">Perfil profesional</span>
          <h2 className="font-headline text-2xl md:text-3xl text-on-surface">Agustina Gonzalez Vicario</h2>
        </div>
        <div className="profile-grid">
          <div className="group reveal-soft" data-animate="profile-photo">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-lg sm:aspect-[4/5]">
              <Image
                alt="Agustina Gonzalez Vicario en sala judicial"
                className="profile-portrait w-full h-full object-cover transition-all duration-700"
                src="/imagenes/imagenabogada.jpeg"
                fill
                sizes="(max-width: 768px) 100vw, 23rem"
              />
              <div className="profile-portrait-overlay"></div>
              <div className="absolute bottom-0 w-full bg-secondary-container/90 backdrop-blur-sm px-6 py-4">
                <h3 className="font-headline text-xl text-on-surface">Agustina Gonzalez Vicario</h3>
                <p className="text-primary text-xs font-label uppercase tracking-wider">Abogada</p>
              </div>
            </div>
          </div>
          <div className="profile-summary flex flex-col justify-center reveal-soft" data-animate="profile-copy">
            <p className="text-xs font-label font-bold uppercase tracking-[0.25em] text-primary">Enfoque profesional</p>
            <h3 className="mt-3 font-headline text-2xl md:text-3xl leading-snug text-on-surface">Asistencia jurídica clara, cercana y estratégica</h3>
            <p className="mt-5 text-base leading-relaxed text-on-surface-variant">
              Trabajo cada consulta con compromiso personal, priorizando una comunicación directa, análisis riguroso y soluciones concretas para conflictos de salud, trabajo, sucesiones y responsabilidad civil.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-surface-container-lowest p-4">
                <p className="text-xs font-label font-bold uppercase tracking-[0.18em] text-primary">Criterio jurídico</p>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">Estrategias precisas según el tipo de reclamo y el momento procesal.</p>
              </div>
              <div className="rounded-xl bg-surface-container-lowest p-4">
                <p className="text-xs font-label font-bold uppercase tracking-[0.18em] text-primary">Acompañamiento real</p>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">Seguimiento cercano para que cada decisión se tome con información clara.</p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="gold-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-center font-label text-xs font-bold uppercase tracking-[0.18em] text-on-primary" href="#consulta">Solicitar consulta</a>
              <a className="inline-flex items-center justify-center rounded-full border border-primary/35 px-6 py-3 text-center font-label text-xs font-semibold uppercase tracking-[0.18em] text-primary" href="#areas">Ver especialidades</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
