"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAPAnimations() {
  useEffect(() => {
    gsap.defaults({ ease: "power3.out" });

    const ta = "play reverse play reverse";

    /* ── Hero entrance timeline ── */
    const heroTl = gsap.timeline({ delay: 0.3 });
    heroTl
      .fromTo("[data-animate='hero-copy']",
        { opacity: 0, y: 80, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2 })
      .fromTo(".hero-eyebrow",
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.7 }, "<0.2")
      .fromTo(".hero-title",
        { opacity: 0, y: 50, clipPath: "inset(100% 0 0 0)" },
        { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 1 }, "<0.15")
      .fromTo(".hero-description",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }, "<0.3")
      .fromTo(".hero-tag",
        { opacity: 0, y: 20, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 }, "<0.2");

    /* ── 24/7 Service card ── */
    gsap.fromTo("[data-animate='service-card']",
      { opacity: 0, y: 60, scale: 0.9, rotationX: 8 },
      { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 1, ease: "back.out(1.4)",
        scrollTrigger: { trigger: "[data-animate='service-card']", start: "top 82%", toggleActions: ta }
      });
    gsap.fromTo("[data-animate='service-card'] .material-symbols-outlined",
      { opacity: 0, scale: 0, rotation: -180 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(2)",
        scrollTrigger: { trigger: "[data-animate='service-card']", start: "top 82%", toggleActions: ta },
        delay: 0.3
      });

    /* ── Section headings ── */
    gsap.utils.toArray<HTMLElement>("[data-animate='section-heading']").forEach((el) => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 80%", toggleActions: ta }
      });
      tl.fromTo(el.querySelector(".section-kicker"),
          { opacity: 0, x: -60 },
          { opacity: 1, x: 0, duration: 0.7 })
        .fromTo(el.querySelector("h2"),
          { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
          { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.9 }, "<0.15")
        .fromTo(el.querySelector("p"),
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 }, "<0.2");
    });

    /* ── Area cards ── */
    ScrollTrigger.batch("[data-animate='area-card']", {
      start: "top 85%",
      batchMax: 3,
      interval: 0.1,
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { opacity: 0, y: 80, scale: 0.85, rotationY: 6 },
          { opacity: 1, y: 0, scale: 1, rotationY: 0, duration: 0.9,
            stagger: 0.12, ease: "back.out(1.3)", overwrite: true });
      },
      onLeave: (batch) => {
        gsap.to(batch, { opacity: 0, y: -40, duration: 0.4, overwrite: true });
      },
      onEnterBack: (batch) => {
        gsap.fromTo(batch,
          { opacity: 0, y: -40 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, overwrite: true });
      },
      onLeaveBack: (batch) => {
        gsap.to(batch, { opacity: 0, y: 50, duration: 0.4, overwrite: true });
      }
    });

    /* ── Consultation panel ── */
    const consultSection = document.querySelector("#consulta .consultation-panel");
    if (consultSection) {
      gsap.fromTo(consultSection,
        { opacity: 0, y: 70, scale: 0.93 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power2.out",
          scrollTrigger: { trigger: consultSection, start: "top 78%", toggleActions: ta }
        });
      gsap.fromTo("#consulta .consultation-pill",
        { opacity: 0, x: -30, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.5)",
          scrollTrigger: { trigger: consultSection, start: "top 70%", toggleActions: ta },
          delay: 0.4
        });
      gsap.fromTo("#consulta .consultation-field",
        { opacity: 0, y: 30, x: 20 },
        { opacity: 1, y: 0, x: 0, duration: 0.6, stagger: 0.08,
          scrollTrigger: { trigger: consultSection, start: "top 70%", toggleActions: ta },
          delay: 0.5
        });
    }

    /* ── Trayectoria ── */
    gsap.fromTo("[data-animate='trajectory-media']",
      { opacity: 0, x: -100, scale: 0.85, rotation: -5 },
      { opacity: 1, x: 0, scale: 1, rotation: 0, duration: 1.3, ease: "power3.out",
        scrollTrigger: { trigger: "[data-animate='trajectory-media']", start: "top 78%", toggleActions: ta }
      });
    gsap.fromTo("[data-animate='trajectory-media'] .trajectory-statue",
      { opacity: 0, y: 60, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1.22, duration: 1.2, ease: "power2.out",
        scrollTrigger: { trigger: "[data-animate='trajectory-media']", start: "top 78%", toggleActions: ta },
        delay: 0.3
      });
    gsap.fromTo("[data-animate='trajectory-copy']",
      { opacity: 0, x: 100, y: 30 },
      { opacity: 1, x: 0, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: "[data-animate='trajectory-copy']", start: "top 80%", toggleActions: ta }
      });

    /* ── Stats ── */
    ScrollTrigger.batch("[data-animate='stat-card']", {
      start: "top 85%",
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { opacity: 0, y: 60, scale: 0.6 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9,
            stagger: 0.15, ease: "back.out(1.7)", overwrite: true });
        window.dispatchEvent(new Event("stats-visible"));
      },
      onLeave: (batch) => {
        gsap.to(batch, { opacity: 0, y: -30, scale: 0.8, duration: 0.4, overwrite: true });
      },
      onEnterBack: (batch) => {
        gsap.fromTo(batch,
          { opacity: 0, y: -30, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, overwrite: true });
      },
      onLeaveBack: (batch) => {
        gsap.to(batch, { opacity: 0, y: 40, scale: 0.7, duration: 0.4, overwrite: true });
      }
    });
    gsap.utils.toArray<HTMLElement>(".stat-badge").forEach((badge) => {
      gsap.fromTo(badge,
        { scale: 0, rotation: -20 },
        { scale: 1, rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.4)",
          scrollTrigger: { trigger: badge, start: "top 88%", toggleActions: ta }
        });
    });

    /* ── Profile ── */
    gsap.fromTo("[data-animate='profile-photo']",
      { opacity: 0, x: -80, scale: 0.88, rotationY: 10 },
      { opacity: 1, x: 0, scale: 1, rotationY: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: "[data-animate='profile-photo']", start: "top 78%", toggleActions: ta }
      });
    gsap.fromTo("[data-animate='profile-copy']",
      { opacity: 0, x: 80, y: 20 },
      { opacity: 1, x: 0, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: "[data-animate='profile-copy']", start: "top 78%", toggleActions: ta }
      });
    gsap.fromTo("#perfil .gold-gradient, #perfil .border-primary\\/35",
      { opacity: 0, y: 20, scale: 0.85 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: "back.out(1.5)",
        scrollTrigger: { trigger: "[data-animate='profile-copy']", start: "top 70%", toggleActions: ta },
        delay: 0.6
      });

    /* ── Contact band ── */
    gsap.utils.toArray<HTMLElement>(".contact-band").forEach((band) => {
      gsap.fromTo(band,
        { opacity: 0, y: 50, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: band, start: "top 82%", toggleActions: ta }
        });
    });

    /* ── Footer ── */
    const footerEl = document.querySelector("footer");
    if (footerEl) {
      const footerTl = gsap.timeline({
        scrollTrigger: { trigger: footerEl, start: "top 90%", toggleActions: ta }
      });
      footerTl
        .fromTo(footerEl.querySelector(".brand-logo--footer"),
          { opacity: 0, scale: 0.7, rotation: -8 },
          { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.5)" })
        .fromTo(footerEl.querySelectorAll("p"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, "<0.2")
        .fromTo(footerEl.querySelectorAll(".footer-action"),
          { opacity: 0, y: 15, scale: 0.85 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.3)" }, "<0.15")
        .fromTo(footerEl.querySelectorAll(".contact-links a"),
          { opacity: 0, y: 15, scale: 0.85 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.3)" }, "<0.05")
        .fromTo(footerEl.querySelectorAll("a[href='#']"),
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.06 }, "<0.2")
        .fromTo(footerEl.querySelector(".text-\\[10px\\]"),
          { opacity: 0 },
          { opacity: 1, duration: 0.4 }, "<0.1");
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf("*");
    };
  }, []);
}
