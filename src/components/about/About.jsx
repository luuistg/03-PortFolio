import { Badge } from "../shared/Badge"

export function About(){
    return(
        
        <section id="about" className="max-w-2xl mx-auto pt-32 pb-10 px-6 space-y-6">
        <h1 className="text-5xl font-bold text-gray-100 flex items-center">
            Hey, soy Luis
            <Badge  text="En Formación" className="bg-yellow-400/10 text-green-400 ring-green-500/20 text-sm"/>
        </h1>

        <h2 className="text-lg text-gray-200 leading-relaxed">
            Soy un desarrollador Junior, de Murcia, España.  
            En la recta final de mi formación con ganas de 
            aprender y crecer en este mundo del desarrollo.
        </h2>
            <Badge text="tortosagonzalezluis@gmail.com" 
                    className="bg-indigo-400/10 text-indigo-400 ring-indigo-500/20 text-sm
                    transition-all duration-200 ease-out
                    hover:bg-indigo-500/30 hover:text-white 
                    hover:scale-105 hover:shadow-[0_0_10px_rgba(99,102,241,0.6)]" 
                    href="mailto:tortosagonzalezluis@gmail.com"/>
            <Badge text="linkedIn" 
                    className="bg-slate-400/10 text-slate-400 ring-slate-500/20 text-sm
                    transition-all duration-200 ease-out
                    hover:bg-slate-500/30 hover:text-white 
                    hover:scale-105 hover:shadow-[0_0_10px_rgba(148,163,184,0.6)]" 
                    href="https://www.linkedin.com/in/luis-tortosa-gonzalez/"/>
        </section>
        
    )
}