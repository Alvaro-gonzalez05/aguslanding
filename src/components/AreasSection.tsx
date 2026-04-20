import Link from "next/link";

const areas = [
  { icon: "balance", title: "Derecho laboral - despidos", desc: "Asesoramiento y defensa en conflictos laborales, despidos sin causa, indemnizaciones, diferencias salariales, registración y resguardo integral de tus derechos como trabajador." },
  { icon: "healing", title: "ART - accidentes laborales - enfermedades profesionales", desc: "Reclamos ante ART por accidentes de trabajo, incapacidad, enfermedades profesionales, prestaciones médicas e indemnizaciones derivadas del daño sufrido." },
  { icon: "directions_car", title: "Daños y perjuicios - accidentes de tránsito", desc: "Reclamos por lesiones, incapacidad, gastos y demás consecuencias derivadas de accidentes viales, con seguimiento integral hasta la reparación correspondiente." },
  { icon: "health_and_safety", title: "Derecho de salud - amparos", desc: "Acciones urgentes para exigir cobertura médica, prestaciones, medicamentos y tratamientos cuando se vulnera tu derecho a la salud." },
  { icon: "family_restroom", title: "Derecho sucesorio", desc: "Acompañamiento en sucesiones, declaratorias de herederos, administración de bienes y resolución ordenada del proceso sucesorio." },
  { icon: "diversity_1", title: "Derecho de familia", desc: "Asistencia legal en conflictos familiares, divorcios, alimentos, régimen de comunicación, cuidado personal y protección de derechos del grupo familiar." },
];

export default function AreasSection() {
  return (
    <section className="pt-6 pb-14 md:pt-10 md:pb-24 bg-surface" id="areas">
      <div className="section-shell px-4 md:px-6 space-y-10">
        <div className="space-y-4 max-w-2xl reveal-soft" data-animate="section-heading">
          <span className="section-kicker font-label text-xs uppercase tracking-[0.3em] font-black">Áreas de práctica</span>
          <h2 className="font-headline text-2xl md:text-3xl leading-snug text-on-surface">Asistencia legal enfocada en tus derechos</h2>
          <p className="text-secondary text-base leading-relaxed">Atención profesional en conflictos de salud, trabajo, sucesiones y reclamos indemnizatorios, con una estrategia clara para cada caso.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {areas.map((area) => (
            <article key={area.title} className="area-card reveal-soft border border-outline-variant/30 p-6 flex flex-col" data-animate="area-card">
              <div className="area-icon">
                <span className="material-symbols-outlined">{area.icon}</span>
              </div>
              <h3 className="font-headline text-xl text-on-surface">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant flex-1">{area.desc}</p>
              <Link
                href="/areas"
                className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold tracking-wide text-[var(--accent-deep)] hover:text-[var(--accent-strong)] transition-colors duration-200"
              >
                Conocer más
                <span className="material-symbols-outlined text-base" style={{ fontSize: '18px' }}>arrow_forward</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
