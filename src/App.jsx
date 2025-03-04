// import React from "react";
// import { motion } from "framer-motion";
// import { Element } from "react-scroll";
// import Navigation from "./Navigation";
// import AboutMe from "./AboutMe";
// import WebDeveloperTechStack from "./WebDeveloperTechStack";
// import ITSupportStack from "./ITSupportStack";
// import ContactMe from "./ContactMe";
// import Footer from "./Footer";
// import ProfilePicture from "./assets/mee.png";
// import Projects from "./Projects";
// import WorkExperience from "./WorkExperience";

// const fadeUp = {
//   hidden: { opacity: 0, y: 80 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
// };

// const App = () => {
//   return (
//     <div id="home" className="min-h-screen">
//       <Navigation />

//       {/* 🔹 Hero Section */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={fadeUp}
//         className="p-8 text-center"
//       >
//         <h1 className="text-5xl font-bold text-gray-900">
//           NOVEMGER DAYOT PASCUA
//         </h1>
//         <p className="mt-4 text-xl text-gray-600 tracking-wide">
//           WEB DEVELOPER & IT SUPPORT
//         </p>
//       </motion.div>

//       {/* 🔹 About Me */}
//       <Element name="about">
//         <motion.div
//           className="p-8 flex justify-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <div className="bg-white shadow-lg p-6 rounded-lg text-center w-full md:w-3/4 lg:w-2/3">
//             <motion.div
//               className="flex justify-center"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
//             >
//               <img
//                 src={ProfilePicture}
//                 alt="Profile"
//                 className="w-52 md:w-64 aspect-square object-cover rounded-full shadow-md border-4 border-gray-200"
//               />
//             </motion.div>
//             <motion.div className="mt-6" variants={fadeUp}>
//               <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
//               <AboutMe />
//             </motion.div>
//           </div>
//         </motion.div>
//       </Element>

//       {/* 🔹 Work Experience Section ✅ */}
//       <Element name="work-experience">
//         <motion.div
//           variants={fadeUp}
//           whileInView="visible"
//           initial="hidden"
//           viewport={{ once: true }}
//         >
//           <WorkExperience />
//         </motion.div>
//       </Element>

//       {/* 🔹 Web Development */}
//       <Element name="technologies">
//         <motion.div variants={fadeUp} whileInView="visible" initial="hidden" viewport={{ once: true }}>
//           <WebDeveloperTechStack />
//         </motion.div>
//       </Element>

//       {/* 🔹 IT Support */}
//       <Element name="it-support">
//         <motion.div variants={fadeUp} whileInView="visible" initial="hidden" viewport={{ once: true }}>
//           <ITSupportStack />
//         </motion.div>
//       </Element>

//       {/* 🔹 Projects */}
//       <Element name="projects">
//         <motion.div
//           className="p-8 text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <Projects />
//         </motion.div>
//       </Element>

//       {/* 🔹 Contact */}
//       <Element name="contact">
//         <motion.div variants={fadeUp} whileInView="visible" initial="hidden" viewport={{ once: true }}>
//           <ContactMe />
//         </motion.div>
//       </Element>

//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import WebDeveloperTechStack from "./WebDeveloperTechStack";
import ITSupportStack from "./ITSupportStack";
import Footer from "./Footer";
import ProfilePicture from "./assets/mee.png";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
};

const App = () => {
  return (
    
    <div id="home" className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      {/* 🔹 Hero Section */}
      <div className="p-8 flex flex-col items-center text-center justify-center">
        <h1 className="text-5xl font-bold tracking-wider uppercase text-blue-400">
          NOVEMGER DAYOT PASCUA
        </h1>
      </div>

      {/* 🔹 About Me */}
      <Element name="about">
        <motion.div
          className="p-8 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="bg-gray-800 shadow-lg p-6 rounded-lg text-center w-full md:w-3/4 lg:w-2/3">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            >
              <img
                src={ProfilePicture}
                alt="Profile"
                className="w-64 md:w-72 h-80 md:h-96 object-cover rounded-lg shadow-md border-4 border-gray-300"
              />

            </motion.div>
            <motion.div className="mt-6" variants={fadeUp}>
              <h2 className="text-3xl font-bold text-blue-400 mb-4 tracking-wide">
                About Me
              </h2>
              <AboutMe />
            </motion.div>
          </div>
        </motion.div>
      </Element>

      {/* 🔹 Work Experience */}
      <Element name="work-experience">
        <motion.div variants={fadeUp} whileInView="visible" initial="hidden" viewport={{ once: true }}>
          <WorkExperience />
        </motion.div>
      </Element>

      {/* 🔹 Web Development */}
      <Element name="technologies">
        <motion.div variants={fadeUp} whileInView="visible" initial="hidden" viewport={{ once: true }}>
          <WebDeveloperTechStack />
        </motion.div>
      </Element>

      {/* 🔹 IT Support */}
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

      {/* 🔹 Contact & Footer (Merged) ✅ */}
      <Element name="contact">
        <motion.div variants={fadeUp} whileInView="visible" initial="hidden" viewport={{ once: true }}>
          <Footer />
        </motion.div>
      </Element>
    </div>
  );
};

export default App;
