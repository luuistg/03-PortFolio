import { StackIcons } from "../../icons/StackIcons";

const STACK_COLORS = {
  React: "#61DAFB",
  Java: "#E76F00",
  JavaScript: "#F7DF1E",
  C: "#A8B9CC",
  CSharp: "#512BD4",
  CSS: "#1572B6",
  HTML: "#E34F26",
  TailwindCSS: "#06B6D4",
  PostgreSQL: "#336791",
  Git: "#F05032",
  Docker: "#2496ED",
  Vite: "#646CFF",
};

export function StackSection() {
  return (
    <div className="w-full h-full bg-[#15153f] p-4 md:p-6">
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 h-full">
        {StackIcons.map((icon) => {
          const color = STACK_COLORS[icon.name] || "#818cf8";
          return (
            <div
              key={icon.name}
              className="group relative flex flex-col items-center justify-center gap-3 p-4 bg-white/[0.04] border transition-all duration-300 hover:bg-white/10 [&>svg]:w-10 [&>svg]:h-10 md:[&>svg]:w-14 md:[&>svg]:h-14 lg:[&>svg]:w-20 lg:[&>svg]:h-20"
              style={{ borderColor: `${color}40` }}
            >
              <span
                className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: color }}
              />

              {icon.svg}

              <span className="text-xs md:text-sm lg:text-base font-semibold tracking-wide text-gray-200 group-hover:text-white transition-colors text-center">
                {icon.name}
              </span>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border"
                style={{
                  boxShadow: `inset 0 0 60px -12px ${color}99`,
                  borderColor: color,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
