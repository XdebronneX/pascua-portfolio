import React from "react";
import Slider from "react-slick";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Portfolio from "./assets/portfolio.png";
import Portfolio1 from "./assets/portfolio1.png";
import Portfolio2 from "./assets/portfolio2.png";
import version1 from "./assets/version1.png";
import version1_1 from "./assets/version1-1.png";
import version1_2 from "./assets/version1-2.png";
import version2 from "./assets/version2.png";
import version2_1 from "./assets/version2-1.png";
import version2_2 from "./assets/version2-2.png";
import inventory from "./assets/inventory.png";
import inventory1 from "./assets/inventory1-1.png";
import inventory2 from "./assets/inventory1-2.png";
import shoe from "./assets/shoe.png";
import shoe1 from "./assets/shoe1-1.png";
import shoe2 from "./assets/shoe1-2.png";
import motorcycle from "./assets/motorcycle.png";
import motorcycle1 from "./assets/motorcycle1-1.png";
import motorcycle2 from "./assets/motorcycle1-2.png";
import { MdOutlineTransitEnterexit } from "react-icons/md";
import freelance1 from "./assets/freelance1.png";
import freelance2 from "./assets/freelance1-1.png";
import freelance3 from "./assets/freelance1-2.png";

const projects = [
    {
        name: "Backend API E-Learning",
        images: [freelance1, freelance2, freelance3],
        tech: ["Node", "Express", "Mongoose", "Bcryptjs", "JsonWebToken", "Multer", "Dotenv", "Nodemon", "Nodemailer", "Moment-Timezone", "Cloudinary", "Cors", "Crypto", "Cookie-Parser", "Validator","Compression"],
        source: "https://github.com/XdebronneX/gv-backend",
    },
    {
        name: "Backend API Grading System",
        images: [freelance1, freelance2, freelance3],
        tech: ["Node", "Express", "Mongoose", "Bcrypt", "JsonWebToken", "Multer", "Dotenv", "Nodemon", "Moment", "Cloudinary", "Cors", "Crypto", "Cookie-Parser", "Validator"],
        source: "https://github.com/XdebronneX/tapinac-backend",
    },
    {
        name: "Portfolio Website",
        images: [Portfolio, Portfolio1, Portfolio2],
        tech: ["React", "Vite", "HTML", "CSS", "JavaScript", "TailwindCSS", "Framer Motion", "Primereact", "Primeflex", "Primeicons", "React Icons", "React Scroll", "React Slick"],
        source: "https://github.com/XdebronneX/pascua-portfolio",
    },
    {
        name: "Motorcycle Parts and Services",
        images: [motorcycle, motorcycle1, motorcycle2],
        tech: [
            "HTML", "CSS", "JavaScript",   
            "React", "Redux",              
            "React-Helmet", "React Router", 
            "TailwindCSS",                  
            "PrimeReact", "Primeflex", "PrimeIcons", 
            "Chakra UI", "Framer Motion",   
            "MDBReact", "React Bootstrap",  
            "Formik", "Yup",                
            "React Hook Form",              
            "Axios", "CORS",                 
            "SweetAlert2", "React-Toastify",  
            "Chart.js", "Recharts", "React-ChartJS-2", 
            "XLSX", "jsPDF", "React-PDF", "HTML2Canvas", 
            "React-Datepicker",               
            "React-Phone-Number-Input",  
            "Select-Philippines-Address",  
            "React-Responsive-Carousel",      
            "React-Slick", "Slick Carousel", 
            "React-Spinners",                
            "React-To-Print",                
            "React-Simple-Star-Rating",       
            "Styled-Components",              
            "Express", "Node", "Mongoose",
            "Cloudinary", "JsonWebToken", "Bcryptjs", 
            "Multer", "Dotenv", "Nodemon", 
            "Nodemailer", "Cookie-Parser", "Validator" 
        ],
        source:"https://www.teampoor-motorcycle-parts-and-services.online/",
    },
    {
        name: "Inventory for Purchasing Items",
        images: [inventory, inventory1, inventory2],
        tech: ["HTML", "CSS", "JavaScript", "React", "Redux", "React-Helmet", "React Router", "TailwindCSS", "PrimeReact", "Primeflex", "PrimeIcons", "Formik", "Yup", "Axios", "SweetAlert2", "XLSX", "jsPDF", "Express", "Node", "Mongoose"],
        source: "https://purchasingdept.vercel.app/",
    },
    {
        name: "E-Commerce Shoe Shop",
        images: [shoe, shoe1, shoe2],
        tech: ["HTML", "CSS", "JavaScript", "React", "Redux", "React Router", "React-Hook-Form", "React-Toastify", "ReCharts", "Mdbreact", "React-Bootstrap", "React-Icons", "Axios", "SweetAlert2", "Countries_list", "@react-pdf/renderer", "Express", "Node", "Mongoose", "Cloudinary", "Cors", "JsonWebToken", "Bcryptjs", "Multer", "Dotenv", "Nodemon", "Nodemailer", "Cookie-Parser", "Validator", "Slugify"],
        source: "https://shop-shoes-project-theta.vercel.app/",
    },
    {
        name: "PetClinic Version 1",
        images: [version1, version1_1, version1_2],
        tech: ["Laravel", "Mysql", "HTML", "CSS", "JavaScript", "Bootstrap", "FontAwesome", "Alpine.js"],
        source: "https://github.com/XdebronneX/Beginner-Laravel-Project",
    },
    {
        name: "PetClinic Version 2",
        images: [version2, version2_1, version2_2],
        tech: ["Laravel", "Mysql", "Bootstrap 5", "HTML", "CSS", "JavaScript", "TailwindCSS", "FontAwesome", "Chart.js", "DataTables"],
        source: "https://github.com/XdebronneX/Intermediate-Laravel-Porject",
    },
];

const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
};

const Projects = () => {
    return (
        <div id="projects" className="p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-400 mb-8 uppercase tracking-wider">
                Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
                {projects.map((project, index) => (
                    <Card key={index} className="shadow-lg p-4 flex flex-col h-full">
                        <h3 className="text-xl font-semibold">{project.name}</h3>

                        {/* Image Carousel Inside Each Project */}
                        <Slider {...imageSliderSettings} className="mt-4">
                            {project.images.map((image, imgIndex) => (
                                <div key={imgIndex} className="flex justify-center">
                                    <img
                                        src={image}
                                        alt={`Project ${index + 1} - Image ${imgIndex + 1}`}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                            ))}
                        </Slider>

                        <p className="flex flex-wrap gap-2 justify-center mt-6">
                            {project.tech.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="bg-gray-200 text-gray-700 px-3 py-1 text-xs font-semibold rounded-full shadow-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </p>

                        {/* Push Button to the Bottom */}
                        <div className="mt-auto flex justify-center pt-6">
                            <Button
                                label="View Project"
                                icon={<MdOutlineTransitEnterexit className="text-xl" />}
                                className="p-button-sm p-button-primary bg-green-600 text-white hover:bg-green-700 transition-all duration-300 flex items-center gap-2"
                                onClick={() => window.open(project.source, "_blank")}
                            />
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};


export default Projects;
