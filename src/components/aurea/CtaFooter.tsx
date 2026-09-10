import { MessageCircle } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/aurea";
import { Reveal } from "./Reveal";

export function CtaClinica() {
  return (
    <section id="contacto" className="bg-background px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.03]">
            Comienza una nueva etapa para tu piel.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Agenda una valoración personalizada y descubre el tratamiento adecuado para ti.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-clay mt-10 !min-h-14 !px-10 !text-[0.8rem]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Solicitar valoración por WhatsApp
          </a>
          <p className="mt-6 text-xs text-muted-foreground">
            Número de contacto ficticio para fines demostrativos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function FooterClinica() {
  return (
    <footer className="bg-charcoal px-6 py-20 text-background md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-display text-2xl tracking-[0.18em]">ÁUREA PRUEBAS</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-background/60">
              Dermatología
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-background/70">
              Dermatología clínica y estética con enfoque personalizado en Guadalajara.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow !text-background/50">Contacto</p>
            <address className="mt-5 space-y-2 text-sm not-italic text-background/75">
              <p>Av. Pablo Neruda 2510, Providencia</p>
              <p>44630 Guadalajara, Jalisco</p>
              <p>Tel. +52 33 0000 0000</p>
            </address>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow !text-background/50">Horarios</p>
            <ul className="mt-5 space-y-2 text-sm text-background/75">
              <li>Lun – Vie · 9:00 a 19:00</li>
              <li>Sábado · 9:00 a 14:00</li>
              <li>Domingo · Cerrado</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow !text-background/50">Navegación</p>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-background/75">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex gap-5 text-sm text-background/75">
              <li>
                <a href="#contacto" className="link-underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#contacto" className="link-underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-background/15 pt-6 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ÁUREA PRUEBAS. Clínica ficticia.</p>
          <div className="flex gap-6">
            <a href="#contacto" className="link-underline">
              Aviso de privacidad
            </a>
            <a href="#contacto" className="link-underline">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function BloqueVende24() {
  return (
    <section className="bg-sand px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Vende24Siete</p>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05]">
              Tu clínica también puede proyectar este nivel.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Así de bien puede verse tu imagen en un sitio web diseñado para generar confianza,
              destacar tus servicios y convertir visitas en nuevos pacientes.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Creamos experiencias digitales profesionales para clínicas y negocios que quieren
              crecer.
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <a
              href="https://vende24siete.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline-ink"
            >
              Quiero una propuesta para mi negocio
            </a>
            <p className="mt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Demo conceptual creado por Vende24Siete
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
