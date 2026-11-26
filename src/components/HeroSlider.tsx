"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Icon, { type IconName } from "@/components/Icon";

const slides = [
  {
    title: "Asistencia legal estratégica con presencia firme desde el primer paso",
    description: "Enfoque claro, análisis riguroso y acompañamiento preciso para conflictos que requieren criterio y respuesta concreta.",
  },
  {
    title: "Mirada técnica, cercana y ordenada para cada consulta legal",
    description: "Asesoramiento profesional con comunicación directa y criterio jurídico para ordenar el caso desde el inicio.",
  },
  {
    title: "Criterio jurídico preciso en cada etapa del proceso",
    description: "Acompañamiento integral con visión estratégica para defender sus intereses con rigor y determinación.",
  },
];

const tags = [
  { icon: "gavel", label: "Estrategia" },
  { icon: "shield", label: "Defensa" },
  { icon: "verified_user", label: "Respaldo legal" },
];

export default function HeroSlider() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const indexRef = useRef(0);
  const animatingRef = useRef(false);

  useEffect(() => {
    // La entrada del hero es CSS (clases hero-enter-*, ver globals.css) para que el
    // título se pinte sin esperar al JavaScript y no retrase el LCP.
    const cycle = () => {
      if (animatingRef.current || !titleRef.current || !descRef.current) return;
      animatingRef.current = true;

      gsap.to([titleRef.current, descRef.current], {
        opacity: 0, y: -24, duration: 0.42, ease: "power2.in",
        onComplete: () => {
          indexRef.current = (indexRef.current + 1) % slides.length;
          const s = slides[indexRef.current];
          titleRef.current!.textContent = s.title;
          descRef.current!.textContent = s.description;
          gsap.fromTo(
            [titleRef.current!, descRef.current!],
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.13,
              onComplete: () => { animatingRef.current = false; } }
          );
        },
      });
    };

    const id = setInterval(cycle, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#5b768e", minHeight: "100svh" }}
      id="inicio"
    >
      {/* Soft light orbs */}
      <div className="hero-orb hero-orb--a" aria-hidden="true" />
      <div className="hero-orb hero-orb--b" aria-hidden="true" />
      <div className="hero-orb hero-orb--c" aria-hidden="true" />

      {/* Concentric rings */}
      <svg className="hero-rings" viewBox="0 0 900 900" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <circle cx="450" cy="450" r="160" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1.5" />
        <circle cx="450" cy="450" r="290" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" />
        <circle cx="450" cy="450" r="420" fill="none" stroke="rgba(255,255,255,0.038)" strokeWidth="1" />
        <circle cx="450" cy="450" r="550" fill="none" stroke="rgba(255,255,255,0.022)" strokeWidth="1" />
      </svg>

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center justify-center px-5 text-center md:px-8"
        style={{ minHeight: "100svh", paddingTop: "5.5rem", paddingBottom: "3.5rem" }}
      >
        <p className="hero-eyebrow-text hero-enter hero-enter--1">
          <span className="hero-eyebrow-bar" />
          Abogada · Mendoza
          <span className="hero-eyebrow-bar" />
        </p>

        <h1 ref={titleRef} className="hero-title hero-enter hero-enter--2 mt-6">
          {slides[0].title}
        </h1>

        <div className="hero-rule hero-enter-rule" />

        <p ref={descRef} className="hero-description hero-enter hero-enter--3">
          {slides[0].description}
        </p>

        <div className="hero-tags mt-10">
          {tags.map((tag) => (
            <span key={tag.label} className="hero-tag hero-enter hero-enter--tag">
              <Icon name={tag.icon as IconName} style={{ fontSize: 15 }} />
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
