"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSobreMiAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Hero entrance (above fold — timeline, no ScrollTrigger) ───
      const heroTl = gsap.timeline({ delay: 0.15 });
      heroTl
        .fromTo(
          '[data-animate="sobre-copy"]',
          { x: -80, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.0, ease: "power3.out" }
        )
        .fromTo(
          '[data-animate="sobre-photo"]',
          { x: 80, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
          "<0.15"
        )
        .fromTo(
          '[data-animate="sobre-badge"]',
          { y: 20, opacity: 0, scale: 0.85 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.5)" },
          "<0.4"
        )
        .fromTo(
          ".sobre-star",
          { opacity: 0, scale: 0, rotation: -90 },
          { opacity: 1, scale: 1, rotation: 0, duration: 0.8, stagger: 0.12, ease: "back.out(1.5)" },
          "<0.2"
        );

      // ── Bio left (from left) ───────────────────────────────────────
      const bioLeft = document.querySelector('[data-animate="sobre-bio-left"]');
      if (bioLeft) {
        gsap.fromTo(
          bioLeft,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: bioLeft,
              start: "top 88%",
              end: "top 44%",
              scrub: 0.85,
            },
          }
        );
      }

      // ── Bio right (from right) ─────────────────────────────────────
      const bioRight = document.querySelector('[data-animate="sobre-bio-right"]');
      if (bioRight) {
        gsap.fromTo(
          bioRight,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: bioRight,
              start: "top 88%",
              end: "top 44%",
              scrub: 0.85,
            },
          }
        );
      }

      // ── Values heading (fade up) ───────────────────────────────────
      const valuesHeading = document.querySelector('[data-animate="sobre-values-heading"]');
      if (valuesHeading) {
        gsap.fromTo(
          valuesHeading,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: valuesHeading,
              start: "top 88%",
              end: "top 50%",
              scrub: 0.85,
            },
          }
        );
      }

      // ── Value cards (staggered from bottom) ───────────────────────
      const valueCards = document.querySelectorAll('[data-animate="sobre-value"]');
      if (valueCards.length) {
        valueCards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              delay: i * 0.05,
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                end: "top 52%",
                scrub: 0.7,
              },
            }
          );
        });
      }

      // ── Specialties heading ────────────────────────────────────────
      const specHeading = document.querySelector('[data-animate="sobre-spec-heading"]');
      if (specHeading) {
        gsap.fromTo(
          specHeading,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: specHeading,
              start: "top 88%",
              end: "top 50%",
              scrub: 0.85,
            },
          }
        );
      }

      // ── Specialty items (alternate directions) ─────────────────────
      const specItems = document.querySelectorAll('[data-animate="sobre-spec"]');
      if (specItems.length) {
        specItems.forEach((item, i) => {
          gsap.fromTo(
            item,
            { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "top 55%",
                scrub: 0.85,
              },
            }
          );
        });
      }

      // ── Final CTA ─────────────────────────────────────────────────
      const cta = document.querySelector('[data-animate="sobre-cta"]');
      if (cta) {
        gsap.fromTo(
          cta,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: cta,
              start: "top 88%",
              end: "top 50%",
              scrub: 0.85,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);
}
