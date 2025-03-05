import React from "react";
import { motion } from "framer-motion";
import ProfilePicture from "./assets/myself.png";
import { Button } from "primereact/button";
import { scroller } from "react-scroll";
import { FaPaperPlane } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
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
                <div className="mt-6 flex justify-center gap-6">
                    <button
                        onClick={handleLearnMore}
                        className="group flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white 
                   bg-blue-600 rounded-lg shadow-md transition-all duration-300 
                   hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-400/50"
                    >
                        <BsInfoCircleFill className="text-xl transition-transform duration-300 group-hover:scale-110" />
                        More About Me
                    </button>

                    <button
                        onClick={handleSendMessage}
                        className="group flex items-center gap-2 px-6 py-3 text-lg font-semibold text-blue-500 
                   border border-blue-500 rounded-lg shadow-md transition-all duration-300 
                   hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-400/50"
                    >
                        <FaPaperPlane className="text-xl transition-transform duration-300 group-hover:-translate-y-1" />
                        Send Message
                    </button>
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
