"use client";

import { useCallback } from "react";

const areaOptions = [
  "Amparos de salud",
  "Derecho laboral",
  "Despidos",
  "Enfermedades profesionales",
  "Accidentes de trabajo",
  "Derecho sucesorio",
  "Daños y perjuicios por accidentes de tránsito",
  "Otra consulta",
];

export default function ConsultationForm() {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const area = (formData.get("area") || "").toString().trim();
    const name = (formData.get("name") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    if (!area || !name || !message) {
      form.reportValidity();
      return;
    }

    const lines = [
      "Hola Agustina, quiero hacer una consulta legal.",
      "",
      `Area: ${area}`,
      `Nombre: ${name}`,
    ];
    if (phone) lines.push(`Telefono: ${phone}`);
    if (email) lines.push(`Correo: ${email}`);
    lines.push("", "Consulta:", message);

    const whatsappUrl = `https://wa.me/542616399640?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener");
  }, []);

  return (
    <section className="py-14 md:py-24 bg-surface-container-low" id="consulta">
      <div className="section-shell px-4 md:px-6">
        <div className="consultation-panel p-6 md:p-10 reveal-soft" data-animate="footer-block">
          <div className="grid gap-6 md:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="space-y-5">
              <span className="section-kicker font-label text-xs uppercase tracking-[0.3em] font-black">Consulta inicial</span>
              <h2 className="font-headline text-2xl md:text-3xl leading-snug text-on-surface lg:text-4xl">
                Contame tu caso y prepará el mensaje para WhatsApp desde la misma página
              </h2>
              <p className="text-base leading-relaxed text-on-surface-variant">
                Elegí el área, dejá un resumen de lo que necesitás y se abrirá WhatsApp con la consulta ya ordenada para enviar. Así el primer contacto llega con contexto y se puede responder más rápido.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="consultation-pill"><span className="material-symbols-outlined text-[17px]">chat</span>WhatsApp directo</span>
                <span className="consultation-pill"><span className="material-symbols-outlined text-[17px]">inventory_2</span>Consulta ordenada</span>
                <span className="consultation-pill"><span className="material-symbols-outlined text-[17px]">schedule</span>Respuesta ágil</span>
              </div>
              <p className="consultation-note">Campos mínimos: área, nombre y breve descripción. Si querés, podés sumar teléfono y correo para facilitar el seguimiento.</p>
            </div>
            <form className="consultation-form" onSubmit={handleSubmit}>
              <div className="consultation-field">
                <label className="font-label text-xs font-bold uppercase tracking-[0.18em] text-primary" htmlFor="consultation-area">Área legal</label>
                <select className="consultation-select" id="consultation-area" name="area" required>
                  <option value="">Seleccionar área</option>
                  {areaOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="consultation-field">
                  <label className="font-label text-xs font-bold uppercase tracking-[0.18em] text-primary" htmlFor="consultation-name">Nombre y apellido</label>
                  <input className="consultation-input" id="consultation-name" name="name" placeholder="Ej.: María Pérez" required type="text" />
                </div>
                <div className="consultation-field">
                  <label className="font-label text-xs font-bold uppercase tracking-[0.18em] text-primary" htmlFor="consultation-phone">Teléfono</label>
                  <input className="consultation-input" id="consultation-phone" name="phone" placeholder="Ej.: 261 000 0000" type="tel" />
                </div>
              </div>
              <div className="consultation-field">
                <label className="font-label text-xs font-bold uppercase tracking-[0.18em] text-primary" htmlFor="consultation-email">Correo electrónico</label>
                <input className="consultation-input" id="consultation-email" name="email" placeholder="Ej.: nombre@email.com" type="email" />
              </div>
              <div className="consultation-field">
                <label className="font-label text-xs font-bold uppercase tracking-[0.18em] text-primary" htmlFor="consultation-message">Contame brevemente tu consulta</label>
                <textarea className="consultation-textarea" id="consultation-message" name="message" placeholder="Describí lo ocurrido, desde cuándo sucede y qué necesitás resolver." required></textarea>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button className="gold-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-center font-label text-xs font-bold uppercase tracking-[0.18em] text-on-primary" type="submit">
                  Enviar por WhatsApp
                </button>
                <a className="inline-flex items-center justify-center rounded-full border border-primary/35 bg-white/75 px-6 py-3 text-center font-label text-xs font-semibold uppercase tracking-[0.18em] text-primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=agustinagonzalezvicario@gmail.com" target="_blank" rel="noreferrer">
                  Enviar correo
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
