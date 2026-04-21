import type { Metadata } from "next";

const siteUrl = "https://www.estudioagv.com";

export const metadata: Metadata = {
  title: "Sobre mí | Abogada Agustina Elin González Vicario — Mendoza",
  description:
    "Conocé a Agustina Elin González Vicario, abogada egresada de la Universidad Champagnat con amplia experiencia en derecho laboral, sucesiones, daños y perjuicios y derecho de familia en Mendoza, Argentina.",
  keywords: [
    "Agustina González Vicario abogada",
    "abogada Universidad Champagnat Mendoza",
    "abogada laboral Mendoza",
    "abogada sucesiones Mendoza",
    "abogada familia Mendoza",
    "abogada daños y perjuicios Mendoza",
    "abogada accidentes de tránsito Mendoza",
    "abogada ART Mendoza",
    "perfil abogada Mendoza",
    "estudio jurídico Godoy Cruz",
    "derecho laboral despidos Mendoza",
    "divorcio abogada Mendoza",
    "cuota alimentaria abogada Mendoza",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: `${siteUrl}/sobre_mi`,
    siteName: "Agustina Gonzalez Vicario - Abogada",
    title: "Sobre mí | Agustina Elin González Vicario — Abogada en Mendoza",
    description:
      "Abogada egresada de la Universidad Champagnat. Especialista en derecho laboral, sucesiones, daños y familia. Atención personalizada en Mendoza.",
    images: [
      {
        url: `${siteUrl}/imagenes/abogada.jpeg`,
        width: 800,
        height: 1067,
        alt: "Agustina Elin González Vicario - Abogada en Mendoza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre mí | Agustina Elin González Vicario — Abogada en Mendoza",
    description:
      "Abogada egresada de la Universidad Champagnat. Especialista en derecho laboral, sucesiones, daños y familia.",
    images: [`${siteUrl}/imagenes/abogada.jpeg`],
  },
  alternates: {
    canonical: `${siteUrl}/sobre_mi`,
  },
};

export default function SobreMiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
