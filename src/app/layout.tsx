import type { Metadata } from "next";
import { Noto_Serif, Manrope, Cormorant_Garamond } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { googleMapsUrl, instagramUrl } from "@/lib/site";
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

const siteUrl = "https://www.estudioagv.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Agustina Gonzalez Vicario | Abogada en Mendoza, Argentina",
    template: "%s | Agustina Gonzalez Vicario - Abogada",
  },
  description:
    "Abogada en Mendoza (Godoy Cruz): amparos de salud, despidos e indemnizaciones, accidentes de trabajo y reclamos a la ART, sucesiones, familia y accidentes de tránsito. Consultas online y por WhatsApp, de lunes a viernes de 9 a 18 h.",
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
      "Abogada en Mendoza especialista en amparos de salud, derecho laboral, despidos, accidentes de trabajo, sucesiones y daños por accidentes de tránsito. Atención online de lunes a viernes de 9 a 18 h.",
    images: [
      {
        url: "/imagenes/og-estudioagv.jpg",
        width: 1200,
        height: 630,
        alt: "Agustina Gonzalez Vicario - Abogada en Mendoza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustina Gonzalez Vicario | Abogada en Mendoza",
    description:
      "Abogada en Mendoza especialista en amparos de salud, derecho laboral, despidos, accidentes de trabajo, sucesiones y daños. Consultas online de lunes a viernes de 9 a 18 h.",
    images: ["/imagenes/og-estudioagv.jpg"],
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
      alternateName: ["Estudio AGV", "Estudio Jurídico AGV"],
      url: siteUrl,
      image: `${siteUrl}/imagenes/imagenabogada.jpeg`,
      description:
        "Abogada en Mendoza, Argentina. Especialista en amparos de salud, derecho laboral, despidos, accidentes de trabajo, enfermedades profesionales, derecho sucesorio y daños por accidentes de tránsito.",
      telephone: "+542616399640",
      email: "agustinagonzalezvicario@gmail.com",
      // Negocio de área de servicio: la ficha de Google tiene la dirección oculta,
      // así que acá solo va la localidad (sin calle ni coordenadas).
      address: {
        "@type": "PostalAddress",
        addressLocality: "Godoy Cruz",
        addressRegion: "Mendoza",
        addressCountry: "AR",
      },
      areaServed: [
        "Mendoza",
        "Godoy Cruz",
        "Guaymallén",
        "Las Heras",
        "Luján de Cuyo",
        "Maipú",
        "Lavalle",
      ].map((name) => ({ "@type": "City", name })),
      knowsAbout: [
        "Amparos de salud",
        "Derecho laboral",
        "Despidos",
        "Enfermedades profesionales",
        "Accidentes de trabajo",
        "Derecho sucesorio",
        "Daños y perjuicios por accidentes de tránsito",
        "Derecho de familia",
        "Divorcio",
        "Cuota alimentaria",
      ],
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      hasMap: googleMapsUrl,
      sameAs: [googleMapsUrl, instagramUrl],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface font-body text-on-surface">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
