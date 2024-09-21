import ProjectCard from "../components/ProjectCard";

const projects = [
    { id: 1, title: "Fake Store", description: "Tienda Online haciendo uso de la API 'FakeStore'.", languages: ["javascript", "html5", "css3"], image: "assets/img/fakeStore.png", link: "https://raulxag.github.io/fakeStore/" },
    { id: 2, title: "Portafolio Bento Grid", description: "Portafolio maquetado con bento grid estilo Apple.", languages: ["sass", "html5", "css3"], image: "assets/img/portafolio-sass.png", link: "https://raulxag.github.io/portafolio/" },
    { id: 3, title: "Monstedex", description: "Una enciclopedia de los monstruos del videojuego 'Monster Hunter'.", languages: ["vite", "react", "html5", "css3"], image: "assets/img/monstedex.png", link: "https://raulxag.github.io/ReactApp/" },
    { id: 4, title: "Confeti Mario Block", description: "Web simple haciendo uso de una libreria para crear un efecto de confeti.", languages: ["javascript", "html5", "css3"], image: "assets/img/mario-block.png", link: "https://raulxag.github.io/JS_ConfettiEffect/" },
    { id: 5, title: "Blog", description: "Un proyecto de blog simple proveniente del curso 'Master en CSS3' de Víctor Robles.", languages: ["css3", "html5"], image: "assets/img/blog.png", link: "https://raulxag.github.io/blog/" },
    { id: 6, title: "Reservas restaurante", description: "Simulación de web de reservas de un restaurante.", languages: ["sass", "html5", "css3"], image: "assets/img/restaurante.png", link: "https://raulxag.github.io/proyecto-sass-restaurante/" },
    // Agrega más proyectos aquí
];

export default function Proyectos({ t }) {

    return (
        <>
            <header className="pt-5">
                <h1 className="py-4 text-center">{t('projects')}</h1>
            </header>

            <section className="projects px-5 pb-5 mb-4">
                {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                ))}
            </section>
        </>
    );
}