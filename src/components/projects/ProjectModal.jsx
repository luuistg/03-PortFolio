import { useEffect } from "react";

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

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl aspect-square max-h-[90vh] bg-[#1a1a52] border border-indigo-500/40 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
          aria-label="Cerrar"
        >
          ✕
        </button>

        <div className="w-full flex-[3] overflow-hidden bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full flex-[2] p-6 md:p-7 flex flex-col gap-4 overflow-y-auto">
          <div className="flex flex-wrap gap-2">
            {(project.technologies || []).map((tech, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-xs md:text-sm font-semibold uppercase ${
                  SOLID_TECH_COLORS[tech.name] || "bg-indigo-500 text-white"
                }`}
              >
                {tech.name}
              </span>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 leading-tight">
            {project.title}
          </h3>

          <p className="text-base text-gray-200 leading-relaxed flex-1">
            {project.description}
          </p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-colors self-start"
          >
            Ver repositorio
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
