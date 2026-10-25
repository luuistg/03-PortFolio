import { useEffect } from "react";

export function CertificateModal({ cert, onClose }) {
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
      className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-[90vh] bg-[#1a1a52] border border-indigo-500/40 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center bg-black/70 text-white hover:bg-black/90 transition-colors cursor-pointer"
          aria-label="Cerrar"
        >
          ✕
        </button>

        <iframe
          src={`${cert.link}#toolbar=0&navpanes=0&scrollbar=0&pagemode=none&view=Fit`}
          className="w-full h-full border-0 bg-white"
          title={cert.name}
        />
      </div>
    </div>
  );
}
