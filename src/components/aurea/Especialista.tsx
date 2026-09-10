import dra from "@/assets/dra-elena.jpg";
import { Reveal } from "./Reveal";

export function Especialista() {
  return (
    <section id="especialista" className="bg-charcoal px-6 py-24 text-background md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <div className="img-zoom">
            <img
              src={dra}
              alt="Retrato profesional de la Dra. Elena Navarro, dermatóloga"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="md:col-span-6 md:col-start-7" delay={120}>
          <p className="eyebrow !text-background/60">Especialista</p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05]">
            Dra. Elena Navarro
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-background/60">
            Dermatóloga certificada
          </p>
          <p className="mt-8 max-w-xl leading-relaxed text-background/80">
            La Dra. Navarro dedica su práctica a la dermatología clínica y estética con un enfoque
            basado en evidencia. Su método parte de un diagnóstico preciso y de explicar con
            claridad cada opción, para que las decisiones se tomen con información y sin prisas.
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-background/80">
            Prioriza resultados naturales, planes sostenibles en el tiempo y un acompañamiento
            cercano en cada etapa del tratamiento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
