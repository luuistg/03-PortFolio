import { useState } from "react";
import { CertificateModal } from "./CertificateModal.jsx";

const certifications = [
  {
    name: "Java SE 7 Programmer",
    issuer: "Oracle",
    date: "2025-11-24",
    link: "certifications/POO.pdf",
  },
  {
    name: "Redes empresariales, Seguridad y Automatización",
    issuer: "Cisco Networking Academy",
    date: "2025-11-21",
    link: "certifications/TAC.pdf",
  },
  {
    name: "Desarrollo de Unidades de Programa en PL/SQL",
    issuer: "Oracle",
    date: "2024-11-08",
    link: "certifications/SGI.pdf",
  },
];

export function CertificatesSection() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="w-full h-full flex flex-col md:flex-row bg-[#1a1a52] overflow-hidden">
        {certifications.map((cert, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelected(cert)}
            className="group relative w-full md:w-1/3 h-1/3 md:h-full overflow-hidden border-b-4 last:border-b-0 md:border-b-0 md:border-r-4 md:last:border-r-0 border-black cursor-pointer text-left"
          >
            <iframe
              src={`${cert.link}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              className="absolute inset-0 w-full h-full pointer-events-none border-0"
              style={{ filter: "blur(6px)", transform: "scale(1.15)" }}
              title=""
              aria-hidden="true"
              tabIndex={-1}
            />

            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors pointer-events-none" />

            <div className="relative z-10 h-full p-5 md:p-8 lg:p-10 flex flex-col justify-between">
              <div className="space-y-3 md:space-y-5">
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-indigo-300">
                  {cert.issuer}
                </span>
                <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-black uppercase tracking-tight leading-tight text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                  {cert.name}
                </h3>
              </div>

              <div className="space-y-3 md:space-y-5">
                <p className="text-xs md:text-sm text-gray-300 font-mono drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                  {cert.date}
                </p>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-yellow-400 text-black font-black uppercase text-xs md:text-sm border-2 border-black group-hover:bg-yellow-300 transition-colors self-start">
                  Ver certificado →
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <CertificateModal cert={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
