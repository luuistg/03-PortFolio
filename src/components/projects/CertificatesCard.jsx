const certifications = [
  {
    name: "Java SE 7 Programmer",
    issuer: "Oracle",
    date: "2025-11-24",
    link: "certifications/POO.pdf"
  },
  {
    name: "Redes empresariales, Seguridad y Automatización",
    issuer: "Cisco Networking Academy",
    date: "2025-11-21",
    link: "certifications/TAC.pdf"
  },
  {
    name: "Desarrollo de Unidades de Programa en PL/SQL",
    issuer: "Cisco Networking Academy",
    date: "2024-11-08",
    link: "certifications/SGI.pdf"
  }
];

export function CertificatesCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {certifications.map((cert, index) => (
        <a
          key={index}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group flex flex-col gap-3 w-full
            bg-white/10 p-4 rounded-lg 
            border border-white/10 
            hover:border-indigo-500/20 
            hover:bg-indigo-400/20 
            hover:scale-105
            transition duration-200 ease-in-out
            shadow-md
            animate-zoom-in animate-duration-slow
          "
        >
          <h3 className="text-lg font-semibold text-indigo-400 group-hover:text-indigo-300 transition">
            {cert.name}
          </h3>

          <p className="text-sm text-gray-300">{cert.issuer}</p>

          <p className="text-xs text-gray-500">{cert.date}</p>

          <span className="
            mt-2 inline-block text-indigo-400 
            group-hover:text-indigo-300 
            transition-colors duration-200
          ">
            Ver certificado →
          </span>
        </a>
      ))}
    </div>
  );
}
