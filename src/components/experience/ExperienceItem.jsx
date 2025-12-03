
import { Typewriter } from 'react-simple-typewriter'
import { useInView } from 'react-intersection-observer'

export function ExperienceItem({date, title, place, description, placeLink, moreInfoLink}) {

    const { ref, inView } = useInView({ triggerOnce: true })

    return(
        <li ref={ref} className="mb-10 ms-4 relative view-animate-single animate-blink ">

            <div className="absolute w-3 h-3 bg-indigo-400 rounded-full mt-1.5 -left-5.5 border border-indigo-600"></div>

            <time className="text-sm font-normal leading-none text-gray-400">
                {date}
            </time>

            <h3 className="text-lg font-semibold text-gray-100 my-2">
                {title}{" "}
                <a
                className="text-indigo-400 hover:text-indigo-300 underline"
                rel="noopener noreferrer"
                target="_blank"
                href={placeLink}

                >
                {inView && (
                    <Typewriter
                    words={[place]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    cursorBlinking={true}
                    cursorColor="indigo"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                )}
                </a>
            </h3>

            <p className="mb-4 text-base font-normal text-gray-300">
                {description}
            </p>

            {moreInfoLink && (
                <a
                href={moreInfoLink}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center text-gray-200 bg-indigo-500/20 
                        border border-indigo-500/30 hover:bg-indigo-500/30 
                        hover:text-white focus:ring-4 focus:ring-indigo-600/40 
                        shadow-xs font-medium leading-5 rounded-md text-sm 
                        px-4 py-2.5 focus:outline-none transition-colors"
            >
                Saber más
                <svg
                className="w-4 h-4 ms-1.5 -me-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                />
                </svg>
            </a>
            )}
        </li>

    )
}