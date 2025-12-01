import { About } from "./About"
import { Experience } from "./Experience"

export function Main() {
    return (
        <main className="flex-1 flex-col p-6 place-content-center">
            <About />
            <Experience />
        </main>
    )
}