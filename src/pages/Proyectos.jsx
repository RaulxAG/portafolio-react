import ProjectCard from "../components/ProjectCard";

const projects = [
    { id: 1, title: "Proyecto 1", description: "Descripción del proyecto 1", languages: ["JS", "HTML"], image: "assets/img/fakeStore.png" },
    { id: 2, title: "Proyecto 2", description: "Descripción del proyecto 2", languages: ["REACT", "HTML", "CSS"], image: "assets/img/fakeStore.png" },
    { id: 3, title: "Proyecto 3", description: "Descripción del proyecto 3", languages: ["Symfony", "SASS"], image: "assets/img/fakeStore.png" },
    { id: 4, title: "Proyecto 4", description: "Descripción del proyecto 4", languages: ["Symfony", "SASS"], image: "assets/img/fakeStore.png" },
    { id: 5, title: "Proyecto 5", description: "Descripción del proyecto 5", languages: ["Symfony", "SASS"], image: "assets/img/fakeStore.png" },
    { id: 6, title: "Proyecto 6", description: "Descripción del proyecto 6", languages: ["Symfony", "SASS"], image: "assets/img/fakeStore.png" },
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