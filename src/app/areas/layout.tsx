import type { Metadata } from "next";

const siteUrl = "https://www.estudioagv.com";

export const metadata: Metadata = {
  title: "Áreas de práctica | Derecho laboral, salud, sucesiones y más",
  description:
    "Conocé todas las áreas legales en las que trabajo: derecho laboral y despidos, reclamos ART, accidentes de tránsito, amparos de salud, sucesiones y derecho de familia en Mendoza. Abogada Agustina González Vicario.",
  keywords: [
    "áreas de práctica abogada Mendoza",
    "derecho laboral Mendoza",
    "abogado despido sin causa Mendoza",
    "indemnización por despido Mendoza",
    "reclamo ART Mendoza",
    "enfermedades profesionales abogado",
    "accidente de trabajo Mendoza",
    "abogado amparo de salud Mendoza",
    "amparo de salud Mendoza",
    "abogado accidente de tránsito Mendoza",
    "daños y perjuicios Mendoza",
    "abogado sucesiones Mendoza",
    "sucesiones hereditarias Mendoza",
    "abogado derecho de familia Mendoza",
    "divorcio Mendoza abogado",
    "cuota alimentaria Mendoza",
    "alimentos menores Mendoza",
  ],
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
        url: `${siteUrl}/imagenes/imagenabogada.jpeg`,
        width: 800,
        height: 600,
        alt: "Agustina Gonzalez Vicario - Abogada en Mendoza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Áreas de práctica | Agustina González Vicario — Abogada Mendoza",
    description:
      "Derecho laboral, amparos de salud, accidentes de tránsito, sucesiones y familia. Consultá tu caso.",
    images: [`${siteUrl}/imagenes/imagenabogada.jpeg`],
  },
  alternates: {
    canonical: `${siteUrl}/areas`,
  },
};

export default function AreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
