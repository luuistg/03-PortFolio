import React, { useState } from 'react';

const formId = import.meta.env.VITE_FORMSPREE_ID;

const validate = (formData) => {
    const errors = {};
    if (!formData.name.trim()) errors.name = true;
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = true;
    if (!formData.message || formData.message.trim().length < 10) errors.message = true;
    return errors;
};

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('idle');
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: false }));
        }
        if (status === 'invalid' || status === 'error') {
            setStatus('idle');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validate(formData);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setStatus('invalid');
            setTimeout(() => setStatus((s) => (s === 'invalid' ? 'idle' : s)), 4000);
            return;
        }

        setErrors({});
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
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const inputBase = "w-full bg-transparent border-b-2 px-0 py-3 outline-none transition-colors duration-300 placeholder:text-gray-500";
    const inputState = (field) =>
        errors[field]
            ? "border-red-500 text-red-300 placeholder:text-red-400"
            : "border-indigo-500/40 text-gray-100 focus:border-amber-400 hover:border-indigo-400";

    return (
        <section id="contact" className="w-full py-20 md:py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="border-l-4 border-amber-400 pl-3 mb-10">
                    <span className="text-amber-400 font-semibold uppercase tracking-widest text-sm">
                        Contacto
                    </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
                    ¿Trabajamos <span className="text-amber-400">juntos</span>?
                </h2>

                <form className="space-y-10" onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={formData.name}
                            onChange={handleChange}
                            className={`${inputBase} ${inputState('name')}`}
                        />
                        <input
                            type="text"
                            name="surname"
                            placeholder="Apellidos"
                            value={formData.surname}
                            onChange={handleChange}
                            className={`${inputBase} ${inputState('surname')}`}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={formData.email}
                            onChange={handleChange}
                            className={`${inputBase} ${inputState('email')}`}
                        />
                        <div className="relative">
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className={`${inputBase} ${inputState('subject')} appearance-none cursor-pointer pr-8`}
                            >
                                <option value="" disabled className="bg-[#232267] text-gray-400">Asunto</option>
                                <option value="Contacto" className="bg-[#232267] text-white">Contacto</option>
                                <option value="Oferta" className="bg-[#232267] text-white">Oferta de Empleo</option>
                                <option value="Otro" className="bg-[#232267] text-white">Otro</option>
                            </select>
                            <span className="pointer-events-none absolute right-0 bottom-3 text-indigo-400 text-lg">⌄</span>
                        </div>
                    </div>

                    <div>
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Cuéntame qué tienes en mente (mínimo 10 caracteres)…"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-white/[0.04] border focus:outline-none transition-colors duration-300 resize-none placeholder:text-gray-500 ${
                                errors.message
                                    ? "border-red-500 text-red-300 placeholder:text-red-400"
                                    : "border-indigo-500/40 text-gray-100 focus:border-amber-400 hover:border-indigo-400"
                            }`}
                        />
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="min-h-[1.5rem] text-sm">
                            {status === 'invalid' && (
                                <span className="text-red-400">Revisa los campos marcados.</span>
                            )}
                            {status === 'success' && (
                                <span className="text-amber-400">¡Enviado con éxito!</span>
                            )}
                            {status === 'error' && (
                                <span className="text-red-400">Algo falló, inténtalo de nuevo.</span>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-black font-bold uppercase tracking-wider border-2 border-black hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        >
                            {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
                            <span className="text-lg">→</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
