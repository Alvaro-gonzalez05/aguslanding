"use client";

const items = [
  {
    icon: "bolt",
    title: "Respuesta inmediata",
    desc: "Presentamos el amparo de forma urgente. En casos críticos, los jueces pueden ordenar medidas cautelares en horas para garantizar el acceso al tratamiento.",
  },
  {
    icon: "health_and_safety",
    title: "Cobertura integral",
    desc: "Medicamentos de alto costo, cirugías, terapias, internaciones y toda prestación que una obra social, prepaga o el Estado niegue injustamente.",
  },
  {
    icon: "task_alt",
    title: "Alta tasa de éxito",
    desc: "El amparo de salud es una herramienta judicial efectiva. La mayoría de los casos logran resolución favorable cuando se presentan correctamente.",
  },
];

const chips = ["Obras sociales", "Prepagas", "Medicamentos", "Cirugías", "Terapias", "Prótesis"];

export default function TrajectorySection() {
  return (
    <section className="amparo-section" id="trayectoria">
      <div className="section-shell px-4 md:px-6">
        <div className="amparo-grid">

          {/* Left: heading + text */}
          <div className="amparo-left" data-animate="section-heading">
            <span className="amparo-kicker">Especialidad principal</span>
            <h2 className="amparo-heading">
              Amparos<br />de Salud
            </h2>
            <p className="amparo-body">
              Cuando una obra social, prepaga o el Estado te niega el acceso a un tratamiento, medicamento o cirugía, existe una acción legal urgente para obligarlos a cumplir.
            </p>
            <div className="amparo-chips">
              {chips.map((c) => (
                <span key={c} className="amparo-chip">{c}</span>
              ))}
            </div>
          </div>

          {/* Right: feature cards */}
          <div className="amparo-cards-col">
            {items.map((item) => (
              <div key={item.title} className="amparo-card">
                <div className="amparo-card-icon">
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
                </div>
                <div>
                  <p className="amparo-card-title">{item.title}</p>
                  <p className="amparo-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
