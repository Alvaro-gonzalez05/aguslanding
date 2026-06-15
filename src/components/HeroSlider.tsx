"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

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
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(".hero-eyebrow-text", { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
      .fromTo(titleRef.current, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "<0.15")
      .fromTo(".hero-rule", { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.7, ease: "power2.out" }, "<0.3")
      .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.75, ease: "power2.out" }, "<0.15")
      .fromTo(".hero-tag", { opacity: 0, y: 14, scale: 0.86 }, { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.1, ease: "back.out(1.4)" }, "<0.2");

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
        <p className="hero-eyebrow-text" style={{ opacity: 0 }}>
          <span className="hero-eyebrow-bar" />
          Abogada · Mendoza
          <span className="hero-eyebrow-bar" />
        </p>

        <h1 ref={titleRef} className="hero-title mt-6" style={{ opacity: 0 }}>
          {slides[0].title}
        </h1>

        <div className="hero-rule" style={{ opacity: 0 }} />

        <p ref={descRef} className="hero-description" style={{ opacity: 0 }}>
          {slides[0].description}
        </p>

        <div className="hero-tags mt-10">
          {tags.map((tag) => (
            <span key={tag.label} className="hero-tag" style={{ opacity: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>{tag.icon}</span>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
