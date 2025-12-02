import { useState } from "react";
import { ProjectCard } from "./ProjectCard.jsx";
import { CertificatesCard } from "./CertificatesCard.jsx";
import { TechStackCard } from "./TechStackCard.jsx";
import projects from "../../util/projectsInfo.js";

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
    <div className="w-full max-w-screen-xl mx-auto px-6">
        <div className="flex justify-center gap-4 mb-4">
        {tabs.map((tab) => (
            <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all
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
            {activeTab === "Proyectos" && 
                <div 
                    key={activeTab}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-zoom-in animate-duration-slow">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} className={`view-animate-single animate-zoom-in duration-700 delay-200`} />
                    ))}
                </div>
            }
            {activeTab === "Certificaciones" && 
                <div className="flex justify-center"><CertificatesCard /></div>
            }
            {activeTab === "Stack" && 
                <div className="flex justify-center"><TechStackCard /></div>
            }
        </div>
    </div>
  );
}       