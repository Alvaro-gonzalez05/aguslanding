import type { Metadata } from "next";
import { Noto_Serif, Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const siteUrl = "https://www.agustinagonzalezvicario.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Agustina Gonzalez Vicario | Abogada en Mendoza, Argentina",
    template: "%s | Agustina Gonzalez Vicario - Abogada",
  },
  description:
    "Abogada en Mendoza, Argentina — Godoy Cruz. Especialista en amparos de salud, derecho laboral, despidos e indemnizaciones, accidentes de trabajo, reclamos a la ART, enfermedades profesionales, sucesiones y daños por accidentes de tránsito. Consulta personalizada 24/7 por WhatsApp. Estudio jurídico con atención inmediata.",
  keywords: [
    // P0 — Transactional (Quick Wins, baja competencia, alta conversión)
    "abogada Mendoza",
    "abogado Mendoza",
    "abogados Mendoza",
    "abogados en Mendoza",
    "abogada en Mendoza",
    "abogado en Mendoza",
    "abogada laboral Mendoza",
    "abogado laboral Mendoza",
    "abogados laborales Mendoza",
    "abogada Godoy Cruz",
    "abogado Godoy Cruz",
    "abogados Godoy Cruz",
    "abogado amparo de salud Mendoza",
    "abogado accidente de tránsito Mendoza",
    "abogados accidentes de tránsito Mendoza",
    "abogado sucesiones Mendoza",
    "abogados sucesiones Mendoza",
    "reclamo ART Mendoza",
    "estudio jurídico Mendoza",
    "estudio jurídico en Mendoza",
    "estudios jurídicos Mendoza",
    "estudio de abogados Mendoza",
    "estudio de abogados en Mendoza",
    "consulta legal Mendoza",
    "abogada cerca de mí Mendoza",
    "abogados cerca de mí Mendoza",
    // P1 — Commercial/Informational (alto volumen, competencia media)
    "abogada Argentina",
    "abogado Argentina",
    "abogados Argentina",
    "indemnización por despido Argentina",
    "despido sin causa Argentina",
    "cuánto me corresponde de indemnización",
    "qué hacer si me despiden sin causa",
    "enfermedades profesionales ART",
    "reclamo laboral Argentina",
    "amparo de salud Argentina",
    "daños y perjuicios accidente de tránsito",
    "abogada de salud",
    "accidente de trabajo abogado",
    "derecho laboral Mendoza",
    "derecho sucesorio Mendoza",
    "sucesiones Mendoza",
    "mejor abogado Mendoza",
    "mejores abogados Mendoza",
    "mejor estudio jurídico Mendoza",
    // P2 — GEO/AI queries (preguntas que activan AI Overviews)
    "cómo hacer un amparo de salud",
    "cómo reclamar a la ART",
    "cómo iniciar una sucesión",
    "qué es un amparo de salud",
    "abogado para accidente laboral",
    "consulta abogado gratis Mendoza",
    "necesito un abogado en Mendoza",
    "busco abogado en Mendoza",
  ],
  authors: [{ name: "Agustina Gonzalez Vicario" }],
  creator: "Agustina Gonzalez Vicario",
  publisher: "Agustina Gonzalez Vicario",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Agustina Gonzalez Vicario - Abogada",
    title: "Agustina Gonzalez Vicario | Abogada en Mendoza, Argentina",
    description:
      "Abogada en Mendoza especialista en amparos de salud, derecho laboral, despidos, accidentes de trabajo, sucesiones y daños por accidentes de tránsito. Atención personalizada 24/7.",
    images: [
      {
        url: "/imagenes/imagenabogada.jpeg",
        width: 800,
        height: 600,
        alt: "Agustina Gonzalez Vicario - Abogada en Mendoza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustina Gonzalez Vicario | Abogada en Mendoza",
    description:
      "Abogada en Mendoza especialista en amparos de salud, derecho laboral, despidos, accidentes de trabajo, sucesiones y daños. Consulta 24/7.",
    images: ["/imagenes/imagenabogada.jpeg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Legal Services",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Attorney",
      name: "Agustina Gonzalez Vicario",
      url: siteUrl,
      image: `${siteUrl}/imagenes/imagenabogada.jpeg`,
      description:
        "Abogada en Mendoza, Argentina. Especialista en amparos de salud, derecho laboral, despidos, accidentes de trabajo, enfermedades profesionales, derecho sucesorio y daños por accidentes de tránsito.",
      telephone: "+542616399640",
      email: "agustinagonzalezvicario@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Loria Oeste 165",
        addressLocality: "Godoy Cruz",
        addressRegion: "Mendoza",
        addressCountry: "AR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -32.93,
        longitude: -68.84,
      },
      areaServed: [
        { "@type": "State", name: "Mendoza" },
        { "@type": "Country", name: "Argentina" },
      ],
      knowsAbout: [
        "Amparos de salud",
        "Derecho laboral",
        "Despidos",
        "Enfermedades profesionales",
        "Accidentes de trabajo",
        "Derecho sucesorio",
        "Daños y perjuicios por accidentes de tránsito",
      ],
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      url: siteUrl,
      name: "Agustina Gonzalez Vicario - Abogada en Mendoza",
      description:
        "Estudio jurídico en Mendoza especializado en derecho laboral, amparos de salud, sucesiones y reclamos por daños.",
      inLanguage: "es-AR",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: siteUrl,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`light ${notoSerif.variable} ${manrope.variable} ${cormorantGaramond.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface font-body text-on-surface">{children}</body>
    </html>
  );
}
