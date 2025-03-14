import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
    { id: 1, title: "Iliberp", description: "TFG DAW: Software ERP, versión Demo de la app de clientes.", languages: ["react", "aws", "django", "sass", "docker", "mysql", "terraform"], image: "assets/img/iliberp.webp", link: "https://iliberp-demo.vercel.app/" },
    { id: 2, title: "Weather App", description: "Consulta datos meteorológicos de tus zonas preferidas.", languages: ["vite", "react", "html5", "css3"], image: "assets/img/weather.webp", link: "https://raulxag-weather.vercel.app/" },
    { id: 3, title: "Calculadora IMC", description: "Calcula tu índice de masa corporal de manera sencilla.", languages: ["html5", "css3", "javascript"], image: "assets/img/calculadora_imc.webp", link: "https://raulxag.github.io/calculadora_imc/" },
    { id: 4, title: "Fake Store", description: "Tienda Online haciendo uso de la API 'FakeStore'.", languages: ["javascript", "html5", "css3"], image: "assets/img/fakeStore.webp", link: "https://raulxag.github.io/fakeStore/" },
    { id: 5, title: "Portafolio Bento Grid", description: "Portafolio maquetado con bento grid estilo Apple.", languages: ["sass", "html5", "css3"], image: "assets/img/portafolio-sass.webp", link: "https://raulxag.github.io/portafolio/" },
    { id: 6, title: "Monstedex", description: "Una enciclopedia de los monstruos del videojuego 'Monster Hunter'.", languages: ["vite", "react", "html5", "css3"], image: "assets/img/monstedex.webp", link: "https://raulxag.github.io/ReactApp/" },
    { id: 7, title: "Confeti Mario Block", description: "Web simple haciendo uso de una libreria para crear un efecto de confeti.", languages: ["javascript", "html5", "css3"], image: "assets/img/mario-block.webp", link: "https://raulxag.github.io/JS_ConfettiEffect/" },
    // { id: 8, title: "Blog", description: "Un proyecto de blog simple proveniente del curso 'Master en CSS3' de Víctor Robles.", languages: ["css3", "html5"], image: "assets/img/blog.webp", link: "https://raulxag.github.io/blog/" },
    // { id: 9, title: "Reservas restaurante", description: "Simulación de web de reservas de un restaurante.", languages: ["sass", "html5", "css3"], image: "assets/img/restaurante.webp", link: "https://raulxag.github.io/proyecto-sass-restaurante/" },
    
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