import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/aurea";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const condiciones = [
  {
    id: "acne",
    label: "Acné",
    texto:
      "El acné suele requerir constancia más que intensidad. En consulta valoramos el tipo de lesiones, tu rutina actual y factores hormonales o de estilo de vida para definir un plan gradual.",
  },
  {
    id: "manchas",
    label: "Manchas",
    texto:
      "Las manchas responden mejor cuando se identifica su origen: sol, inflamación previa o factores hormonales. La fotoprotección diaria es parte indispensable de cualquier plan.",
  },
  {
    id: "rosacea",
    label: "Rosácea",
    texto:
      "En rosácea el objetivo es reducir los brotes y cuidar la barrera cutánea. Identificar detonantes personales suele ser tan importante como el tratamiento indicado.",
  },
  {
    id: "textura",
    label: "Textura",
    texto:
      "Poros visibles, irregularidades o cicatrices se abordan por etapas, combinando cuidado en casa con procedimientos elegidos según tu tipo de piel.",
  },
  {
    id: "lineas",
    label: "Líneas de expresión",
    texto:
      "Trabajamos con un criterio conservador: mantener la expresión natural del rostro y acompañar el proceso con hábitos de fotoprotección e hidratación.",
  },
  {
    id: "cabello",
    label: "Caída del cabello",
    texto:
      "Antes de tratar, estudiamos el cuero cabelludo y descartamos causas médicas frecuentes. El seguimiento es clave para evaluar la evolución.",
  },
  {
    id: "lunares",
    label: "Revisión de lunares",
    texto:
      "La revisión periódica con dermatoscopia permite documentar y dar seguimiento a lunares. Si notas cambios de forma, color o tamaño, agenda una valoración.",
  },
];

export function Condiciones() {
  const [activa, setActiva] = useState(condiciones[0].id);
  const seleccion = condiciones.find((c) => c.id === activa)!;

  return (
    <section className="bg-background px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Condiciones de la piel</p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05]">
            ¿Qué te gustaría mejorar?
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Elige una condición y conoce cómo la abordamos en consulta.
          </p>
        </Reveal>

        <Reveal className="md:col-span-7" delay={100}>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Condiciones de la piel">
            {condiciones.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={activa === c.id}
                onClick={() => setActiva(c.id)}
                className={cn(
                  "min-h-11 rounded-full border px-5 text-[0.72rem] uppercase tracking-[0.16em] transition-all duration-500",
                  activa === c.id
                    ? "border-charcoal bg-charcoal text-background"
                    : "border-border text-muted-foreground hover:border-charcoal/40 hover:text-foreground",
                )}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="mt-10 border-t border-border pt-10">
            <h3 className="font-display text-2xl md:text-3xl">{seleccion.label}</h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {seleccion.texto}
            </p>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-clay"
              >
                Solicitar valoración
              </a>
              <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                Información general de carácter demostrativo. No sustituye un diagnóstico médico
                presencial.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
