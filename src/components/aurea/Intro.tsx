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
              Este sitio es una demostración de lo que podemos crear para tu clínica.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 md:pt-4" delay={120}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Los nombres, textos e imágenes son simulados. Tu sitio puede adaptarse completamente a
              tu especialidad, servicios, imagen, fotografías y forma de trabajar.
            </p>
            <div className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p className="font-medium text-foreground">Este puede ser tu sitio.</p>
              <p className="mt-3">
                Si este demo te gustó, imagina lo que podemos hacer con tu marca, tus fotografías,
                tu experiencia y tus servicios reales.
              </p>
              <ul className="mt-5 space-y-3" role="list">
                {[
                  "Diseñado para la forma en que hoy tus pacientes buscan. Una experiencia visual pensada primero para celular, también optimizada para tablet y computadora.",
                  "Web visual con tu identidad gráfica y colores (podemos hacer propuesta con tus colores y marca)",
                  "Se crea tu web como un traje a la medida, no es un template, es único para ti.",
                  "SEO / Integración a tu Google Maps",
                ].map((beneficio) => (
                  <li key={beneficio} className="flex gap-3">
                    <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>
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
            alt="Recepción de ÁUREA Clínica Dermatológica con acabados en travertino y luz natural"
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
