import piel from "@/assets/piel-clara.jpg";
import rejuvenecimiento from "@/assets/rejuvenecimiento.jpg";
import consulta from "@/assets/consulta.jpg";
import { Reveal } from "./Reveal";

const modulos = [
  {
    img: piel,
    alt: "Piel de aspecto uniforme tras seguimiento dermatológico",
    titulo: "Control de acné",
    meta: "Seguimiento simulado · 6 meses",
    texto: "Menor inflamación y mejor textura reportada durante el seguimiento del plan.",
  },
  {
    img: rejuvenecimiento,
    alt: "Perfil de mujer con piel luminosa",
    titulo: "Pigmento y luminosidad",
    meta: "Seguimiento simulado · 4 meses",
    texto: "Tono más uniforme acompañado de fotoprotección diaria constante.",
  },
  {
    img: consulta,
    alt: "Valoración dermatológica con dermatoscopio",
    titulo: "Valoración y seguimiento",
    meta: "Consulta demostrativa",
    texto: "Documentación clínica para comparar la evolución en cada revisión.",
  },
];

const testimonios = [
  {
    texto:
      "Salí de la consulta entendiendo por fin qué le pasaba a mi piel y qué esperar en los próximos meses.",
    autor: "Mariana R.",
    ciudad: "Zapopan",
  },
  {
    texto:
      "Me explicaron cada paso sin prometer milagros. Eso fue justo lo que me dio confianza para empezar.",
    autor: "Daniel V.",
    ciudad: "Guadalajara",
  },
  {
    texto:
      "El seguimiento hizo la diferencia: ajustaron el plan cuando mi piel reaccionó distinto a lo esperado.",
    autor: "Paola G.",
    ciudad: "Tlaquepaque",
  },
];

export function Resultados() {
  return (
    <section id="resultados" className="bg-sand/50 px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Resultados y confianza</p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05]">
            Procesos documentados, expectativas honestas
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {modulos.map((m, i) => (
            <Reveal key={m.titulo} delay={i * 100}>
              <div className="img-zoom">
                <img
                  src={m.img}
                  alt={m.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <p className="eyebrow mt-6">{m.meta}</p>
              <h3 className="mt-3 font-display text-2xl">{m.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.texto}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 border-t border-border pt-8">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Cada piel responde de manera diferente. Los resultados dependen de la valoración y del
            tratamiento indicado. Las imágenes y seguimientos mostrados son material demostrativo.
          </p>
        </Reveal>

        <div className="mt-24 grid gap-10 md:grid-cols-3">
          {testimonios.map((t, i) => (
            <Reveal key={t.autor} delay={i * 100} className="border-t border-charcoal/20 pt-8">
              <blockquote className="font-display text-xl leading-snug md:text-2xl">
                “{t.texto}”
              </blockquote>
              <p className="mt-6 text-sm text-foreground">{t.autor}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t.ciudad}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="text-xs text-muted-foreground">
            Testimonios de carácter demostrativo. No corresponden a pacientes reales ni a reseñas
            verificadas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
