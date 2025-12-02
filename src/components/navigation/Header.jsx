import { useState, useEffect } from "react";
import { NavLink } from './NavLink.jsx'

export function Header(){

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={` fixed top-0 left-0 w-full
                            flex flex-row place-content-center gap-8 p-4 
                            shadow-md z-50
                            ${scrolled 
                            ? "bg-indigo-950 backdrop-blur-md" 
                            : "bg-transparent"
                            }`}>

            <NavLink to="#about">About</NavLink>
            <NavLink to="#experience">Experience</NavLink>
            <NavLink to="#projects">Projects</NavLink>
            <NavLink to="#contact">Contact</NavLink>
        </header>
    )
}