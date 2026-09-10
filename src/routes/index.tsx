import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/aurea/Header";
import { Hero } from "@/components/aurea/Hero";
import { Intro } from "@/components/aurea/Intro";
import { Servicios } from "@/components/aurea/Servicios";
import { Condiciones } from "@/components/aurea/Condiciones";
import { Especialista } from "@/components/aurea/Especialista";
import { Metodologia } from "@/components/aurea/Metodologia";
import { Resultados } from "@/components/aurea/Resultados";
import { CtaClinica, FooterClinica } from "@/components/aurea/CtaFooter";

const TITLE = "ÁUREA PRUEBAS | Clínica dermatológica en Guadalajara";
const DESCRIPTION =
  "Dermatología clínica y estética en Guadalajara: acné, manchas, melasma, rejuvenecimiento facial, láser y caída del cabello. Agenda tu valoración personalizada.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "ÁUREA PRUEBAS",
  description: DESCRIPTION,
  medicalSpecialty: "Dermatology",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Pablo Neruda 2510, Providencia",
    addressLocality: "Guadalajara",
    addressRegion: "Jalisco",
    postalCode: "44630",
    addressCountry: "MX",
  },
  telephone: "+52-33-0000-0000",
  openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-14:00"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: "https://vende24siete.com/images/og-image-derma.jpg" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_MX" },
      { name: "author", content: "Hecha by Vende24siete.com" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Servicios />
        <Condiciones />
        <Especialista />
        <Metodologia />
        <Resultados />
        <CtaClinica />
      </main>
      <FooterClinica />
    </>
  );
}
