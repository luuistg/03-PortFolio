import { ExperienceItem } from "./ExperienceItem.jsx"
import experienceInfo from "../../util/experienceInfo.js"

export function Experience(){
    return(
        <section id="experience" className="max-w-2xl mx-auto py-28 px-6 space-y-6">
            <div className="border-l-4 border-indigo-500 pl-3 mb-6">
                <span className="text-indigo-400 font-semibold uppercase tracking-wide">
                    Experiencia
                </span>
            </div>


            <ol class="relative border-s border-default">   

                {experienceInfo.slice().reverse().map((item, index) => (
                    <ExperienceItem 
                        key={index}             
                        date={item.date}
                        title={item.title}
                        place={item.place}
                        description={item.description}
                        placeLink={item.placeLink}
                        moreInfoLink={item.moreInfoLink}
                    />
                ))}
            </ol>
    </section>
    )
}   