import { useState, useEffect } from "react";
import { NavLink } from './NavLink.jsx'

export function Header(){

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const updateVisibility = () => {
            const contact = document.getElementById("contact");
            if (!contact) {
                setVisible(false);
                return;
            }
            const rect = contact.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;
            setVisible(inView);
        };

        updateVisibility();
        window.addEventListener("scroll", updateVisibility, { passive: true });
        window.addEventListener("resize", updateVisibility);
        return () => {
            window.removeEventListener("scroll", updateVisibility);
            window.removeEventListener("resize", updateVisibility);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full
                        flex flex-row place-content-center gap-8 p-4
                        shadow-md z-50 bg-indigo-950 backdrop-blur-md
                        transition-all duration-500 ease-out
                        ${visible
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-full opacity-0 pointer-events-none"
                        }`}
        >
            <NavLink to="#about">Sobre</NavLink>
            <NavLink to="#experience">Experiencia</NavLink>
            <NavLink to="#projects">Proyectos</NavLink>
            <NavLink to="#contact">Contacto</NavLink>
        </header>
    )
}