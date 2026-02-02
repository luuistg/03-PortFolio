import dad1Img from "../assets/projectsImg/dad1.webp";
import appMovileImg from "../assets/projectsImg/appMovile.webp";
import dad2Img from "../assets/projectsImg/dad2.webp";

const projects = [
    {
        url: "https://github.com/luuistg/DAD1-GlobalAPP",
        image: dad1Img,
        title: "FTP con Sockets",
        description: "Servidor y Cliente FTP por linea de comandos.",
        technologies: [{ name: "Java", color: "bg-red-400/40 text-red-100 ring-red-500/20" }]
    },
    {
        url: "https://github.com/luuistg/APP_Moviles_IOS",
        image: appMovileImg,
        title: "APP Móvil IOS",
        description: "Aplicación móvil para gestión de vehículos",
        technologies: [{ name: "Swift", color: "bg-orange-400/40 text-orange-100 ring-orange-500/20" }]
    },
    {
        url: "https://github.com/luuistg/Dad2Practica2",
        image: dad2Img,
        title: "API REST con Java EE",
        description: "API RESTful con Jakarta EE, consumida con JQUERY.",
        technologies: [{ name: "Java", color: "bg-red-400/40 text-red-100 ring-red-500/20" }, { name: "JS", color: "bg-yellow-400/40 text-yellow-100 ring-yellow-500/20" }]
    }
];

export default projects;