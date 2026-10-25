const SOLID_TECH_COLORS = {
  Java: "bg-red-500 text-white",
  Swift: "bg-orange-500 text-white",
  "C#": "bg-blue-500 text-white",
  JS: "bg-yellow-400 text-black",
  JavaScript: "bg-yellow-400 text-black",
  Python: "bg-emerald-500 text-white",
  TypeScript: "bg-sky-500 text-white",
  React: "bg-cyan-500 text-white",
};

export function ProjectCard({ project, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full md:w-1/3 h-1/3 md:h-full overflow-hidden border-b-4 last:border-b-0 md:border-b-0 md:border-r-4 md:last:border-r-0 border-black bg-black cursor-pointer text-left"
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/10 pointer-events-none" />

      <div className="absolute top-4 md:top-6 left-4 md:left-6 flex flex-wrap gap-2 z-10 transition-transform duration-300 group-hover:-translate-y-1">
        {(project.technologies || []).map((tech, index) => (
          <span
            key={index}
            className={`px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-black uppercase border-2 border-black ${
              SOLID_TECH_COLORS[tech.name] || "bg-indigo-500 text-white"
            }`}
          >
            {tech.name}
          </span>
        ))}
      </div>

      <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 text-right max-w-[90%] z-10 transition-transform duration-300 group-hover:-translate-y-1">
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-tight leading-none text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] transition-colors duration-300 group-hover:text-yellow-400">
          {project.title}
        </h3>
      </div>
    </button>
  );
}
