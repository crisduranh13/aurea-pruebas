import { Reveal } from "./Reveal";

const pasos = [
  {
    n: "01",
    t: "Escuchamos",
    d: "Conocemos tu historia, tus antecedentes y lo que te gustaría mejorar, sin apresurar decisiones.",
  },
  {
    n: "02",
    t: "Diagnosticamos",
    d: "Valoramos tu piel con exploración clínica y dermatoscopia para entender qué está ocurriendo.",
  },
  {
    n: "03",
    t: "Diseñamos tu tratamiento",
    d: "Definimos un plan por etapas, con indicaciones claras y expectativas realistas.",
  },
  {
    n: "04",
    t: "Acompañamos tu evolución",
    d: "Damos seguimiento y ajustamos el plan según la respuesta de tu piel en el tiempo.",
  },
];

export function Metodologia() {
  return (
    <section className="bg-background px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Metodología</p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05]">
            Un proceso claro, de principio a fin
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
          {pasos.map((p, i) => (
            <Reveal
              as="li"
              key={p.n}
              delay={i * 90}
              className="group bg-background p-8 transition-colors duration-500 hover:bg-sand/60 md:p-10"
            >
              <span className="font-display text-4xl text-clay">{p.n}</span>
              <h3 className="mt-8 font-display text-2xl leading-tight">{p.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
