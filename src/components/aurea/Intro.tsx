import clinica from "@/assets/clinica.jpg";
import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section id="clinica" className="bg-background px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">La clínica</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05]">
              Tu piel merece una atención tan única como tú.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 md:pt-4" delay={120}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              En ÁUREA PRUEBAS cada diagnóstico y cada tratamiento se diseñan considerando la condición
              actual de tu piel, tu historia clínica, tu estilo de vida y los objetivos que quieres
              alcanzar. No trabajamos con protocolos genéricos: escuchamos, valoramos y proponemos.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Nuestro consultorio combina dermatología clínica y estética con tecnología de
              diagnóstico y un acompañamiento cercano, para que entiendas qué sucede con tu piel y
              qué esperar en cada etapa del proceso.
            </p>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-3">
              {[
                { k: "Enfoque", v: "Basado en evidencia" },
                { k: "Atención", v: "Consulta personalizada" },
                { k: "Sede", v: "Guadalajara, Jalisco" },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="eyebrow">{item.k}</dt>
                  <dd className="mt-2 font-display text-xl">{item.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal className="img-zoom mt-20 md:mt-28" delay={80}>
          <img
            src={clinica}
              alt="Recepción de la clínica dermatológica ÁUREA PRUEBAS con acabados en travertino y luz natural"
            width={1408}
            height={1008}
            loading="lazy"
            className="h-[46vh] w-full object-cover md:h-[70vh]"
          />
        </Reveal>
      </div>
    </section>
  );
}
