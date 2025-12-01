import { About } from "./about/About"
import { Experience } from "./experience/Experience"
import { Projects } from "./projects/Projects"

export function Main() {
    return (
        <main className="flex-1 flex-col p-6 place-content-center">
            <About />
            <Experience />
            <Projects />
        </main>
    )
}