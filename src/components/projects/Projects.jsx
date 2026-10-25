import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { ProjectCard } from "./ProjectCard.jsx";
import { ProjectModal } from "./ProjectModal.jsx";
import { CertificatesSection } from "./CertificatesSection.jsx";
import { StackSection } from "./StackSection.jsx";
import projects from "../../util/projectsInfo.js";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SECTION_NAMES = ["Proyectos", "Certificaciones", "Stack"];
const PAUSE = 0.15;
const TRANSITION = 1;
const TOTAL_UNITS = PAUSE + (TRANSITION + PAUSE) * (SECTION_NAMES.length - 1) + PAUSE;

export function Projects() {
    const [selected, setSelected] = useState(null);
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const bottomTrackRef = useRef(null);

    useGSAP(() => {
        const dispatchEnter = () =>
            window.dispatchEvent(new CustomEvent("carousel:toggle", { detail: true }));
        const dispatchLeave = () =>
            window.dispatchEvent(new CustomEvent("carousel:toggle", { detail: false }));

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: () => `+=${window.innerWidth * TOTAL_UNITS}`,
                scrub: 0.3,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onEnter: dispatchEnter,
                onLeave: dispatchLeave,
                onEnterBack: dispatchEnter,
                onLeaveBack: dispatchLeave,
            },
        });

        tl.to({}, { duration: PAUSE });

        for (let i = 1; i < SECTION_NAMES.length; i++) {
            tl.to(
                [trackRef.current, bottomTrackRef.current],
                {
                    x: () => -window.innerWidth * i,
                    ease: "none",
                    duration: TRANSITION,
                }
            );
            tl.to({}, { duration: PAUSE });
        }
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="w-full h-screen overflow-hidden flex flex-col"
        >
            <div className="flex-1 w-full overflow-hidden min-h-0">
                <div
                    ref={trackRef}
                    className="h-full flex flex-row will-change-transform"
                    style={{ width: `${SECTION_NAMES.length * 100}vw` }}
                >
                    <div className="h-full flex flex-col md:flex-row shrink-0 overflow-hidden" style={{ width: "100vw" }}>
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                onClick={() => setSelected(project)}
                            />
                        ))}
                    </div>

                    <div className="h-full shrink-0 overflow-hidden" style={{ width: "100vw" }}>
                        <CertificatesSection />
                    </div>

                    <div className="h-full shrink-0 overflow-hidden" style={{ width: "100vw" }}>
                        <StackSection />
                    </div>
                </div>
            </div>

            <div className="w-full py-2 bg-[#1a1a52] shrink-0 overflow-hidden">
                <div
                    ref={bottomTrackRef}
                    className="flex flex-row will-change-transform"
                    style={{ width: `${SECTION_NAMES.length * 100}vw` }}
                >
                    {SECTION_NAMES.map((name) => (
                        <h2
                            key={name}
                            className="text-center text-base md:text-xl font-bold uppercase tracking-[0.4em] text-indigo-200 shrink-0"
                            style={{ width: "100vw" }}
                        >
                            {name}
                        </h2>
                    ))}
                </div>
            </div>

            {selected && (
                <ProjectModal
                    project={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </section>
    );
}
