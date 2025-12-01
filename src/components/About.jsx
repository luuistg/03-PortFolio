import { Badge } from "./Badge"

export function About(){
    return(
        
        <section id="about" className="max-w-2xl mx-auto py-32 px-6 space-y-6">
        <h1 className="text-5xl font-bold text-gray-100 flex items-center">
            Hey, soy Luis
            <Badge  text="En Formación" className="bg-yellow-400/10 text-green-400 ring-green-500/20 text-sm"/>
        </h1>

        <h2 className="text-lg text-gray-200 leading-relaxed">
            Soy un desarrollador Junior, de Murcia, España.  
            En la recta final de mi formación con ganas de 
            aprender y crecer en este mundo del desarrollo.
        </h2>
            <Badge text="tortosagonzalezluis@gmail.com" className="bg-indigo-400/10 text-indigo-400 ring-indigo-500/20 text-sm" href="mailto:tortosagonzalezluis@gmail.com"/>
            <Badge text="linkedIn" className="bg-slate-400/10 text-slate-400 ring-slate-500/20 text-sm" href="https://www.linkedin.com/in/luis-tortosa-gonzalez/"/>
        </section>
        
    )
}