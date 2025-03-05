import React from "react";
import { FaWindows, FaNetworkWired, FaTools, FaLaptopMedical } from "react-icons/fa";
import { SiAnydesk, SiTeamviewer, SiVirtualbox } from "react-icons/si";
import { MdOutlineSecurity, MdOutlineSettingsApplications } from "react-icons/md";

const itSupportSkills = [
    { category: "Operating System", skills: [{ name: "Windows", icon: <FaWindows className="text-blue-500 text-6xl" /> }] },
    {
        category: "Virtualization",
        skills: [{ name: "Oracle VirtualBox", icon: <SiVirtualbox className="text-green-700 text-6xl" /> }]
        
    },
    {
        category: "Support Tools",
        skills: [
            { name: "TeamViewer", icon: <SiTeamviewer className="text-blue-400 text-6xl" /> },
            { name: "AnyDesk", icon: <SiAnydesk className="text-red-500 text-6xl" /> },
        ]
    },
    {
        category: "Network & Security",
        skills: [
            { name: "Network Troubleshooting", icon: <FaNetworkWired className="text-green-500 text-6xl" /> },
            { name: "Cybersecurity Awareness", icon: <MdOutlineSecurity className="text-gray-400 text-6xl" /> },
        ]
    },
    {
        category: "Hardware & Software",
        skills: [
            { name: "Printer & Peripheral Setup", icon: <FaTools className="text-yellow-500 text-6xl" /> },
            { name: "Desktop & Laptop Diagnosis", icon: <FaLaptopMedical className="text-red-400 text-6xl" /> },
            { name: "Software Installation", icon: <MdOutlineSettingsApplications className="text-gray-400 text-6xl" /> },
            
        ]
    },
];

const ITSupportStack = () => {
    return (
        <div id="it-support" className="p-10 text-center bg-gray-900 text-white">
            <h2 className="text-5xl font-extrabold text-blue-400 mb-10 uppercase tracking-wider">
                IT Support Skills
            </h2>

            {itSupportSkills.map((section, index) => (
                <div key={index} className="mb-12">
                    <h3 className="text-3xl font-semibold text-gray-300 mb-8 uppercase">{section.category}</h3>

                    {/* Centered Grid Layout */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {section.skills.map((skill, skillIndex) => (
                            <div
                                key={skillIndex}
                                className="group flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg 
                                    transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50 w-36 h-36"
                            >
                                <div className="text-5xl group-hover:animate-bounce">
                                    {skill.icon}
                                </div>
                                <p className="text-white mt-2 font-semibold text-center">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ITSupportStack;
