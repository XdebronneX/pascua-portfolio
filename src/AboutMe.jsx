// import React from "react";
// import { motion } from "framer-motion";
// import { FaGamepad, FaFilm, FaGuitar, FaDumbbell } from "react-icons/fa";

// const AboutMe = () => {
//     return (
//         <motion.div
//             id="about"
//             className="p-8 text-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeInOut" }}
//         >
//             {/* About Me Text */}
//             <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
//                 I am seeking an opportunity to apply my knowledge and skills in Information Technology,
//                 focusing on problem-solving and system optimization. I am committed to continuously
//                 enhancing my expertise, gaining hands-on experience, and contributing to efficient and reliable IT operations.
//             </p>

//             {/* Hobbies Section */}
//             <div className="mt-8">
//                 <h2 className="text-xl font-semibold text-gray-700">Hobbies & Interests</h2>
//                 <div className="flex justify-center gap-8 mt-4">
//                     <div className="flex flex-col items-center">
//                         <FaGamepad className="text-3xl text-blue-500 transition-transform transform hover:scale-110" />
//                         <span className="text-sm mt-2">Gaming</span>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <FaFilm className="text-3xl text-red-500 transition-transform transform hover:scale-110" />
//                         <span className="text-sm mt-2">Movies</span>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <FaGuitar className="text-3xl text-yellow-500 transition-transform transform hover:scale-110" />
//                         <span className="text-sm mt-2">Guitar</span>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <FaDumbbell className="text-3xl text-green-500 transition-transform transform hover:scale-110" />
//                         <span className="text-sm mt-2">Fitness</span>
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default AboutMe;

// import React from "react";
// import { motion } from "framer-motion";
// import { FaGamepad, FaFilm, FaGuitar, FaDumbbell, FaMusic } from "react-icons/fa";

// const AboutMe = () => {
//     return (
//         <motion.div
//             id="about"
//             className="p-8 text-center font-silkscreen"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeInOut" }}
//         >
//             {/* About Me Text */}
//             <p className="text-lg leading-relaxed text-gray-300 text-center">
//                 I am seeking an opportunity to apply my knowledge and skills in Information
//                 Technology, focusing on problem-solving and system optimization. I am committed
//                 to continuously enhancing my expertise, gaining hands-on experience, and contributing
//                 to efficient and reliable IT operations.
//             </p>

//             {/* Hobbies Section */}
//             <div className="mt-8">
//                 <h2 className="text-xl font-semibold text-gray-300">Hobbies & Interests</h2>
//                 <div className="flex justify-center gap-8 mt-4">
//                     <div className="flex flex-col items-center">
//                         <FaGamepad className="text-3xl text-blue-500 transition-transform transform hover:scale-110" />
//                         <span className="text-sm mt-2">Gaming</span>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <FaFilm className="text-3xl text-red-500 transition-transform transform hover:scale-110" />
//                         <span className="text-sm mt-2">Movies</span>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <FaGuitar className="text-3xl text-yellow-500 transition-transform transform hover:scale-110" />
//                         <span className="text-sm mt-2">Guitar</span>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <FaDumbbell className="text-3xl text-green-500 transition-transform transform hover:scale-110" />
//                         <span className="text-sm mt-2">Fitness</span>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <FaMusic className="text-3xl text-purple-500 transition-transform transform hover:scale-110" />
//                         <span className="text-sm mt-2">Music</span>
//                     </div>

//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default AboutMe;


import React from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaFilm, FaGuitar, FaDumbbell, FaMusic } from "react-icons/fa";

const AboutMe = () => {
    return (
        <motion.div
            id="about"
            className="p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            {/* 🔹 About Me Text */}
            <p className="text-lg leading-relaxed text-gray-300 text-center tracking-wide">
                Hi, I'm Novemger Dayot Pascua, a passionate Web Developer and IT Support Specialist. <br />
                I love solving technical challenges, optimizing systems, and building functional, user-friendly websites. <br />
                Technology has always fascinated me, and I’m constantly learning new tools to stay ahead in this ever-evolving field. <br /><br />

                Beyond coding, I enjoy gaming, playing guitar, watching movies, and staying active. <br />
                Music and creativity play a big role in my life, and I believe that problem-solving in tech requires just as much creativity as any art form. <br /><br />

                My goal is to grow as a developer, contribute to impactful projects, and help businesses improve their IT infrastructure for a seamless digital experience.
            </p>


            {/* 🔹 Hobbies Section */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-300 tracking-wider">Hobbies & Interests</h2>
                <div className="flex justify-center gap-8 mt-4">
                    <div className="flex flex-col items-center">
                        <FaGamepad className="text-3xl text-blue-500 transition-transform transform hover:scale-110" />
                        <span className="text-sm mt-2 tracking-wide">Gaming</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaFilm className="text-3xl text-red-500 transition-transform transform hover:scale-110" />
                        <span className="text-sm mt-2 tracking-wide">Movies</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaGuitar className="text-3xl text-yellow-500 transition-transform transform hover:scale-110" />
                        <span className="text-sm mt-2 tracking-wide">Guitar</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaDumbbell className="text-3xl text-green-500 transition-transform transform hover:scale-110" />
                        <span className="text-sm mt-2 tracking-wide">Fitness</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaMusic className="text-3xl text-purple-500 transition-transform transform hover:scale-110" />
                        <span className="text-sm mt-2 tracking-wide">Music</span>
                    </div>
                </div>
            </div>

            {/* 🔹 Map Section */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-300 tracking-wider">My Location</h2>
                <div className="mt-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.803655422317!2d121.05522217429767!3d14.495958053945488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf6aadbdbbbd%3A0x7636a09ca97deaae!2sBlk%20169%20Lot%2057%20Sitio%20Central%20Upper%20Bicutan%2C%20Taguig%20City%2C%20169%20Mangondato%20St%2C%20Taguig%2C%201633%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1741076486119!5m2!1sen!2sph"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg shadow-md w-full"
                    ></iframe>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutMe;
