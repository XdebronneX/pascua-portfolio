// import React from "react";
// import { Card } from "primereact/card";
// import { FaWindows, FaNetworkWired, FaTools, FaLaptopMedical } from "react-icons/fa";
// import { SiAnydesk, SiTeamviewer } from "react-icons/si";
// import { MdSecurity, MdSettings } from "react-icons/md";

// const itSupportSkills = [
//     { category: "Operating System", skills: [{ name: "Windows", icon: <FaWindows className="text-blue-500 text-5xl" /> }] },

//     {
//         category: "Support Tools", skills: [
//             { name: "TeamViewer", icon: <SiTeamviewer className="text-blue-400 text-5xl" /> },
//             { name: "AnyDesk", icon: <SiAnydesk className="text-red-500 text-5xl" /> },
//         ]
//     },

//     {
//         category: "Network & Security", skills: [
//             { name: "Network Troubleshooting", icon: <FaNetworkWired className="text-green-500 text-5xl" /> },
//             { name: "Cybersecurity Awareness & Threat Mitigation", icon: <MdSecurity className="text-gray-600 text-5xl" /> },
//         ]
//     },

//     {
//         category: "Hardware & Software Troubleshooting", skills: [
//             { name: "Printer & Peripheral Setup", icon: <FaTools className="text-yellow-500 text-5xl" /> },
//             { name: "Desktop & Laptop Diagnosis", icon: <FaLaptopMedical className="text-red-400 text-5xl" /> },
//             { name: "Software Installation & Configuration", icon: <MdSettings className="text-gray-700 text-5xl" /> },
//         ]
//     },
// ];

// const ITSupportStack = () => {
//     return (
//         <div id="it-support" className="p-6 text-center">
//             <h2 className="text-4xl font-bold text-gray-700 mb-6">IT Support Skills</h2>

//             {itSupportSkills.map((section, index) => (
//                 <div key={index} className="mb-6">
//                     <h3 className="text-2xl font-semibold text-gray-600 mb-4">{section.category}</h3>
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
//                         {section.skills.map((skill, skillIndex) => (
//                             <Card key={skillIndex} className="shadow-lg text-center p-4">
//                                 <div className="flex flex-col items-center">
//                                     {skill.icon}
//                                     <p className="mt-2 font-semibold">{skill.name}</p>
//                                 </div>
//                             </Card>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ITSupportStack;

import React from "react";
import { Card } from "primereact/card";
import { FaWindows, FaNetworkWired, FaTools, FaLaptopMedical } from "react-icons/fa";
import { SiAnydesk, SiTeamviewer } from "react-icons/si";
import { MdSecurity, MdSettings } from "react-icons/md";

const itSupportSkills = [
    { category: "Operating System", skills: [{ name: "Windows", icon: <FaWindows className="text-blue-500 text-6xl" /> }] },

    {
        category: "Support Tools", skills: [
            { name: "TeamViewer", icon: <SiTeamviewer className="text-blue-400 text-6xl" /> },
            { name: "AnyDesk", icon: <SiAnydesk className="text-red-500 text-6xl" /> },
        ]
    },

    {
        category: "Network & Security", skills: [
            { name: "Network Troubleshooting", icon: <FaNetworkWired className="text-green-500 text-6xl" /> },
            { name: "Cybersecurity Awareness", icon: <MdSecurity className="text-gray-600 text-6xl" /> },
        ]
    },

    {
        category: "Hardware & Software", skills: [
            { name: "Printer & Peripheral Setup", icon: <FaTools className="text-yellow-500 text-6xl" /> },
            { name: "Desktop & Laptop Diagnosis", icon: <FaLaptopMedical className="text-red-400 text-6xl" /> },
            { name: "Software Installation", icon: <MdSettings className="text-gray-700 text-6xl" /> },
        ]
    },
];

const ITSupportStack = () => {
    return (
        <div id="it-support" className="p-8 text-center bg-gray-900 text-white">
            <h2 className="text-4xl font-bold text-blue-400 mb-8 uppercase tracking-wider">
                IT Support Skills
            </h2>

            {itSupportSkills.map((section, index) => (
                <div key={index} className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-300 mb-6">{section.category}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {section.skills.map((skill, skillIndex) => (
                            <Card key={skillIndex} className="shadow-md bg-gray-800 p-6 rounded-lg text-center">
                                <div className="flex flex-col items-center">
                                    {skill.icon}
                                    <p className="mt-3 text-lg font-semibold text-gray-700">{skill.name}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ITSupportStack;
