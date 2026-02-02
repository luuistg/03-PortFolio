import { About } from "./about/About"
import { Experience } from "./experience/Experience"
import { Projects } from "./projects/Projects"
import { Contact } from "./contact/Contact"

export function Main() {
    return (
        <main className="flex-1 p-6">
            <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
                <About />
                <Experience />
            </div>
            <Projects />
            <Contact />
        </main>
    )
}