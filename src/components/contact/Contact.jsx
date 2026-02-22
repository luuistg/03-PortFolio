import React, { useState } from 'react';

const formId = import.meta.env.VITE_FORMSPREE_ID;

const validate = (formData, setErrors) => {
    let newErrors = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.message || formData.message.length < 10) newErrors.message = true;
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = true;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true si no hay errores
};

export function Contact() {
    // 1. Movemos los estados DENTRO del componente
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('idle');
    const [errors, setErrors] = useState({});

    // 2. Movemos la lógica de manejo de inputs DENTRO
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // 3. La función de envío también DENTRO para acceder a setStatus y formData directamente
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate(formData, setErrors)) return;

        setStatus('sending');

        try {
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', surname: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="max-w-4xl mx-auto pt-32 pb-10 px-6">
            <div className="flex flex-col items-center gap-8">
                <h1 className="text-4xl font-bold text-gray-100">Contacto</h1>
                
                {/* Eliminamos el <p> y usamos un div contenedor */}
                <div className="w-full max-w-3xl"> 
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                placeholder="Nombre" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange}
                                className={`w-full bg-transparent border-b-2 px-0 py-3 rounded-none outline-none transition-all duration-300
                                        ${errors.name 
                                            ? 'border-red-500 text-red-400' 
                                            : 'border-indigo-400 text-indigo-400 focus:border-indigo-600 hover:border-indigo-300'
                                        }`}
                            />
                            <input 
                                type="text" 
                                placeholder="Apellidos" 
                                name="surname" 
                                value={formData.surname} 
                                onChange={handleChange}
                                className={`w-full bg-transparent border-b-2 px-0 py-3 rounded-none outline-none transition-all duration-300
                                        ${errors.surname 
                                            ? 'border-red-500 text-red-400' 
                                            : 'border-indigo-400 text-indigo-400 focus:border-indigo-600 hover:border-indigo-300'
                                        }`} 
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input 
                                type="email" 
                                placeholder="Correo Electrónico" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange}
                                className={`w-full bg-transparent border-b-2 px-0 py-3 rounded-none outline-none transition-all duration-300
                                        ${errors.email 
                                            ? 'border-red-500 text-red-400' 
                                            : 'border-indigo-400 text-indigo-400 focus:border-indigo-600 hover:border-indigo-300'
                                        }`} 
                            />
                            <div className="relative">
                                <select 
                                    name="subject" 
                                    value={formData.subject} 
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-2 rounded-3xl border-indigo-400 px-4 py-3 text-indigo-400 outline-none focus:ring-0 focus:border-indigo-600 hover:border-indigo-300 transition-all duration-300 appearance-none cursor-pointer"
                                >
                                    <option value="" disabled className="bg-[#0f0721] text-gray-400">Asunto</option>
                                    <option value="Contacto" className="bg-[#0f0721] text-white">Contacto</option>
                                    <option value="Oferta" className="bg-[#0f0721] text-white">Oferta de Empleo</option>
                                    <option value="Otro" className="bg-[#0f0721] text-white">Otro</option>
                                </select>
                                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-indigo-400 text-xl">⌄</span>
                            </div>
                        </div>

                        <div className="w-full">
                            <textarea 
                                rows="5" 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-transparent border rounded-lg border-indigo-400 focus:outline-none transition-all resize-none text-indigo-400 focus:ring-0 focus:border-indigo-600 hover:border-indigo-300 duration-300" 
                                placeholder="Mensaje"
                            ></textarea>
                        </div>

                        <div className="flex justify-end items-center gap-4">
                            {status === 'success' && <span className="text-green-400 animate-fade-in text-sm">¡Enviado con éxito!</span>}
                            {status === 'error' && <span className="text-red-400 text-sm">Algo falló...</span>}
                            
                            <button 
                                type="submit" 
                                disabled={status === 'sending'}
                                className="inline-flex items-center text-gray-200 bg-indigo-500/20 border border-indigo-500/30 hover:bg-indigo-500/30 hover:text-white focus:ring-4 focus:ring-indigo-600/40 font-medium rounded-md text-sm px-6 py-2.5 transition-all disabled:opacity-50"
                            >
                                {status === 'sending' ? 'Enviando...' : 'Enviar'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}