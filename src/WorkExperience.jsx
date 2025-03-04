// import React from "react";
// import { motion } from "framer-motion";

// const workExperiences = [
//     {
//         position: "IT Support",
//         company: "Meatworld International Inc.",
//         location: "Makati City",
//         duration: "June 19 - August 20, 2024",
//     },
//     {
//         position: "Fullstack Developer",
//         company: "Cargo Pacific",
//         location: "Mandaluyong City",
//         duration: "May 13 - June 14, 2024",
//     },
// ];

// const WorkExperience = () => {
//     return (
//         <div id="work-experience" className="p-8 text-center bg-gray-50">
//             <h2 className="text-4xl font-bold text-gray-800 mb-8">Work Experience</h2>

//             <div className="max-w-3xl mx-auto space-y-6">
//                 {workExperiences.map((work, index) => (
//                     <motion.div
//                         key={index}
//                         className="bg-white shadow-md p-6 rounded-lg border-l-4 border-blue-500 text-left"
//                         whileHover={{ scale: 1.02 }}
//                     >
//                         <h3 className="text-xl font-semibold text-gray-900">{work.position}</h3>
//                         <p className="text-gray-700 text-md mt-1">{work.company} - {work.location}</p>
//                         <p className="text-gray-500 text-sm mt-2">{work.duration}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default WorkExperience;

import React from "react";
import { motion } from "framer-motion";

const workExperiences = [
    {
        position: "IT Support",
        company: "Meatworld International Inc.",
        location: "Makati City",
        duration: "June 19 - August 20, 2024",
    },
    {
        position: "Fullstack Developer",
        company: "Cargo Pacific",
        location: "Mandaluyong City",
        duration: "May 13 - June 14, 2024",
    },
];

const WorkExperience = () => {
    return (
        <div id="work-experience" className="p-8 text-center bg-gray-900 text-white">
            <h2 className="text-4xl font-bold text-blue-400 mb-8 uppercase tracking-wider">
                Work Experience
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
                {workExperiences.map((work, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 shadow-lg p-6 rounded-lg border-l-4 border-blue-500"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className="text-xl font-semibold text-gray-300">{work.position}</h3>
                        <p className="text-gray-400 text-md">{work.company} - {work.location}</p>
                        <p className="text-gray-500 text-sm mt-2">{work.duration}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;
