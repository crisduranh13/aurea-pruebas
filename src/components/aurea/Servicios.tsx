import consulta from "@/assets/consulta.jpg";
import piel from "@/assets/piel-clara.jpg";
import rejuvenecimiento from "@/assets/rejuvenecimiento.jpg";
import laser from "@/assets/laser.jpg";
import cabello from "@/assets/cabello.jpg";
import clinica from "@/assets/clinica.jpg";
import { Reveal } from "./Reveal";

type Servicio = {
  num: string;
  titulo: string;
  texto: string;
  img: string;
  alt: string;
};

const servicios: Servicio[] = [
  {
    num: "01",
    titulo: "Dermatología clínica",
    texto:
      "Valoración y seguimiento de padecimientos de piel, uñas y cabello, con diagnóstico apoyado en dermatoscopia.",
    img: consulta,
    alt: "Dermatóloga revisando la piel de una paciente con dermatoscopio",
  },
  {
    num: "02",
    titulo: "Acné y cicatrices",
    texto:
      "Protocolos combinados para controlar el acné activo y mejorar la textura de cicatrices con el tiempo.",
    img: piel,
    alt: "Retrato editorial de piel con aspecto uniforme y saludable",
  },
  {
    num: "03",
    titulo: "Manchas y melasma",
    texto:
      "Abordaje del pigmento con fotoprotección, activos indicados y tecnología, ajustado a cada tipo de piel.",
    img: rejuvenecimiento,
    alt: "Perfil de mujer con piel luminosa sobre fondo terracota",
  },
  {
    num: "04",
    titulo: "Rejuvenecimiento facial",
    texto:
      "Resultados naturales y proporcionados, priorizando la armonía del rostro por encima de cambios drásticos.",
    img: clinica,
    alt: "Espacio clínico premium con iluminación cálida",
  },
  {
    num: "05",
    titulo: "Tecnología láser",
    texto:
      "Equipos de uso dermatológico aplicados bajo criterio médico según indicación y tipo de piel.",
    img: laser,
    alt: "Equipo láser dermatológico en sala de tratamiento",
  },
  {
    num: "06",
    titulo: "Caída del cabello",
    texto:
      "Estudio del cuero cabelludo y planes de manejo orientados a entender la causa antes de tratar.",
    img: cabello,
    alt: "Detalle de cuero cabelludo y cabello sano",
  },
];

function Card({ s, className, ratio }: { s: Servicio; className?: string; ratio: string }) {
  return (
    <article className={className}>
      <div className="img-zoom">
        <img
          src={s.img}
          alt={s.alt}
          loading="lazy"
          className={`w-full object-cover ${ratio}`}
        />
      </div>
      <div className="mt-6 flex gap-5">
        <span className="eyebrow pt-1">{s.num}</span>
        <div>
          <h3 className="font-display text-2xl leading-tight md:text-3xl">{s.titulo}</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            {s.texto}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Servicios() {
  return (
    <section id="tratamientos" className="bg-sand/50 px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Tratamientos</p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05]">
            Áreas de atención dermatológica
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 md:grid-cols-12 md:gap-x-10 md:gap-y-24">
          <Reveal className="md:col-span-7">
            <Card s={servicios[0]} ratio="aspect-[4/5] md:aspect-[5/6]" />
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9 md:pt-28" delay={100}>
            <Card s={servicios[1]} ratio="aspect-[3/4]" />
          </Reveal>
          <Reveal className="md:col-span-5" delay={60}>
            <Card s={servicios[2]} ratio="aspect-[4/3]" />
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 md:-mt-16" delay={140}>
            <Card s={servicios[3]} ratio="aspect-[16/10]" />
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-2" delay={60}>
            <Card s={servicios[4]} ratio="aspect-[3/4]" />
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-7 md:pt-24" delay={140}>
            <Card s={servicios[5]} ratio="aspect-[4/3]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
