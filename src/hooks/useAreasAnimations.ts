"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useAreasAnimations() {
  useEffect(() => {
    gsap.defaults({ ease: "power3.out" });

    /* ── Hero entrance ── */
    const heroTl = gsap.timeline({ delay: 0.2 });
    heroTl
      .fromTo("[data-animate='areas-kicker']",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 })
      .fromTo("[data-animate='areas-title']",
        { opacity: 0, y: 80, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power4.out" }, "<0.1")
      .fromTo("[data-animate='areas-subtitle']",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }, "<0.3")
      .fromTo(".areas-star",
        { opacity: 0, scale: 0, rotation: -90 },
        { opacity: 0.06, scale: 1, rotation: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.5)" }, "<0.2");

    /* ── Area blocks — alternating left/right ── */
    gsap.utils.toArray<HTMLElement>("[data-animate='area-block']").forEach((block) => {
      const direction = block.dataset.direction;
      const copy = block.querySelector<HTMLElement>(".area-block__copy");
      const image = block.querySelector<HTMLElement>(".area-block__image-wrap");
      if (!copy || !image) return;

      const copyFromX = direction === "left" ? -110 : 110;
      const imageFromX = -copyFromX;

      gsap.fromTo(copy,
        { opacity: 0, x: copyFromX },
        {
          opacity: 1,
          x: 0,
          ease: "none",
          scrollTrigger: {
            trigger: block,
            start: "top 90%",
            end: "top 42%",
            scrub: 0.85,
          },
        }
      );

      gsap.fromTo(image,
        { opacity: 0, x: imageFromX },
        {
          opacity: 1,
          x: 0,
          ease: "none",
          scrollTrigger: {
            trigger: block,
            start: "top 90%",
            end: "top 42%",
            scrub: 0.85,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
