import { ExperienceItem } from "./ExperienceItem.jsx"
import experienceInfo from "../../util/experienceInfo.js"

const BASE_DELAY_MS = 3200
const STAGGER_MS = 1400

export function Experience(){
    return(
        <section
            id="experience"
            className="w-full max-w-4xl mx-auto py-28 px-6 space-y-6"
        >
            <div className="border-l-4 border-indigo-500 pl-3 mb-6">
                <span className="text-indigo-400 font-semibold uppercase tracking-wide">
                    Experiencia
                </span>
            </div>


            <ol className="relative border-s border-default">

                {experienceInfo.slice().reverse().map((item, index) => (
                    <ExperienceItem
                        key={index}
                        date={item.date}
                        title={item.title}
                        place={item.place}
                        description={item.description}
                        placeLink={item.placeLink}
                        moreInfoLink={item.moreInfoLink}
                        delayMs={BASE_DELAY_MS + index * STAGGER_MS}
                    />
                ))}
            </ol>
    </section>
    )
}
