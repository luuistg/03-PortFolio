

export function ProjectCard({ project, className }) {
    return (
        <a href={project.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`
                    flex flex-row gap-4 
                    w-full
                    bg-white/10 p-4 
                    rounded-lg border border-white/10 
                    hover:border-indigo-500/20 transition hover:bg-indigo-400/20 hover:scale-105
                    shadow-md ${className}`}
        >
            <img className="w-36 h-36 object-cover rounded-md" src={project.image} alt={project.title} />
            <span>
                <h3 className="text-lg font-semibold text-indigo-400" >{project.title}</h3>
                <p className="text-indigo-300" >{project.description}</p>
            </span>

        </a>
    )
}