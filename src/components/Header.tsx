"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function Header({ onMenuOpen, onConsultaOpen }: { onMenuOpen: () => void; onConsultaOpen?: () => void }) {
  const headerRef = useRef<HTMLElement>(null);

  const updateHeaderState = useCallback(() => {
    const header = headerRef.current;
    if (!header) return;

    const currentScrollY = window.scrollY;

    /* Check if we're over a dark section (hero on home, or full-dark pages like /areas) */
    const heroSection = document.getElementById("inicio");
    const darkPage = document.querySelector("[data-header-transparent]");

    let isOverDark = false;
    if (heroSection) {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      isOverDark = currentScrollY < heroBottom - 80;
    } else if (darkPage) {
      isOverDark = true;
    }

    const isNearTop = currentScrollY < 24;

    if (isOverDark) {
      header.classList.remove("header-solid");
    } else {
      header.classList.add("header-solid");
    }

    const lastY = Number(header.dataset.lastY || "0");
    const scrollDelta = currentScrollY - lastY;

    if (isNearTop || scrollDelta < -6) {
      header.classList.remove("header-hidden");
    } else if (scrollDelta > 8 && currentScrollY > 120) {
      header.classList.add("header-hidden");
    }

    header.dataset.lastY = String(currentScrollY);
  }, []);

  useEffect(() => {
    let ticking = false;
    updateHeaderState();

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateHeaderState();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateHeaderState]);

  return (
    <header
      ref={headerRef}
      id="main-header"
      className="fixed inset-x-0 top-0 z-50 glass-nav"
    >
      <div className="header-shell flex justify-between items-center gap-3 px-4 pt-2 pb-1.5 mx-auto md:px-6">
        <div className="header-top-row">
          <div className="header-brand-row">
            <span
              className="material-symbols-outlined text-primary cursor-pointer md:!hidden"
              onClick={onMenuOpen}
            >
              menu
            </span>
            <div className="brand-logo brand-logo--header">
              <Image
                alt="Agustina Gonzalez Vicario"
                className="brand-logo__image"
                src="/logo-agv-header.svg"
                width={156}
                height={40}
                priority
              />
            </div>
          </div>
          <button
            className="header-cta bg-primary text-on-primary px-4 py-2 rounded-full text-[11px] font-label uppercase tracking-wider font-semibold text-center whitespace-nowrap md:hidden"
            onClick={onConsultaOpen}
            type="button"
          >
            Agendar consulta
          </button>
        </div>
        <div className="header-desktop-row">
          <nav className="header-nav hidden md:flex items-center gap-5 text-[10px] font-label font-semibold uppercase tracking-[0.14em] text-on-surface/80">
            <a className="top-nav-link" href="#inicio">Inicio</a>
            <a className="top-nav-link" href="/areas">Áreas</a>
            <a className="top-nav-link" href="#trayectoria">Trayectoria</a>
            <a className="top-nav-link" href="#perfil">Perfil</a>
            <a className="top-nav-link" href="#contacto">Contacto</a>
          </nav>
        </div>
        <button
          className="header-cta hidden bg-primary text-on-primary rounded-full text-[10px] font-label uppercase tracking-[0.14em] font-semibold text-center whitespace-nowrap md:inline-flex md:px-4 md:py-2.5"
          onClick={onConsultaOpen}
          type="button"
        >
          Agendar consulta
        </button>
      </div>
    </header>
  );
}
