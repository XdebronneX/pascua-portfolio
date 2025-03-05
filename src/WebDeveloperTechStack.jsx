// import React from "react";
// import { motion } from "framer-motion";

// import { Card } from "primereact/card";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaBootstrap, FaGit, FaServer, FaCube, FaFileCode, FaProjectDiagram } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb, SiDotenv, SiLaravel, SiPrimereact, SiVercel, SiRender, SiGithubpages, SiExpress, SiVite, SiPostman, SiInsomnia, SiCloudinary, SiWebpack, SiNpm, SiMongoose, SiMysql, SiPrettier } from "react-icons/si";
// import { DiVisualstudio } from "react-icons/di";
// import { BiSolidCylinder } from "react-icons/bi";

// const skills = [
//     { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
//     { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
//     { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
//     { name: "React.js", icon: <FaReact className="text-blue-400 text-5xl" /> },
//     { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500 text-5xl" /> },
//     { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-5xl" /> },
//     { name: "PrimeReact", icon: <SiPrimereact className="text-blue-500 text-5xl" /> },
//     { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-5xl" /> },
//     { name: "Express.js", icon: <SiExpress className="text-black text-5xl" /> },
//     { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
//     { name: "Mongoose", icon: <SiMongoose className="text-green-500 text-5xl" /> },
//     { name: "PHP Laravel", icon: <SiLaravel className="text-red-500 text-5xl" /> },
//     { name: "MySQL", icon: <FaDatabase className="text-blue-600 text-5xl" /> },
//     { name: "Microsoft SQL Server", icon: <BiSolidCylinder className="text-yellow-500 text-5xl" /> },
//     { name: "MySQL Workbench", icon: <SiMysql className="text-blue-500 text-5xl" /> },
//     { name: "MariaDB", icon: <SiMysql className="text-teal-600 text-4xl" /> },
//     { name: "Vite", icon: <SiVite className="text-purple-500 text-5xl" /> },
//     { name: "Git", icon: <FaGit className="text-red-500 text-5xl" /> },
//     { name: "Vercel", icon: <SiVercel className="text-black text-5xl" /> },
//     { name: "Render", icon: <SiRender className="text-blue-400 text-5xl" /> },
//     { name: "GitHub Pages", icon: <SiGithubpages className="text-gray-700 text-5xl" /> },
//     { name: "XAMPP", icon: <FaServer className="text-orange-500 text-5xl" /> },
//     { name: "WAMP", icon: <FaServer className="text-green-500 text-5xl" /> },
//     { name: "Postman", icon: <SiPostman className="text-orange-500 text-5xl" /> },
//     { name: "Insomnia", icon: <SiInsomnia className="text-purple-500 text-5xl" /> },
//     { name: "Cursor", icon: <FaCube className="text-gray-700 text-5xl" /> },
//     { name: "Microsoft Visual Studio", icon: <DiVisualstudio className="text-blue-500 text-5xl" /> },
//     { name: "Cloudinary", icon: <SiCloudinary className="text-blue-500 text-5xl" /> },
//     { name: "Webpack", icon: <SiWebpack className="text-blue-500 text-5xl" /> },
//     { name: "NPM", icon: <SiNpm className="text-red-600 text-5xl" /> },
//     { name: "DotEnv", icon: <SiDotenv className="text-yellow-400 text-5xl" /> },
//     { name: "Draw.io", icon: <FaProjectDiagram className="text-orange-500 text-5xl" /> },
//     { name: "Prettier", icon: <SiPrettier className="text-yellow-500 text-5xl" /> },    
// ];

// const WebDeveloperTechStack = () => {
//     return (
//         <div id="technologies" className="p-6 text-center">
//             <h2 className="mt-4 text-xl tracking-wide text-gray-400">Web Developer Tech Stack</h2>

//             <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
//                 {skills.map((skill, index) => (
//                     <motion.div
//                         key={index}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                     >
//                         <Card className="shadow-lg p-4 flex flex-col items-center cursor-pointer">
//                             {skill.icon}
//                             <p className="mt-2 text-sm font-semibold">{skill.name}</p>
//                         </Card>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default WebDeveloperTechStack;


