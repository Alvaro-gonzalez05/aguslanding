"use client";

import { useEffect, useRef, useCallback } from "react";

const stats = [
  { value: 20, suffix: "", label: "Casos exitosos", desc: "Cada caso con resolución favorable para el cliente." },
  { value: 100, suffix: "%", label: "Atención personalizada", desc: "Seguimiento directo e individual en cada proceso." },
  { value: 100, suffix: "%", label: "Compromiso profesional", desc: "Intervención cercana y responsable de principio a fin." },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  const animate = useCallback(() => {
    if (!ref.current || counted.current) return;
    counted.current = true;
    const duration = 1800;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * value);
      if (ref.current) ref.current.textContent = `${current}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [value, suffix]);

  useEffect(() => {
    const handler = () => animate();
    window.addEventListener("stats-visible", handler, { once: true });
    return () => window.removeEventListener("stats-visible", handler);
  }, [animate]);

  return (
    <span ref={ref} className="stat-number font-headline">
      0{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative z-0 bg-inverse-surface text-surface px-6 pt-28 pb-20 md:pt-32">
      <div className="section-shell stat-grid px-4 md:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item reveal-soft" data-animate="stat-card">
            <CountUp value={stat.value} suffix={stat.suffix} />
            <p className="stat-label font-label text-xs uppercase tracking-[0.25em] font-bold text-primary-fixed-dim mt-3">
              {stat.label}
            </p>
            <p className="text-sm leading-relaxed text-surface-variant/70 mt-2 max-w-[18rem] mx-auto">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
