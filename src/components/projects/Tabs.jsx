import { useState } from "react";
import { ProjectCard } from "./ProjectCard.jsx";
import { CertificatesCard } from "./CertificatesCard.jsx";
import { TechStackCard } from "./TechStackCard.jsx";

const tabs = ["Proyectos", "Certificaciones", "Stack"];

export function Tabs({ onTabChange }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
        <div className="flex justify-center gap-4 mb-8">
        {tabs.map((tab) => (
            <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all
                ${
                    activeTab === tab
                    ? "bg-indigo-500 text-white shadow-md scale-105"
                    : "bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:text-white"
                }`}
            >
                {tab}
            </button>
        ))}
        </div>

        <div className="space-y-6">
            {activeTab === "Proyectos" && <ProjectCard />}
            {activeTab === "Certificaciones" && <CertificatesCard />}
            {activeTab === "Stack" && <TechStackCard />}
        </div>
    </div>
  );
}       