import React from "react";
import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaBootstrap, FaGit, FaProjectDiagram, FaCube, FaServer, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiLaravel, SiPrimereact, SiVercel, SiExpress, SiMysql, SiPostman, SiMongoose, SiCloudinary, SiWebpack, SiNpm, SiPrettier, SiInsomnia, SiRender, SiVite, SiDotenv, SiSwagger, SiGithubpages, SiRedux, SiAxios, SiJsonwebtokens, SiFramer } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { BiSolidCylinder } from "react-icons/bi";
const skills = [
    // 🌐 Frontend Technologies
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400 text-5xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600 text-5xl" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500 text-5xl" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-500 text-5xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-5xl" /> },
    { name: "PrimeReact", icon: <SiPrimereact className="text-blue-500 text-5xl" /> },

    // ⚙ Backend & Databases
    { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-5xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700 text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
    { name: "Mongoose", icon: <SiMongoose className="text-green-500 text-5xl" /> },
    { name: "PHP Laravel", icon: <SiLaravel className="text-red-500 text-5xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-5xl" /> },
    { name: "MySQL Workbench", icon: <SiMysql className="text-blue-500 text-5xl" /> },
    { name: "Microsoft SQL Server", icon: <BiSolidCylinder className="text-yellow-500 text-5xl" /> },

    // 🔐 Authentication & APIs
    { name: "JWT", icon: <SiJsonwebtokens className="text-yellow-500 text-5xl" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500 text-5xl" /> },
    { name: "Insomnia", icon: <SiInsomnia className="text-purple-500 text-5xl" /> },
    { name: "Axios", icon: <SiAxios className="text-blue-500 text-5xl" /> },
    { name: "Swagger", icon: <SiSwagger className="text-green-500 text-5xl" /> },

    // 🛠 DevOps & Tools
    { name: "Git", icon: <FaGit className="text-red-500 text-5xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-700 text-5xl" /> },
    { name: "GitHub Pages", icon: <SiGithubpages className="text-gray-700 text-5xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-black text-5xl" /> },
    { name: "Render", icon: <SiRender className="text-blue-400 text-5xl" /> },
    { name: "Cloudinary", icon: <SiCloudinary className="text-blue-500 text-5xl" /> },

    // 🛠 Development & Utilities
    { name: "XAMPP", icon: <FaServer className="text-orange-500 text-5xl" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500 text-5xl" /> },
    { name: "Webpack", icon: <SiWebpack className="text-blue-500 text-5xl" /> },
    { name: "VSCode", icon: <DiVisualstudio className="text-blue-500 text-5xl" /> },
    { name: "Cursor", icon: <FaCube className="text-gray-700 text-5xl" /> },
    { name: "DotEnv", icon: <SiDotenv className="text-yellow-400 text-5xl" /> },
    { name: "Prettier", icon: <SiPrettier className="text-yellow-500 text-5xl" /> },
    { name: "Draw.io", icon: <FaProjectDiagram className="text-orange-500 text-5xl" /> },
];
const WebDeveloperTechStack = () => {
    return (
        <div id="technologies" className="p-8 text-center bg-gray-900 text-white">
            <h2 className="text-4xl font-bold text-blue-400 mb-8 uppercase tracking-wider">
                Web Developer Tech Stack
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50"
                    >
                        <div className="text-5xl group-hover:animate-bounce">
                            {skill.icon}
                        </div>
                        <p className="text-white mt-2 font-semibold">{skill.name}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default WebDeveloperTechStack;


// import React from "react";
// import { motion } from "framer-motion";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaBootstrap, FaGit, FaServer, FaCube, FaFileCode, FaProjectDiagram } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb, SiDotenv, SiLaravel, SiPrimereact, SiVercel, SiRender, SiGithubpages, SiExpress, SiVite, SiPostman, SiInsomnia, SiCloudinary, SiWebpack, SiNpm, SiMongoose, SiMysql, SiPrettier } from "react-icons/si";
// import { DiVisualstudio } from "react-icons/di";

// const skills = [
//     { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
//     { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
//     { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
//     { name: "React.js", icon: <FaReact className="text-blue-400 text-4xl" /> },
//     { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500 text-4xl" /> },
//     { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-4xl" /> },
//     { name: "PrimeReact", icon: <SiPrimereact className="text-blue-500 text-4xl" /> },
//     { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-4xl" /> },
//     { name: "Express.js", icon: <SiExpress className="text-black text-4xl" /> },
//     { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
//     { name: "Mongoose", icon: <SiMongoose className="text-green-500 text-4xl" /> },
//     { name: "PHP Laravel", icon: <SiLaravel className="text-red-500 text-4xl" /> },
//     { name: "MySQL", icon: <FaDatabase className="text-blue-600 text-4xl" /> },
//     { name: "MariaDB", icon: <SiMysql className="text-teal-600 text-4xl" /> },
//     { name: "Microsoft SQL Server", icon: <FaDatabase className="text-red-600 text-4xl" /> },
//     { name: "Vite", icon: <SiVite className="text-purple-500 text-4xl" /> },
//     { name: "Git", icon: <FaGit className="text-red-500 text-4xl" /> },
//     { name: "Vercel", icon: <SiVercel className="text-black text-4xl" /> },
//     { name: "Render", icon: <SiRender className="text-blue-400 text-4xl" /> },
//     { name: "GitHub Pages", icon: <SiGithubpages className="text-gray-700 text-4xl" /> },
//     { name: "XAMPP", icon: <FaServer className="text-orange-500 text-4xl" /> },
//     { name: "WAMP", icon: <FaServer className="text-green-500 text-4xl" /> },
//     { name: "Postman", icon: <SiPostman className="text-orange-500 text-4xl" /> },
//     { name: "Insomnia", icon: <SiInsomnia className="text-purple-500 text-4xl" /> },
//     { name: "Cursor", icon: <FaCube className="text-gray-700 text-4xl" /> },
//     { name: "Microsoft Visual Studio", icon: <DiVisualstudio className="text-blue-500 text-4xl" /> },
//     { name: "Cloudinary", icon: <SiCloudinary className="text-blue-500 text-4xl" /> },
//     { name: "Webpack", icon: <SiWebpack className="text-blue-500 text-4xl" /> },
//     { name: "NPM", icon: <SiNpm className="text-red-600 text-4xl" /> },
//     { name: ".env", icon: <SiDotenv className="text-gray-500 text-4xl" /> },
//     { name: "Draw.io", icon: <FaProjectDiagram className="text-orange-500 text-4xl" /> },
//     { name: "Prettier", icon: <SiPrettier className="text-yellow-500 text-4xl" /> },
// ];

// const fadeUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
// };

// const WebDeveloperTechStack = () => {
//     return (
//         <motion.div
//             id="technologies"
//             className="p-6 text-center"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//         >
//             <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-center">
//                 {skills.map((skill, index) => (
//                     <div
//                         key={index}
//                         className="flex flex-col items-center justify-center bg-white shadow-md p-3 rounded-lg w-20 h-20"
//                     >
//                         {skill.icon}
//                         <p className="mt-1 text-xs font-semibold text-gray-700 text-center">{skill.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </motion.div>
//     );
// };

// export default WebDeveloperTechStack;
