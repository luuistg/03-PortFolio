import { ExperienceItem } from "./ExperienceItem"

export function Experience(){
    return(
        <section id="experience" className="max-w-2xl mx-auto py-32 px-6 space-y-6">
            <h1 className="text-5xl font-bold text-gray-100">Experiencia</h1>

            <ol class="relative border-s border-default">                  
                <ExperienceItem/>
            </ol>
    </section>
    )
}