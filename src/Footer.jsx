import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaFacebook, FaInstagram, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            id="contact"
            className="p-10 bg-gray-900 text-white rounded-t-2xl shadow-lg text-center border-t-4 border-blue-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                {/* Contact Info */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-3 text-blue-400">Contact Me</h2>
                    <p className="text-gray-300 mb-4 text-lg">Feel free to reach out via phone or email</p>
                    <div className="space-y-2">
                        <div className="flex items-center justify-center md:justify-start gap-3 text-lg">
                            <FaPhoneAlt className="text-gray-300 text-2xl" />
                            <a href="tel:+639295360588" className="hover:text-blue-500 transition duration-300">
                                +63 929 536 0588
                            </a>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3 text-lg">
                            <FaEnvelope className="text-gray-300 text-2xl" />
                            <a href="mailto:novemgerpascua1019@gmail.com" className="hover:text-blue-500 transition duration-300">
                                novemgerpascua1019@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3 text-lg">
                            <FaMapMarkerAlt className="text-gray-200 text-2xl" />
                            <span className="text-gray-300">Central Bicutan, Taguig City, Metro Manila, Philippines</span>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-3 text-blue-400">Follow Me</h2>
                    <p className="text-gray-300 mb-4 text-lg">Connect with me on platforms below</p>
                    <div className="flex justify-center gap-6 mt-2">
                        {[
                            { icon: FaGithub, href: "https://github.com/XdebronneX", color: "hover:text-gray-400" },
                            { icon: FaFacebook, href: "https://www.facebook.com/jacks.martel", color: "hover:text-blue-400" },
                            { icon: FaInstagram, href: "https://www.instagram.com/evansmartel", color: "hover:text-pink-400" },
                        ].map(({ icon: Icon, href, color }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-3xl transition duration-300 ${color}`}
                                whileHover={{ scale: 1.2 }}
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Resume Download */}
                <div className="text-center md:text-right">
                    <h2 className="text-3xl font-bold mb-3 text-blue-400">Resume</h2>
                    <p className="text-gray-300 mb-4 text-lg">Download my latest resume below</p>
                    <a
                        href="/pascua-portfolio/Pascua_Novemger_D_Resume.pdf"
                        download="Novemger_Pascua_Resume.pdf"
                        className="group inline-flex items-center px-6 py-3 text-lg font-semibold text-white 
                    bg-blue-500 bg-opacity-30 backdrop-blur-md shadow-md rounded-lg 
                    hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-400/50 
                    transition-all duration-300"
                    >
                        <FaDownload className="mr-2 text-xl transition-transform duration-300 group-hover:translate-y-1.5 group-hover:scale-110" />
                        Download
                    </a>
                </div>

            </div>

            {/* Footer Text */}
            <p className="text-gray-500 mt-10 text-sm">
                © {new Date().getFullYear()} | Built by <strong className="text-blue-400">NOVEMGER DAYOT PASCUA</strong>
            </p>
        </motion.footer>
    );
};

export default Footer;
