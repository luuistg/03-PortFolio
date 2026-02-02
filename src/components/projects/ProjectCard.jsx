import { Badge } from "../shared/Badge";

export function ProjectCard({ project, className }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex flex-col gap-4 
        w-full group
        bg-white/10 p-4 
        rounded-lg border border-white/10 
        hover:border-indigo-500/20 transition duration-200 ease-in-outhover:bg-indigo-400/20 hover:scale-105
        shadow-md ${className}`}
    >
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="text-lg font-semibold text-indigo-400">
          {project.title}
        </h3>
        {(project.technologies || []).map((tech, index) => (
          <Badge
            key={index}
            text={tech.name}
            className={`${tech.color} text-sm text-center transition duration-200 ease-in-out group-hover:scale-110 group-hover:shadow-md`}
          />
        ))}
      </div>

      <div className="flex flex-row gap-4 items-start">
        <img
          className="w-44 h-40 object-cover rounded-md border border-indigo-500/10 shadow-lg transition duration-200 ease-in-out group-hover:scale-110 group-hover:shadow-2xl"
          src={project.image}
          alt={project.title}
        />
        <p className="text-indigo-300 flex-1">{project.description}</p>
      </div>
    </a>
  );
}
