import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div id="contact" className="p-6 text-center bg-gray-900 text-white rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-300 mb-6">Feel free to reach out via mobile or email.</p>

            <div className="max-w-lg mx-auto space-y-4">
                {/* Mobile Number */}
                <div className="flex items-center justify-center gap-3 text-lg">
                    <FaPhoneAlt className="text-blue-400" />
                    <a href="tel:+639295360588" className="hover:underline">
                        +63 929 536 0588
                    </a>
                </div>

                {/* Email */}
                <div className="flex items-center justify-center gap-3 text-lg">
                    <FaEnvelope className="text-red-400" />
                    <a href="mailto:novemgerpascua1019@gmail.com" className="hover:underline">
                        novemgerpascua1019@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
