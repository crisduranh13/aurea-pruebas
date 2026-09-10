import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as MessageCircle, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CcLX7ipB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHATSAPP_URL = "https://wa.me/523300000000?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20valoraci%C3%B3n%20dermatol%C3%B3gica%20en%20%C3%81UREA.";
var NAV_LINKS = [
	{
		label: "Inicio",
		href: "#inicio"
	},
	{
		label: "Clínica",
		href: "#clinica"
	},
	{
		label: "Tratamientos",
		href: "#tratamientos"
	},
	{
		label: "Especialista",
		href: "#especialista"
	},
	{
		label: "Resultados",
		href: "#resultados"
	},
	{
		label: "Contacto",
		href: "#contacto"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-700", scrolled || open ? "border-b border-border/70 bg-background/90 backdrop-blur-md" : "border-b border-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#inicio",
					className: cn("font-display text-lg leading-none tracking-[0.22em] transition-colors duration-500 md:text-xl", scrolled || open ? "text-foreground" : "text-background"),
					children: ["ÁUREA", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 font-sans text-[0.6rem] tracking-[0.3em] uppercase opacity-70",
						children: "Dermatología"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-9 lg:flex",
					"aria-label": "Navegación principal",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: cn("link-underline text-[0.72rem] uppercase tracking-[0.2em] transition-colors duration-500", scrolled ? "text-muted-foreground hover:text-foreground" : "text-background/85"),
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WHATSAPP_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: cn("btn-base hidden !min-h-0 !px-6 !py-3 md:inline-flex", scrolled ? "btn-clay" : "btn-outline-light"),
						children: "Agenda una valoración"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": open ? "Cerrar menú" : "Abrir menú",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						className: cn("grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden", scrolled || open ? "text-foreground" : "text-background"),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "border-t border-border bg-background px-6 pb-8 pt-4 lg:hidden",
			"aria-label": "Navegación móvil",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col",
				children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "block border-b border-border/60 py-4 font-display text-2xl text-foreground",
					children: link.label
				}) }, link.href))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://wa.me/523300000000?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20valoraci%C3%B3n%20dermatol%C3%B3gica%20en%20%C3%81UREA.",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "btn-base btn-clay mt-6 w-full",
				children: "Agenda una valoración"
			})]
		})]
	});
}
var hero_skin_default = "/assets/hero-skin-D71YopwG.jpg";
function Hero() {
	const [offset, setOffset] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let frame = 0;
		const onScroll = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => setOffset(Math.min(window.scrollY * .12, 90)));
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			cancelAnimationFrame(frame);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "relative min-h-[100svh] overflow-hidden bg-charcoal",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_skin_default,
				alt: "Primer plano de piel saludable con luz natural cálida",
				width: 1600,
				height: 1200,
				fetchPriority: "high",
				className: "absolute inset-0 h-[115%] w-full object-cover object-center",
				style: { transform: `translate3d(0, -${offset}px, 0)` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(180deg, color-mix(in oklab, var(--charcoal) 55%, transparent) 0%, color-mix(in oklab, var(--charcoal) 25%, transparent) 45%, color-mix(in oklab, var(--charcoal) 72%, transparent) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow !text-background/70",
							children: "Guadalajara · México"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.98] text-background",
							children: [
								"Dermatología que",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"entiende tu piel."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-xl text-base leading-relaxed text-background/80 md:text-lg",
							children: "Ciencia, tecnología y atención personalizada para cuidar la salud y apariencia de tu piel en cada etapa."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-base btn-clay",
								children: "Agenda tu valoración"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#tratamientos",
								className: "btn-base btn-outline-light",
								children: "Conoce nuestros tratamientos"
							})]
						})
					]
				})
			})
		]
	});
}
var clinica_default = "/assets/clinica-ClLJIMEl.jpg";
/** Aparición progresiva al entrar en viewport. Respeta prefers-reduced-motion. */
function useReveal(threshold = .15) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setVisible(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			});
		}, {
			threshold,
			rootMargin: "0px 0px -8% 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold]);
	return {
		ref,
		visible
	};
}
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const { ref, visible } = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("reveal", visible && "reveal-in", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function Intro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "clinica",
		className: "bg-background px-6 py-24 md:px-10 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 md:grid-cols-12 md:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "md:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "La clínica"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05]",
						children: "Tu piel merece una atención tan única como tú."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "md:col-span-6 md:col-start-7 md:pt-4",
					delay: 120,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-relaxed text-muted-foreground md:text-lg",
							children: "En ÁUREA cada diagnóstico y cada tratamiento se diseñan considerando la condición actual de tu piel, tu historia clínica, tu estilo de vida y los objetivos que quieres alcanzar. No trabajamos con protocolos genéricos: escuchamos, valoramos y proponemos."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base leading-relaxed text-muted-foreground md:text-lg",
							children: "Nuestro consultorio combina dermatología clínica y estética con tecnología de diagnóstico y un acompañamiento cercano, para que entiendas qué sucede con tu piel y qué esperar en cada etapa del proceso."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-3",
							children: [
								{
									k: "Enfoque",
									v: "Basado en evidencia"
								},
								{
									k: "Atención",
									v: "Consulta personalizada"
								},
								{
									k: "Sede",
									v: "Guadalajara, Jalisco"
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "eyebrow",
								children: item.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 font-display text-xl",
								children: item.v
							})] }, item.k))
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "img-zoom mt-20 md:mt-28",
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: clinica_default,
					alt: "Recepción de la clínica dermatológica ÁUREA con acabados en travertino y luz natural",
					width: 1408,
					height: 1008,
					loading: "lazy",
					className: "h-[46vh] w-full object-cover md:h-[70vh]"
				})
			})]
		})
	});
}
var consulta_default = "/assets/consulta-D7pHaWWQ.jpg";
var piel_clara_default = "/assets/piel-clara-CqDC09u4.jpg";
var rejuvenecimiento_default = "/assets/rejuvenecimiento-1d4mYyNv.jpg";
var servicios = [
	{
		num: "01",
		titulo: "Dermatología clínica",
		texto: "Valoración y seguimiento de padecimientos de piel, uñas y cabello, con diagnóstico apoyado en dermatoscopia.",
		img: consulta_default,
		alt: "Dermatóloga revisando la piel de una paciente con dermatoscopio"
	},
	{
		num: "02",
		titulo: "Acné y cicatrices",
		texto: "Protocolos combinados para controlar el acné activo y mejorar la textura de cicatrices con el tiempo.",
		img: piel_clara_default,
		alt: "Retrato editorial de piel con aspecto uniforme y saludable"
	},
	{
		num: "03",
		titulo: "Manchas y melasma",
		texto: "Abordaje del pigmento con fotoprotección, activos indicados y tecnología, ajustado a cada tipo de piel.",
		img: rejuvenecimiento_default,
		alt: "Perfil de mujer con piel luminosa sobre fondo terracota"
	},
	{
		num: "04",
		titulo: "Rejuvenecimiento facial",
		texto: "Resultados naturales y proporcionados, priorizando la armonía del rostro por encima de cambios drásticos.",
		img: clinica_default,
		alt: "Espacio clínico premium con iluminación cálida"
	},
	{
		num: "05",
		titulo: "Tecnología láser",
		texto: "Equipos de uso dermatológico aplicados bajo criterio médico según indicación y tipo de piel.",
		img: "/assets/laser-CArq3ybw.jpg",
		alt: "Equipo láser dermatológico en sala de tratamiento"
	},
	{
		num: "06",
		titulo: "Caída del cabello",
		texto: "Estudio del cuero cabelludo y planes de manejo orientados a entender la causa antes de tratar.",
		img: "/assets/cabello-BUEENQiV.jpg",
		alt: "Detalle de cuero cabelludo y cabello sano"
	}
];
function Card({ s, className, ratio }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "img-zoom",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: s.img,
				alt: s.alt,
				loading: "lazy",
				className: `w-full object-cover ${ratio}`
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow pt-1",
				children: s.num
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl leading-tight md:text-3xl",
				children: s.titulo
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base",
				children: s.texto
			})] })]
		})]
	});
}
function Servicios() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "tratamientos",
		className: "bg-sand/50 px-6 py-24 md:px-10 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Tratamientos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05]",
					children: "Áreas de atención dermatológica"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-14 md:grid-cols-12 md:gap-x-10 md:gap-y-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "md:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							s: servicios[0],
							ratio: "aspect-[4/5] md:aspect-[5/6]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "md:col-span-4 md:col-start-9 md:pt-28",
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							s: servicios[1],
							ratio: "aspect-[3/4]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "md:col-span-5",
						delay: 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							s: servicios[2],
							ratio: "aspect-[4/3]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "md:col-span-6 md:col-start-7 md:-mt-16",
						delay: 140,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							s: servicios[3],
							ratio: "aspect-[16/10]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "md:col-span-4 md:col-start-2",
						delay: 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							s: servicios[4],
							ratio: "aspect-[3/4]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "md:col-span-5 md:col-start-7 md:pt-24",
						delay: 140,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							s: servicios[5],
							ratio: "aspect-[4/3]"
						})
					})
				]
			})]
		})
	});
}
var condiciones = [
	{
		id: "acne",
		label: "Acné",
		texto: "El acné suele requerir constancia más que intensidad. En consulta valoramos el tipo de lesiones, tu rutina actual y factores hormonales o de estilo de vida para definir un plan gradual."
	},
	{
		id: "manchas",
		label: "Manchas",
		texto: "Las manchas responden mejor cuando se identifica su origen: sol, inflamación previa o factores hormonales. La fotoprotección diaria es parte indispensable de cualquier plan."
	},
	{
		id: "rosacea",
		label: "Rosácea",
		texto: "En rosácea el objetivo es reducir los brotes y cuidar la barrera cutánea. Identificar detonantes personales suele ser tan importante como el tratamiento indicado."
	},
	{
		id: "textura",
		label: "Textura",
		texto: "Poros visibles, irregularidades o cicatrices se abordan por etapas, combinando cuidado en casa con procedimientos elegidos según tu tipo de piel."
	},
	{
		id: "lineas",
		label: "Líneas de expresión",
		texto: "Trabajamos con un criterio conservador: mantener la expresión natural del rostro y acompañar el proceso con hábitos de fotoprotección e hidratación."
	},
	{
		id: "cabello",
		label: "Caída del cabello",
		texto: "Antes de tratar, estudiamos el cuero cabelludo y descartamos causas médicas frecuentes. El seguimiento es clave para evaluar la evolución."
	},
	{
		id: "lunares",
		label: "Revisión de lunares",
		texto: "La revisión periódica con dermatoscopia permite documentar y dar seguimiento a lunares. Si notas cambios de forma, color o tamaño, agenda una valoración."
	}
];
function Condiciones() {
	const [activa, setActiva] = (0, import_react.useState)(condiciones[0].id);
	const seleccion = condiciones.find((c) => c.id === activa) ?? condiciones[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background px-6 py-24 md:px-10 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-14 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Condiciones de la piel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05]",
						children: "¿Qué te gustaría mejorar?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-muted-foreground",
						children: "Elige una condición y conoce cómo la abordamos en consulta."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "md:col-span-7",
				delay: 100,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					role: "tablist",
					"aria-label": "Condiciones de la piel",
					children: condiciones.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": activa === c.id,
						onClick: () => setActiva(c.id),
						className: cn("min-h-11 rounded-full border px-5 text-[0.72rem] uppercase tracking-[0.16em] transition-all duration-500", activa === c.id ? "border-charcoal bg-charcoal text-background" : "border-border text-muted-foreground hover:border-charcoal/40 hover:text-foreground"),
						children: c.label
					}, c.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 border-t border-border pt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl md:text-3xl",
							children: seleccion.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
							children: seleccion.texto
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-base btn-clay",
								children: "Solicitar valoración"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-xs text-xs leading-relaxed text-muted-foreground",
								children: "Información general de carácter demostrativo. No sustituye un diagnóstico médico presencial."
							})]
						})
					]
				})]
			})]
		})
	});
}
var dra_elena_default = "/assets/dra-elena-BSxHkXGC.jpg";
function Especialista() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "especialista",
		className: "bg-charcoal px-6 py-24 text-background md:px-10 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] items-center gap-14 md:grid-cols-12 md:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "md:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "img-zoom",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: dra_elena_default,
						alt: "Retrato profesional de la Dra. Elena Navarro, dermatóloga",
						width: 1024,
						height: 1280,
						loading: "lazy",
						className: "aspect-[4/5] w-full object-cover"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "md:col-span-6 md:col-start-7",
				delay: 120,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow !text-background/60",
						children: "Especialista"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05]",
						children: "Dra. Elena Navarro"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm uppercase tracking-[0.2em] text-background/60",
						children: "Dermatóloga certificada"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-xl leading-relaxed text-background/80",
						children: "La Dra. Navarro dedica su práctica a la dermatología clínica y estética con un enfoque basado en evidencia. Su método parte de un diagnóstico preciso y de explicar con claridad cada opción, para que las decisiones se tomen con información y sin prisas."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl leading-relaxed text-background/80",
						children: "Prioriza resultados naturales, planes sostenibles en el tiempo y un acompañamiento cercano en cada etapa del tratamiento."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-xs text-background/50",
						children: "Perfil ficticio creado con fines demostrativos."
					})
				]
			})]
		})
	});
}
var pasos = [
	{
		n: "01",
		t: "Escuchamos",
		d: "Conocemos tu historia, tus antecedentes y lo que te gustaría mejorar, sin apresurar decisiones."
	},
	{
		n: "02",
		t: "Diagnosticamos",
		d: "Valoramos tu piel con exploración clínica y dermatoscopia para entender qué está ocurriendo."
	},
	{
		n: "03",
		t: "Diseñamos tu tratamiento",
		d: "Definimos un plan por etapas, con indicaciones claras y expectativas realistas."
	},
	{
		n: "04",
		t: "Acompañamos tu evolución",
		d: "Damos seguimiento y ajustamos el plan según la respuesta de tu piel en el tiempo."
	}
];
function Metodologia() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background px-6 py-24 md:px-10 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Metodología"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05]",
					children: "Un proceso claro, de principio a fin"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-4",
				children: pasos.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					as: "li",
					delay: i * 90,
					className: "group bg-background p-8 transition-colors duration-500 hover:bg-sand/60 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-4xl text-clay",
							children: p.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 font-display text-2xl leading-tight",
							children: p.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: p.d
						})
					]
				}, p.n))
			})]
		})
	});
}
var modulos = [
	{
		img: piel_clara_default,
		alt: "Piel de aspecto uniforme tras seguimiento dermatológico",
		titulo: "Control de acné",
		meta: "Seguimiento simulado · 6 meses",
		texto: "Menor inflamación y mejor textura reportada durante el seguimiento del plan."
	},
	{
		img: rejuvenecimiento_default,
		alt: "Perfil de mujer con piel luminosa",
		titulo: "Pigmento y luminosidad",
		meta: "Seguimiento simulado · 4 meses",
		texto: "Tono más uniforme acompañado de fotoprotección diaria constante."
	},
	{
		img: consulta_default,
		alt: "Valoración dermatológica con dermatoscopio",
		titulo: "Valoración y seguimiento",
		meta: "Consulta demostrativa",
		texto: "Documentación clínica para comparar la evolución en cada revisión."
	}
];
var testimonios = [
	{
		texto: "Salí de la consulta entendiendo por fin qué le pasaba a mi piel y qué esperar en los próximos meses.",
		autor: "Mariana R.",
		ciudad: "Zapopan"
	},
	{
		texto: "Me explicaron cada paso sin prometer milagros. Eso fue justo lo que me dio confianza para empezar.",
		autor: "Daniel V.",
		ciudad: "Guadalajara"
	},
	{
		texto: "El seguimiento hizo la diferencia: ajustaron el plan cuando mi piel reaccionó distinto a lo esperado.",
		autor: "Paola G.",
		ciudad: "Tlaquepaque"
	}
];
function Resultados() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "resultados",
		className: "bg-sand/50 px-6 py-24 md:px-10 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Resultados y confianza"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05]",
						children: "Procesos documentados, expectativas honestas"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-10 md:grid-cols-3",
					children: modulos.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 100,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "img-zoom",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: m.img,
									alt: m.alt,
									loading: "lazy",
									className: "aspect-[4/5] w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mt-6",
								children: m.meta
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl",
								children: m.titulo
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: m.texto
							})
						]
					}, m.titulo))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-12 border-t border-border pt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-sm leading-relaxed text-muted-foreground",
						children: "Cada piel responde de manera diferente. Los resultados dependen de la valoración y del tratamiento indicado. Las imágenes y seguimientos mostrados son material demostrativo."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-24 grid gap-10 md:grid-cols-3",
					children: testimonios.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 100,
						className: "border-t border-charcoal/20 pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "font-display text-xl leading-snug md:text-2xl",
								children: [
									"“",
									t.texto,
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-foreground",
								children: t.autor
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
								children: t.ciudad
							})
						]
					}, t.autor))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Testimonios de carácter demostrativo. No corresponden a pacientes reales ni a reseñas verificadas."
					})
				})
			]
		})
	});
}
function CtaClinica() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacto",
		className: "bg-background px-6 py-24 md:px-10 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.03]",
					children: "Comienza una nueva etapa para tu piel."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
					children: "Agenda una valoración personalizada y descubre el tratamiento adecuado para ti."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: WHATSAPP_URL,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "btn-base btn-clay mt-10 !min-h-14 !px-10 !text-[0.8rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Solicitar valoración por WhatsApp"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-xs text-muted-foreground",
					children: "Número de contacto ficticio para fines demostrativos."
				})
			] })
		})
	});
}
function FooterClinica() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-charcoal px-6 py-20 text-background md:px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl tracking-[0.18em]",
								children: "ÁUREA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-background/60",
								children: "Dermatología"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xs text-sm leading-relaxed text-background/70",
								children: "Dermatología clínica y estética con enfoque personalizado en Guadalajara."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow !text-background/50",
							children: "Contacto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "mt-5 space-y-2 text-sm not-italic text-background/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Av. Pablo Neruda 2510, Providencia" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "44630 Guadalajara, Jalisco" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tel. +52 33 0000 0000" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow !text-background/50",
							children: "Horarios"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-2 text-sm text-background/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Lun – Vie · 9:00 a 19:00" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sábado · 9:00 a 14:00" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Domingo · Cerrado" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow !text-background/50",
								children: "Navegación"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 grid grid-cols-2 gap-2 text-sm text-background/75",
								children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: l.href,
									className: "link-underline",
									children: l.label
								}) }, l.href))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-6 flex gap-5 text-sm text-background/75",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contacto",
									className: "link-underline",
									children: "Instagram"
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contacto",
									className: "link-underline",
									children: "Facebook"
								}) })]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col gap-3 border-t border-background/15 pt-6 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ÁUREA Dermatología. Clínica ficticia."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contacto",
						className: "link-underline",
						children: "Aviso de privacidad"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contacto",
						className: "link-underline",
						children: "Términos"
					})]
				})]
			})]
		})
	});
}
function BloqueVende24() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-sand px-6 py-20 md:px-10 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "grid gap-10 md:grid-cols-12 md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Vende24Siete"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05]",
							children: "Tu clínica también puede proyectar este nivel."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl leading-relaxed text-muted-foreground",
							children: "Así de bien puede verse tu imagen en un sitio web diseñado para generar confianza, destacar tus servicios y convertir visitas en nuevos pacientes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl leading-relaxed text-muted-foreground",
							children: "Creamos experiencias digitales profesionales para clínicas y negocios que quieren crecer."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5 md:text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://vende24siete.com/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "btn-base btn-outline-ink",
						children: "Quiero una propuesta para mi negocio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground",
						children: "Demo conceptual creado por Vende24Siete"
					})]
				})]
			})
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Servicios, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Condiciones, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Especialista, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metodologia, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Resultados, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaClinica, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterClinica, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BloqueVende24, {})
	] });
}
//#endregion
export { Index as component };
