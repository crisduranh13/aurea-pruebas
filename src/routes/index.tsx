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

const TITLE = "Áurea Dermatología | Demo Web Profesional";
const DESCRIPTION =
  "Demo de sitio web para clínica dermatológica en Guadalajara. Diseño premium, mobile-first y pensado para mostrar servicios médicos de forma clara, visual y profesional.";
const SOCIAL_IMAGE = "/og-image-derma.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:alt", content: "Vista previa del demo web de Áurea Dermatología" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_MX" },
      { name: "author", content: "Hecha by Vende24siete.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: SOCIAL_IMAGE },
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
