import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="contact" className="p-8 bg-gray-900 text-white rounded-lg shadow-lg text-center">
            {/* Contact Info */}
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">I'd love to connect! Reach me via phone, email, or social media.</p>

            <div className="max-w-lg mx-auto space-y-4">
                <div className="flex items-center justify-center gap-3 text-lg">
                    <FaPhoneAlt className="text-blue-400 text-xl" />
                    <a href="tel:+639295360588" className="hover:underline">
                        +63 929 536 0588
                    </a>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg">
                    <FaEnvelope className="text-red-400 text-xl" />
                    <a href="mailto:novemgerpascua1019@gmail.com" className="hover:underline">
                        novemgerpascua1019@gmail.com
                    </a>
                </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-300">Follow Me</h3>
                <div className="flex justify-center gap-6 mt-4">
                    <a href="https://github.com/XdebronneX" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-3xl hover:text-gray-400 transition duration-300" />
                    </a>
                    <a href="https://www.facebook.com/jacks.martel" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-3xl hover:text-blue-400 transition duration-300" />
                    </a>
                    <a href="https://www.instagram.com/evansmartel" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-3xl hover:text-pink-400 transition duration-300" />
                    </a>
                </div>
            </div>

            {/* Footer Text */}
            <p className="text-gray-500 mt-6 text-sm">© {new Date().getFullYear()} | Built by <strong>NOVEMGER DAYOT PASCUA</strong></p>
        </footer>
    );
};

export default Footer;
