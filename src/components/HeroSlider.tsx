"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

interface HeroSlide {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: { icon: string; label: string }[];
  position: string;
  fit: string;
  backdropPosition: string;
}

const slides: HeroSlide[] = [
  {
    src: "/DWI%20Lawyer%20In%20Houston.jpg",
    alt: "Libros jurídicos y mazo sobre escritorio legal",
    eyebrow: "Defensa penal",
    title: "Asistencia legal estratégica con presencia firme desde el primer paso",
    description: "Enfoque claro, análisis riguroso y acompañamiento preciso para conflictos que requieren criterio y respuesta concreta.",
    tags: [
      { icon: "gavel", label: "Estrategia" },
      { icon: "shield", label: "Defensa" },
      { icon: "verified_user", label: "Respaldo legal" },
    ],
    position: "center 28%",
    fit: "cover",
    backdropPosition: "center 28%",
  },
  {
    src: "/Miras%20Avukat%C4%B1.jpg",
    alt: "Biblioteca jurídica y ambientación de estudio legal",
    eyebrow: "Estudio jurídico",
    title: "Mirada técnica, cercana y ordenada para cada consulta legal",
    description: "Asesoramiento profesional con comunicación directa y criterio jurídico para ordenar el caso desde el inicio.",
    tags: [
      { icon: "balance", label: "Criterio jurídico" },
      { icon: "menu_book", label: "Trayectoria" },
      { icon: "handshake", label: "Acompañamiento" },
    ],
    position: "center center",
    fit: "cover",
    backdropPosition: "center center",
  },
];

export default function HeroSlider() {
  const imageRef = useRef<HTMLImageElement>(null);
  const backdropRef = useRef<HTMLImageElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const renderDots = useCallback(() => {
    if (!dotsRef.current) return;
    dotsRef.current.innerHTML = "";
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = `hero-dot${i === currentIndexRef.current ? " is-active" : ""}`;
      dot.setAttribute("aria-label", `Ver imagen ${i + 1}`);
      dot.dataset.index = String(i);
      dotsRef.current!.appendChild(dot);
    });
  }, []);

  const renderTags = useCallback((tags: HeroSlide["tags"]) => {
    if (!tagsRef.current) return;
    tagsRef.current.innerHTML = "";
    tags.forEach((tag) => {
      const chip = document.createElement("span");
      chip.className = "hero-tag";
      chip.innerHTML = `<span class="material-symbols-outlined text-[18px]">${tag.icon}</span>${tag.label}`;
      tagsRef.current!.appendChild(chip);
    });
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioningRef.current || index === currentIndexRef.current) return;
      isTransitioningRef.current = true;
      currentIndexRef.current = index;

      const img = imageRef.current;
      const backdrop = backdropRef.current;
      const slide = slides[index];

      const outTl = gsap.timeline({
        onComplete: () => {
          if (img) {
            img.src = slide.src;
            img.alt = slide.alt;
            img.style.objectFit = slide.fit || "cover";
            img.style.objectPosition = slide.position || "center center";
            img.classList.toggle("is-contained", slide.fit === "contain");
          }
          if (backdrop) {
            backdrop.src = slide.src;
            backdrop.style.objectPosition = slide.backdropPosition || slide.position || "center center";
          }
          if (eyebrowRef.current) eyebrowRef.current.textContent = slide.eyebrow;
          if (titleRef.current) titleRef.current.textContent = slide.title;
          if (descRef.current) descRef.current.textContent = slide.description;
          renderTags(slide.tags);
          renderDots();

          img?.classList.add("is-visible");

          const inTl = gsap.timeline({
            onComplete: () => { isTransitioningRef.current = false; },
          });
          inTl
            .fromTo(".hero-eyebrow", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" })
            .fromTo(".hero-title", { opacity: 0, y: 30, clipPath: "inset(100% 0 0 0)" }, { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 0.7, ease: "power3.out" }, "<0.1")
            .fromTo(".hero-description", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "<0.15")
            .fromTo(".hero-tag", { opacity: 0, y: 15, scale: 0.85 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.08, ease: "back.out(1.3)" }, "<0.1");
        },
      });

      outTl
        .to(".hero-tag", { opacity: 0, y: -10, scale: 0.85, duration: 0.3, stagger: 0.04, ease: "power2.in" })
        .to(".hero-description", { opacity: 0, y: -15, duration: 0.3, ease: "power2.in" }, "<0.05")
        .to(".hero-title", { opacity: 0, y: -25, clipPath: "inset(0 0 100% 0)", duration: 0.4, ease: "power2.in" }, "<0.05")
        .to(".hero-eyebrow", { opacity: 0, x: 20, duration: 0.3, ease: "power2.in" }, "<0.05");

      img?.classList.remove("is-visible");
    },
    [renderDots, renderTags]
  );

  useEffect(() => {
    const slide = slides[0];
    renderTags(slide.tags);
    renderDots();

    intervalRef.current = setInterval(() => {
      goToSlide((currentIndexRef.current + 1) % slides.length);
    }, 8000);

    const dotsEl = dotsRef.current;
    const handleDotClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName !== "BUTTON") return;
      const nextIndex = Number(target.dataset.index);
      if (isNaN(nextIndex) || nextIndex === currentIndexRef.current || isTransitioningRef.current) return;
      if (intervalRef.current) clearInterval(intervalRef.current);
      goToSlide(nextIndex);
      intervalRef.current = setInterval(() => {
        goToSlide((currentIndexRef.current + 1) % slides.length);
      }, 8000);
    };

    dotsEl?.addEventListener("click", handleDotClick);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      dotsEl?.removeEventListener("click", handleDotClick);
    };
  }, [goToSlide, renderDots, renderTags]);

  const firstSlide = slides[0];

  return (
    <section className="relative min-h-[420px] overflow-hidden bg-inverse-surface md:min-h-[640px]" id="inicio">
      <div className="hero-media-shell" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={backdropRef}
          alt="Fondo difuminado de la imagen principal"
          className="hero-backdrop-slide"
          src={firstSlide.src}
          style={{ objectPosition: firstSlide.backdropPosition }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imageRef}
          alt={firstSlide.alt}
          className="hero-slide is-visible"
          src={firstSlide.src}
          style={{ objectFit: firstSlide.fit as "cover" | "contain", objectPosition: firstSlide.position }}
        />
      </div>
      <div className="hero-ambient absolute inset-0"></div>
      <div className="relative z-10 mx-auto flex min-h-[420px] w-full max-w-screen-2xl items-center px-4 pt-[5.5rem] pb-14 md:min-h-[640px] md:px-6 md:py-20">
        <div className="hero-grid w-full">
          <div className="hero-copy space-y-6 reveal-up" data-animate="hero-copy">
            <div ref={eyebrowRef} className="hero-eyebrow">
              {firstSlide.eyebrow}
            </div>
            <h1 ref={titleRef} className="hero-title">
              {firstSlide.title}
            </h1>
            <p ref={descRef} className="hero-description">
              {firstSlide.description}
            </p>
            <div ref={tagsRef} className="hero-tags"></div>
            <div ref={dotsRef} className="flex items-center justify-center gap-3 pt-4" aria-label="Galeria principal"></div>
          </div>
          <div className="hero-media-aura"></div>
        </div>
      </div>
    </section>
  );
}
