import React from "react";
import { motion } from "framer-motion";
import { Element, scroller } from "react-scroll";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import WebDeveloperTechStack from "./WebDeveloperTechStack";
import ITSupportStack from "./ITSupportStack";
import Footer from "./Footer";
import ProfilePicture from "./assets/myself.png";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import { Button } from "primereact/button";
import { FaGamepad, FaFilm, FaGuitar, FaDumbbell, FaMusic } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
};

const App = () => {
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
    <div id="home" className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <AboutMe />

      {/* 🔹 Hobbies & Interests */}
      <Element name="hobbies-section">
        <motion.div className="p-8 text-center bg-gray-100 text-gray-900" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-xl font-semibold tracking-wider">Hobbies & Interests</h2>
          <div className="flex justify-center gap-8 mt-4 flex-wrap">
            {[
              { icon: FaGamepad, label: "Gaming", color: "text-blue-500" },
              { icon: FaFilm, label: "Movies", color: "text-red-500" },
              { icon: FaGuitar, label: "Guitar", color: "text-yellow-500" },
              { icon: FaDumbbell, label: "Fitness", color: "text-green-500" },
              { icon: FaMusic, label: "Music", color: "text-purple-500" },
            ].map((hobby, index) => (
              <div key={index} className="flex flex-col items-center">
                <hobby.icon className={`text-3xl ${hobby.color} transition-transform transform hover:scale-110`} />
                <span className="text-sm mt-2 tracking-wide">{hobby.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Element>

      {/* 🔹 My Location */}
      <Element name="location-section">
        <motion.div className="p-8 text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-xl font-semibold text-gray-300 tracking-wider">My Location</h2>
          <div className="mt-4 flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.803655422317!2d121.05522217429767!3d14.495958053945488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf6aadbdbbbd%3A0x7636a09ca97deaae!2sBlk%20169%20Lot%2057%20Sitio%20Central%20Upper%20Bicutan%2C%20Taguig%20City%2C%20169%20Mangondato%20St%2C%20Taguig%2C%201633%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1741076486119!5m2!1sen!2sph"
              width="100%"
              height="350"
              style={{ border: 0, maxWidth: "600px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </motion.div>
      </Element>

      {/* 🔹 Work Experience */}
      <Element name="work-experience">
        <motion.div variants={fadeUp} whileInView="visible" initial="hidden" viewport={{ once: true }}>
          <WorkExperience />
        </motion.div>
      </Element>

      {/* 🔹 Web Developer Tech Stack */}
      <Element name="technologies">
        <motion.div variants={fadeUp} whileInView="visible" initial="hidden" viewport={{ once: true }}>
          <WebDeveloperTechStack />
        </motion.div>
      </Element>

      {/* 🔹 IT Support Tech Stack */}
      <Element name="it-support">
        <motion.div variants={fadeUp} whileInView="visible" initial="hidden" viewport={{ once: true }}>
          <ITSupportStack />
        </motion.div>
      </Element>

      {/* 🔹 Projects */}
      <Element name="projects">
        <motion.div className="p-8 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <Projects />
        </motion.div>
      </Element>

      {/* 🔹 Contact Me */}
      <Element name="contact">
        <motion.div variants={fadeUp} whileInView="visible" initial="hidden" viewport={{ once: true }}>
          <Footer />
        </motion.div>
      </Element>
      
    </div>
  );
};

export default App;

