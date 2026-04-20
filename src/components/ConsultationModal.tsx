"use client";

import { useCallback, useEffect } from "react";

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

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const area = (formData.get("area") || "").toString().trim();
    const name = (formData.get("name") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
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
    lines.push("", "Consulta:", message);

    const whatsappUrl = `https://wa.me/542616399640?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener");
    onClose();
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="consultation-modal-overlay" onClick={onClose}>
      <div className="consultation-modal" onClick={(e) => e.stopPropagation()}>
        <button className="consultation-modal__close" onClick={onClose} type="button" aria-label="Cerrar">
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="space-y-4 mb-6">
          <span className="section-kicker font-label text-xs uppercase tracking-[0.3em] font-black">Consulta inicial</span>
          <h2 className="font-headline text-xl md:text-2xl leading-snug text-on-surface">
            Enviá tu consulta por WhatsApp
          </h2>
        </div>

        <form className="consultation-form" onSubmit={handleSubmit}>
          <div className="consultation-field">
            <label className="font-label text-xs font-bold uppercase tracking-[0.18em] text-primary" htmlFor="modal-area">Área legal</label>
            <select className="consultation-select" id="modal-area" name="area" required>
              <option value="">Seleccionar área</option>
              {areaOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="consultation-field">
              <label className="font-label text-xs font-bold uppercase tracking-[0.18em] text-primary" htmlFor="modal-name">Nombre y apellido</label>
              <input className="consultation-input" id="modal-name" name="name" placeholder="Ej.: María Pérez" required type="text" />
            </div>
            <div className="consultation-field">
              <label className="font-label text-xs font-bold uppercase tracking-[0.18em] text-primary" htmlFor="modal-phone">Teléfono</label>
              <input className="consultation-input" id="modal-phone" name="phone" placeholder="Ej.: 261 000 0000" type="tel" />
            </div>
          </div>
          <div className="consultation-field">
            <label className="font-label text-xs font-bold uppercase tracking-[0.18em] text-primary" htmlFor="modal-message">Tu consulta</label>
            <textarea className="consultation-textarea" id="modal-message" name="message" placeholder="Describí brevemente lo que necesitás resolver." required style={{ minHeight: "7rem" }}></textarea>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button className="gold-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-center font-label text-xs font-bold uppercase tracking-[0.18em] text-on-primary" type="submit">
              Enviar por WhatsApp
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-outline-variant px-6 py-3 text-center font-label text-xs font-semibold uppercase tracking-[0.18em] text-secondary" type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
