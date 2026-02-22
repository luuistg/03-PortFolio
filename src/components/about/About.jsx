import { Badge } from "../shared/Badge"

export function About(){
    return(
        
        <section id="about" className="w-full pt-74 pb-54 px-6 ">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-6 animate-slide-in-right">
                    <h1 className="text-5xl font-bold text-gray-100 flex items-center animate-duration-slow">
                        Hola, soy Luis
                        <Badge
                        text="En Formación"
                        className="bg-yellow-400/10 text-green-400 ring-green-500/20 text-sm"
                        />
                    </h1>

                    <h2 className="text-lg text-gray-200 leading-relaxed">
                        Apunto de terminar mi formación, en Murcia, España.  
                        Soy un desarrollador full stack con ganas de 
                        aprender y crecer en este mundo.
                    </h2>

                    <div className="flex flex-wrap gap-4">
                        <Badge
                        text="Gmail"
                        className="bg-indigo-400/10 text-indigo-400 ring-indigo-500/20 text-sm
                        transition-all duration-200 ease-out
                        hover:bg-indigo-500/30 hover:text-white 
                        hover:scale-105 hover:shadow-[0_0_10px_rgba(99,102,241,0.6)]
                        animate-expand-horizontally"
                        href="mailto:tortosagonzalezluis@gmail.com"
                        />
                        <Badge
                        text="LinkedIn"
                        className="bg-slate-400/10 text-slate-400 ring-slate-500/20 text-sm
                        transition-all duration-200 ease-out
                        hover:bg-slate-500/30 hover:text-white 
                        hover:scale-105 hover:shadow-[0_0_10px_rgba(148,163,184,0.6)]
                        animate-expand-horizontally"
                        href="https://www.linkedin.com/in/luis-tortosa-gonzalez/"
                        />
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <img
                        src="https://img.freepik.com/vector-premium/icono-simbolo-sombra-perfil-usuario-ilustracion-vector-aislado_34480-596.jpg"
                        alt="miFoto"
                        className="rounded-full shadow-lg border border-indigo-500 h-64 w-64 animate-flip-x animate-delay-100"
                    />
                </div>
            </div>
        </section>
        
    )
}