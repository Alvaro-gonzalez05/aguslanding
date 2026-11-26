"use client";

import Image from "next/image";
import Icon from "@/components/Icon";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onConsultaOpen?: () => void;
}

export default function MobileDrawer({ isOpen, onClose, onConsultaOpen }: MobileDrawerProps) {
  return (
    <>
      <div
        className={`mobile-drawer-overlay${isOpen ? " is-open" : ""}`}
        onClick={onClose}
      />
      <aside className={`mobile-drawer md:hidden${isOpen ? " is-open" : ""}`}>
        <div className="mobile-drawer__header">
          <div className="brand-logo" style={{ width: 110 }}>
            <Image alt="AGV" className="brand-logo__image" src="/logo-agv-header.svg" width={110} height={30} style={{ filter: "none" }} />
          </div>
          <button type="button" onClick={onClose} aria-label="Cerrar menú">
            <Icon name="close" className="text-secondary text-[26px]" />
          </button>
        </div>
        <div className="mobile-drawer__links">
          <a className="mobile-drawer__link" href="/" onClick={onClose}><Icon name="account_balance" />Inicio</a>
          <a className="mobile-drawer__link" href="/areas" onClick={onClose}><Icon name="gavel" />Áreas de práctica</a>
          <a className="mobile-drawer__link" href="/#trayectoria" onClick={onClose}><Icon name="menu_book" />Trayectoria</a>
          <a className="mobile-drawer__link" href="/sobre_mi" onClick={onClose}><Icon name="person" />Sobre mí</a>
          <a className="mobile-drawer__link" href="/#contacto" onClick={onClose}><Icon name="mail" />Contacto</a>
        </div>
        <div className="mobile-drawer__cta">
          <button className="gold-gradient inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-center font-label text-xs font-bold uppercase tracking-[0.14em] text-on-primary" onClick={() => { onClose(); onConsultaOpen?.(); }} type="button">Agendar consulta</button>
        </div>
      </aside>
    </>
  );
}
