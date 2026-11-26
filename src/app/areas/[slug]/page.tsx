import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AreaShell, { ConsultaButton } from "@/components/AreaShell";
import Icon from "@/components/Icon";
import { areas, getArea } from "@/lib/areas";

const siteUrl = "https://www.estudioagv.com";
const whatsappNumber = "5492616399640";

// Solo existen las páginas definidas en src/lib/areas.ts; el resto da 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  const url = `${siteUrl}/areas/${area.slug}`;
  return {
    title: { absolute: `${area.metaTitle} | Estudio AGV` },
    description: area.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "es_AR",
      url,
      siteName: "Agustina Gonzalez Vicario - Abogada",
      title: area.metaTitle,
      description: area.metaDescription,
      images: [{ url: "/imagenes/og-estudioagv.jpg", width: 1200, height: 630, alt: area.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: area.metaTitle,
      description: area.metaDescription,
      images: ["/imagenes/og-estudioagv.jpg"],
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const url = `${siteUrl}/areas/${area.slug}`;
  const others = areas.filter((a) => a.slug !== area.slug);
  const waText = encodeURIComponent(`Hola, quiero hacer una consulta sobre ${area.name.toLowerCase()}.`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#servicio`,
        name: area.h1,
        serviceType: area.name,
        description: area.metaDescription,
        url,
        provider: { "@id": `${siteUrl}/#abogada` },
        areaServed: { "@type": "State", name: "Mendoza" },
      },
      {
        "@type": "FAQPage",
        mainEntity: area.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Áreas de práctica", item: `${siteUrl}/areas` },
          { "@type": "ListItem", position: 3, name: area.name, item: url },
        ],
      },
    ],
  };

  return (
    <AreaShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── (id="inicio" para que el header se vea claro sobre el fondo oscuro) */}
      <section id="inicio" className="ap-hero">
        <div className="hero-orb hero-orb--a" aria-hidden="true" />
        <div className="hero-orb hero-orb--b" aria-hidden="true" />
        <div className="ap-hero__inner section-shell">
          <nav aria-label="Ruta de navegación" className="ap-breadcrumb">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href="/areas">Áreas</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{area.name}</span>
          </nav>
          <p className="ap-hero__kicker">
            <Icon name={area.icon} className="ap-hero__icon" />
            {area.kicker}
          </p>
          <h1 className="ap-hero__title">{area.h1}</h1>
          <p className="ap-hero__lead">{area.lead}</p>
          <div className="ap-hero__actions">
            <a
              className="ap-btn ap-btn--light"
              href={`https://wa.me/${whatsappNumber}?text=${waText}`}
              target="_blank"
              rel="noreferrer"
            >
              Consultar por WhatsApp
            </a>
            <ConsultaButton className="ap-btn ap-btn--ghost">
              Agendar consulta
              <Icon name="arrow_forward" style={{ fontSize: 17 }} />
            </ConsultaButton>
          </div>
          <p className="ap-hero__hours">Atención online · Lunes a viernes de 9 a 18 h</p>
        </div>
      </section>

      {/* ── Intro + imagen ── */}
      <section className="ap-section">
        <div className="section-shell ap-intro">
          <div>
            <span className="section-kicker ap-kicker">Tu caso</span>
            <h2 className="section-heading-serif">Cómo te puedo ayudar</h2>
            <div className="ap-prose">
              {area.intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="ap-intro__media">
            <Image
              src={area.image}
              alt={area.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Qué casos se atienden ── */}
      <section className="ap-section ap-section--tint">
        <div className="section-shell">
          <span className="section-kicker ap-kicker">Casos que atiendo</span>
          <h2 className="section-heading-serif">{area.name} en Mendoza</h2>
          <ul className="ap-services">
            {area.services.map((s) => (
              <li key={s}>
                <Icon name="task_alt" className="ap-services__icon" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Proceso + documentos ── */}
      <section className="ap-section">
        <div className="section-shell ap-process">
          <div>
            <span className="section-kicker ap-kicker">El proceso</span>
            <h2 className="section-heading-serif">Paso a paso</h2>
            <ol className="ap-steps">
              {area.steps.map((s, i) => (
                <li key={s.title}>
                  <span className="ap-steps__num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <aside className="ap-docs">
            <h2>Para la primera consulta</h2>
            <p>Si los tenés a mano, estos datos ayudan a analizar el caso más rápido:</p>
            <ul>
              {area.documents.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <p className="ap-docs__note">Si te falta algo, igual escribime: lo vemos juntos.</p>
          </aside>
        </div>
      </section>

      {/* ── Preguntas frecuentes ── */}
      <section className="ap-section ap-section--tint">
        <div className="section-shell ap-faq">
          <span className="section-kicker ap-kicker">Preguntas frecuentes</span>
          <h2 className="section-heading-serif">Lo que más me consultan</h2>
          <div className="ap-faq__list">
            {area.faqs.map((f) => (
              <details key={f.q} className="ap-faq__item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <p className="ap-disclaimer">
            Esta información es general y no reemplaza el análisis de tu caso concreto.
          </p>
        </div>
      </section>

      {/* ── Otras áreas ── */}
      <section className="ap-section">
        <div className="section-shell">
          <span className="section-kicker ap-kicker">Otras áreas</span>
          <h2 className="section-heading-serif">También te puedo ayudar con</h2>
          <ul className="ap-others">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/areas/${o.slug}`} className="ap-others__link">
                  <Icon name={o.icon} className="ap-others__icon" />
                  <span>{o.name}</span>
                  <Icon name="arrow_forward" className="ap-others__arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AreaShell>
  );
}
