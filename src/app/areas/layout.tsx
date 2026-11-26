import type { Metadata } from "next";

const siteUrl = "https://www.estudioagv.com";

export const metadata: Metadata = {
  title: "Áreas de práctica | Derecho laboral, salud, sucesiones y más",
  description:
    "Conocé todas las áreas legales en las que trabajo: derecho laboral y despidos, reclamos ART, accidentes de tránsito, amparos de salud, sucesiones y derecho de familia en Mendoza. Abogada Agustina González Vicario.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: `${siteUrl}/areas`,
    siteName: "Agustina Gonzalez Vicario - Abogada",
    title: "Áreas de práctica | Agustina González Vicario — Abogada Mendoza",
    description:
      "Derecho laboral, amparos de salud, accidentes de tránsito, sucesiones y familia. Consultá tu caso con la abogada Agustina González Vicario en Mendoza.",
    images: [
      {
        url: `${siteUrl}/imagenes/og-estudioagv.jpg`,
        width: 1200,
        height: 630,
        alt: "Agustina Gonzalez Vicario - Abogada en Mendoza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Áreas de práctica | Agustina González Vicario — Abogada Mendoza",
    description:
      "Derecho laboral, amparos de salud, accidentes de tránsito, sucesiones y familia. Consultá tu caso.",
    images: [`${siteUrl}/imagenes/og-estudioagv.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/areas`,
  },
};

export default function AreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
