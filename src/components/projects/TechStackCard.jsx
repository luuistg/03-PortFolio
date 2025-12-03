import {StackIcons} from '../../icons/StackIcons'

export function TechStackCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-6 animate-zoom-in animate-duration-slow">
            {StackIcons.map((icon) => (
                <div
                    key={icon.name}
                    className="aspect-square flex flex-col items-center gap-4 p-4 rounded-lg bg-indigo-800/30 hover:bg-indigo-700 border-2 border-solid border-indigo-700 transition hover:scale-105 shadow-md"
                    >
                    {icon.svg}
                    <span className="text-sm text-gray-300">{icon.name}</span>
                </div>
            ))}
        </div>
    )
}