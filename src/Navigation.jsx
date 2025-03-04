import React from "react";
import { Menubar } from "primereact/menubar";
import { scroller } from "react-scroll"; // ✅ Smooth scrolling

const scrollToSection = (section) => {
    scroller.scrollTo(section, {
        duration: 800,
        smooth: "easeInOutQuad",
    });
};

const Navigation = () => {
    const items = [
        { label: "Home", icon: "pi pi-home", command: () => scrollToSection("home") },
        { label: "About Me", icon: "pi pi-user", command: () => scrollToSection("about") },
        { label: "Work Experience", icon: "pi pi-briefcase", command: () => scrollToSection("work-experience") },

        { label: "Web Development", icon: "pi pi-code", command: () => scrollToSection("technologies") },
        { label: "IT Support", icon: "pi pi-cog", command: () => scrollToSection("it-support") },

        { label: "Projects", icon: "pi pi-folder", command: () => scrollToSection("projects") },
        { label: "Contact", icon: "pi pi-phone", command: () => scrollToSection("contact") },
    ];

    return (
        <div className="sticky top-0 z-10 p-3">
            <Menubar model={items} />
        </div>
    );
};

export default Navigation;

// import React from "react";
// import { Menubar } from "primereact/menubar";
// import { scroller } from "react-scroll";

// const scrollToSection = (section) => {
//     scroller.scrollTo(section, {
//         duration: 800,
//         smooth: "easeInOutQuad",
//     });
// };

// const Navigation = () => {
//     const items = [
//         { label: "Home", icon: "pi pi-home", command: () => scrollToSection("home") },
//         { label: "About Me", icon: "pi pi-user", command: () => scrollToSection("about") },
//         { label: "Work Experience", icon: "pi pi-briefcase", command: () => scrollToSection("work-experience") },
//         { label: "Web Development", icon: "pi pi-code", command: () => scrollToSection("technologies") },
//         { label: "IT Support", icon: "pi pi-cog", command: () => scrollToSection("it-support") },
//         { label: "Projects", icon: "pi pi-folder", command: () => scrollToSection("projects") },
//         { label: "Contact", icon: "pi pi-phone", command: () => scrollToSection("contact") },
//     ];

//     return (
//         <div className="sticky top-0 z-10 p-3">
//             <div className="">
//                 <Menubar
//                     model={items}
//                     className="flex justify-center"
//                 />
//             </div>
//         </div>
//     );
// };

// export default Navigation;

// import React from "react";
// import { Menubar } from "primereact/menubar";
// import { scroller } from "react-scroll";

// const scrollToSection = (section) => {
//     scroller.scrollTo(section, {
//         duration: 800,
//         smooth: "easeInOutQuad",
//     });
// };

// const Navigation = () => {
//     const items = [
//         { label: "Home", icon: "pi pi-home", command: () => scrollToSection("home") },
//         { label: "About Me", icon: "pi pi-user", command: () => scrollToSection("about") },
//         { label: "Work Experience", icon: "pi pi-briefcase", command: () => scrollToSection("work-experience") },
//         { label: "Web Development", icon: "pi pi-code", command: () => scrollToSection("technologies") },
//         { label: "IT Support", icon: "pi pi-cog", command: () => scrollToSection("it-support") },
//         { label: "Projects", icon: "pi pi-folder", command: () => scrollToSection("projects") },
//         { label: "Contact", icon: "pi pi-phone", command: () => scrollToSection("contact") },
//     ];

//     return (
//         <div className="sticky top-0 z-10 p-2">
//             <Menubar
//                 model={items}
//                 className="bg-gray-800 text-white justify-center py-2"
//             />
//         </div>
//     );
// };

// export default Navigation;

// import React from "react";
// import { Menubar } from "primereact/menubar";
// import { scroller } from "react-scroll";

// const scrollToSection = (section) => {
//     scroller.scrollTo(section, {
//         duration: 800,
//         smooth: "easeInOutQuad",
//     });
// };

// const Navigation = () => {
//     const items = [
//         { label: "Home", icon: "pi pi-home", command: () => scrollToSection("home") },
//         { label: "About Me", icon: "pi pi-user", command: () => scrollToSection("about") },
//         { label: "Work Experience", icon: "pi pi-briefcase", command: () => scrollToSection("work-experience") },
//         { label: "Web Development", icon: "pi pi-code", command: () => scrollToSection("technologies") },
//         { label: "IT Support", icon: "pi pi-cog", command: () => scrollToSection("it-support") },
//         { label: "Projects", icon: "pi pi-folder", command: () => scrollToSection("projects") },
//         { label: "Contact", icon: "pi pi-phone", command: () => scrollToSection("contact") },
//     ];

//     return (
//         <div className="sticky top-0 z-10 bg-gray-800 p-2">
//             <Menubar
//                 model={items}
//                 className="bg-gray-800 text-white flex justify-center relative"
//                 start={<i className="pi pi-bars text-xl cursor-pointer text-white md:hidden absolute left-4"></i>}
//             />
//         </div>
//     );
// };

// export default Navigation;

