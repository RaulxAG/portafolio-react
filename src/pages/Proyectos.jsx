import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
    { id: 1, title: "La Tienda 24h", description: "Landing page realizada para un negocio real de Granada.", languages: ["vite", "react", "sass", "html5"], image: "/portafolio-react/assets/img/la-tienda-24h.webp", link: "https://la-tienda-24h.vercel.app" },
    { id: 2, title: "Iliberp", description: "TFG DAW: Software ERP, versión Demo de la app de clientes.", languages: ["vite", "react", "aws", "django", "sass", "docker", "mysql", "terraform"], image: "/portafolio-react/assets/img/iliberp.webp", link: "https://iliberp-demo.vercel.app/" },
    { id: 3, title: "Weather App", description: "Consulta datos meteorológicos de tus zonas preferidas.", languages: ["vite", "react", "html5", "css3"], image: "/portafolio-react/assets/img/weather.webp", link: "https://raulxag-weather.vercel.app/" },
    { id: 4, title: "Calculadora IMC", description: "Calcula tu índice de masa corporal de manera sencilla.", languages: ["html5", "css3", "javascript"], image: "/portafolio-react/assets/img/calculadora_imc.webp", link: "https://raulxag.github.io/calculadora_imc/" },
    { id: 5, title: "Fake Store", description: "Tienda Online haciendo uso de la API 'FakeStore'.", languages: ["javascript", "html5", "css3"], image: "/portafolio-react/assets/img/fakeStore.webp", link: "https://raulxag.github.io/fakeStore/" },
    { id: 6, title: "Portafolio Bento Grid", description: "Portafolio maquetado con bento grid.", languages: ["sass", "html5", "css3"], image: "/portafolio-react/assets/img/portafolio-sass.webp", link: "https://raulxag.github.io/portafolio/" },
    { id: 7, title: "Monstedex", description: "Una enciclopedia de los monstruos del videojuego 'Monster Hunter' consumiendo una API.", languages: ["vite", "react", "html5", "css3"], image: "/portafolio-react/assets/img/monstedex.webp", link: "https://raulxag.github.io/ReactApp/" },
    { id: 8, title: "Confeti Mario Block", description: "Web simple haciendo uso de una libreria para crear un efecto de confeti.", languages: ["javascript", "html5", "css3"], image: "/portafolio-react/assets/img/mario-block.webp", link: "https://raulxag.github.io/JS_ConfettiEffect/" },
    // { id: 9, title: "Blog", description: "Un proyecto de blog simple proveniente del curso 'Master en CSS3' de Víctor Robles.", languages: ["css3", "html5"], image: "/portafolio-react/assets/img/blog.webp", link: "https://raulxag.github.io/blog/" },
    // { id: 10, title: "Reservas restaurante", description: "Simulación de web de reservas de un restaurante.", languages: ["sass", "html5", "css3"], image: "/portafolio-react/assets/img/restaurante.webp", link: "https://raulxag.github.io/proyecto-sass-restaurante/" },
    
    // Agrega más proyectos aquí
];

export default function Proyectos({ t }) {
    useEffect(() => {
        window.scrollTo(0, 0); // Resetea el scroll al montar el componente
    }, []);

    return (
        <>
            <header className="pt-5">
                <h1 className="py-4 text-center">{t('projects')}</h1>
            </header>

            <section className="projects px-5 mb-4">
                {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                ))}
            </section>
        </>
    );
}