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
import ProfilePicture from "./assets/myself.png";
import { Button } from "primereact/button";
import { Element, scroller } from "react-scroll";

const AboutMe = () => {
    const handleLearnMore = () => {
        scroller.scrollTo("hobbies-section", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    const handleSendMessage = () => {
        scroller.scrollTo("contact", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };
    return (
        <div id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
            {/* Left Content */}
            <motion.div
                className="w-full md:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-5xl md:text-6xl font-bold mb-3 text-blue-400">
                    Hi, I'm Novemger Dayot Pascua
                </h2>
                <p className="text-lg leading-relaxed text-gray-300 tracking-wide mt-4">
                    I'm a passionate Web Developer and IT Support Specialist.
                    I love solving technical challenges, optimizing systems, and building functional, user-friendly websites.
                    Technology has always fascinated me, and I’m constantly learning new tools to stay ahead in this ever-evolving field.

                    My goal is to grow as a developer, contribute to impactful projects, and help businesses improve their IT infrastructure for a seamless digital experience.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    <Button label="More About Me" className="mr-3 p-button-raised" onClick={handleLearnMore} />
                    <Button label="Send Message" className="p-button-outlined" onClick={handleSendMessage} />
                </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
                className="w-full md:w-1/2 flex justify-center md:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <img
                    src={ProfilePicture}
                    alt="Profile"
                    className="rounded-lg drop-shadow-[8px_8px_15px_rgba(100,130,246,0.6)]"
                    style={{
                        clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
                        height: "100vh",
                        objectFit: "cover",
                    }}
                />

            </motion.div>
        </div>
    );
};

export default AboutMe;


// return (
{/* <div className="grid grid-nogutter surface-0 text-800 min-h-screen">
    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center min-h-full shadow-lg">
        <section id="hero" className="animate__animated animate__fadeInLeft animate__delay-1s">
            <span className="block text-6xl font-bold mb-1 animate__animated animate__fadeIn animate__delay-1s">Create the screens</span>
            <div className="text-6xl text-primary font-bold mb-3 animate__animated animate__fadeIn animate__delay-2s">your visitors deserve to see</div>
            <p className="mt-0 mb-4 text-700 line-height-3 animate__animated animate__fadeIn animate__delay-3s">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button label="Learn More" type="button" className="mr-3 p-button-raised animate__animated animate__fadeIn animate__delay-4s" />
            <Button label="About Us" type="button" className="p-button-outlined animate__animated animate__fadeIn animate__delay-4s" />
        </section>
    </div>
    <div className="col-12 md:col-6 overflow-hidden min-h-full shadow-lg">
        <img
            src={imgLogo}
            alt="hero-1"
            className="md:ml-auto block md:h-full animate__animated animate__zoomIn"
            style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)', height: '100vh', objectFit: 'cover' }}
        />
    </div>
</div>
); */}
