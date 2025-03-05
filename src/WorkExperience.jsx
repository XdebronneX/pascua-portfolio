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
        company: "iCargo Pacific",
        location: "Mandaluyong City",
        duration: "May 13 - June 14, 2024",
    },
];

const WorkExperience = () => {
    return (
        <div id="work-experience" className="p-10 text-center bg-gray-900 text-white">
            <h2 className="text-5xl font-extrabold text-blue-400 mb-10 uppercase tracking-wider">
                Work Experience
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
                {workExperiences.map((work, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-gray-800 bg-opacity-80 shadow-xl p-6 rounded-lg border-l-8 border-blue-500 
                                transition-all duration-300 hover:border-blue-400"
                        whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0, 102, 255, 0.3)" }}
                    >
                        <h3 className="text-2xl font-bold text-white">{work.position}</h3>
                        <p className="text-gray-300 text-lg">{work.company} - {work.location}</p>
                        <p className="text-gray-400 text-sm mt-2 italic">{work.duration}</p>

                        {/* Subtle Glowing Effect */}
                        <div className="absolute inset-0 border border-transparent rounded-lg 
                                        group-hover:border-blue-500 transition-all duration-300"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;

