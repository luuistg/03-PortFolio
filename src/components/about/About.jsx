import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import { Badge } from "../shared/Badge"
import { Experience } from "../experience/Experience"
import cvImage from "../../assets/fotoCV.webp"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const PAGE_BG = "#232267"

export function About() {
    const heroRef = useRef(null)
    const textRef = useRef(null)
    const coinRef = useRef(null)
    const photoRef = useRef(null)
    const maskRef = useRef(null)

    useGSAP(() => {
        const measure = () => {
            const el = coinRef.current
            if (!el) return { scale: 10, shift: 0 }
            const rect = el.getBoundingClientRect()
            const vw = window.innerWidth
            const vh = window.innerHeight
            const diagonal = Math.sqrt(vw * vw + vh * vh)
            return {
                scale: (diagonal / rect.width) * 1.2,
                shift: vw / 2 - (rect.left + rect.width / 2),
            }
        }

        const updateMask = () => {
            const coin = coinRef.current
            const mask = maskRef.current
            if (!coin || !mask) return
            const rect = coin.getBoundingClientRect()
            const cx = rect.left + rect.width / 2
            const cy = rect.top + rect.height / 2
            const r = Math.max(rect.width / 2, 0)
            const grad = `radial-gradient(circle at ${cx}px ${cy}px, transparent ${r}px, ${PAGE_BG} ${r + 1.5}px)`
            mask.style.backgroundImage = grad
        }

        updateMask()

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.4,
                invalidateOnRefresh: true,
                onUpdate: updateMask,
                onRefresh: updateMask,
            },
        })

        tl.to(
            coinRef.current,
            { rotateY: 180, duration: 0.03, ease: "power2.inOut" },
            0
        )

        tl.to(
            coinRef.current,
            {
                x: () => measure().shift,
                scale: () => measure().scale,
                duration: 0.57,
                ease: "power2.inOut",
            },
            0.03
        )

        tl.to(
            textRef.current,
            { opacity: 0, duration: 0.22, ease: "none" },
            0.15
        )
    }, { scope: heroRef })

    return (
        <section
            ref={heroRef}
            id="about"
            className="relative h-[380vh] w-full"
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* z-0: Experience real como fondo (única instancia) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Experience />
                </div>

                {/* z-10: Overlay opaco con hueco circular que sigue al coin */}
                <div
                    ref={maskRef}
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `radial-gradient(circle at 50% 50%, transparent 128px, ${PAGE_BG} 129.5px)`,
                    }}
                />

                {/* z-20: Contenido del hero (texto + coin) */}
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="w-full max-w-5xl px-6 flex flex-col md:flex-row items-center gap-12">

                        <div ref={textRef} className="flex-1 space-y-4 md:space-y-6 pointer-events-auto">
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-100 flex flex-wrap items-center">
                                Hola, soy Luis
                                <Badge
                                    text="En Formación"
                                    className="bg-yellow-400/10 text-green-400 ring-green-500/20 text-xs md:text-sm"
                                />
                            </h1>

                            <h2 className="text-base md:text-lg text-gray-200 leading-relaxed">
                                Apunto de terminar mi formación, en Murcia, España.
                                Soy un desarrollador full stack con ganas de
                                aprender y crecer en este mundo.
                            </h2>

                            <div className="flex flex-wrap gap-4">
                                <Badge
                                    text="Gmail"
                                    className="bg-indigo-400/10 text-indigo-400 ring-indigo-500/20 text-sm
                                    transition-all duration-200 ease-out
                                    hover:bg-indigo-500/30 hover:text-white
                                    hover:scale-105 hover:shadow-[0_0_10px_rgba(99,102,241,0.6)]"
                                    href="mailto:tortosagonzalezluis@gmail.com"
                                />
                                <Badge
                                    text="LinkedIn"
                                    className="bg-slate-400/10 text-slate-400 ring-slate-500/20 text-sm
                                    transition-all duration-200 ease-out
                                    hover:bg-slate-500/30 hover:text-white
                                    hover:scale-105 hover:shadow-[0_0_10px_rgba(148,163,184,0.6)]"
                                    href="https://www.linkedin.com/in/luis-tortosa-gonzalez/"
                                />
                            </div>
                        </div>

                        <div
                            className="relative flex-shrink-0 h-48 w-48 md:h-64 md:w-64 pointer-events-auto"
                            style={{ perspective: "1200px" }}
                        >
                            <div
                                ref={coinRef}
                                className="h-full w-full rounded-full will-change-transform border-[8px] md:border-[12px]"
                                style={{
                                    borderColor: "#0f0d3a",
                                    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.55)",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <img
                                    ref={photoRef}
                                    src={cvImage}
                                    alt="Luis Tortosa"
                                    className="w-full h-full object-cover rounded-full"
                                    style={{
                                        backfaceVisibility: "hidden",
                                        WebkitBackfaceVisibility: "hidden",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
