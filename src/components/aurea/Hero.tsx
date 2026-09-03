import { useEffect, useState } from "react";
import heroSkin from "@/assets/hero-skin.jpg";
import { WHATSAPP_URL } from "@/lib/aurea";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(Math.min(window.scrollY * 0.12, 90)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden bg-charcoal">
      <img
        src={heroSkin}
        alt="Primer plano de piel saludable con luz natural cálida"
        width={1600}
        height={1200}
        fetchPriority="high"
        className="absolute inset-0 h-[115%] w-full object-cover object-center"
        style={{ transform: `translate3d(0, -${offset}px, 0)` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--charcoal) 55%, transparent) 0%, color-mix(in oklab, var(--charcoal) 25%, transparent) 45%, color-mix(in oklab, var(--charcoal) 72%, transparent) 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-24">
        <div className="max-w-3xl">
          <p className="eyebrow !text-background/70">Guadalajara · México</p>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.98] text-background">
            Dermatología que
            <br />
            entiende tu piel.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-background/80 md:text-lg">
            Ciencia, tecnología y atención personalizada para cuidar la salud y apariencia de tu
            piel en cada etapa.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-clay"
            >
              Agenda tu valoración
            </a>
            <a href="#tratamientos" className="btn-base btn-outline-light">
              Conoce nuestros tratamientos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
