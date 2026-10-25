import { About } from "./about/About"
import { Projects } from "./projects/Projects"
import { Contact } from "./contact/Contact"

export function Main() {
    return (
        <main className="flex-1">
            <About />
            <Projects />
            <Contact />
        </main>
    )
}