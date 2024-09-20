export default function ProjectCard({ t, project }) {
    return (
        <div className="projects__card rounded p-1 rounded-lg">
            <figure className="card__image">
                <img src={project.image} alt={project.title} className="w-100 object-cover mb-2 rounded" />
            </figure>

            <article className="card__info">
                <p>{project.description}</p>
                <div>
                    <strong>Lenguajes:</strong>
                    <ul>
                        {project.languages.map((lang, index) => (
                            <li key={index}>{lang}</li>
                        ))}
                    </ul>
                </div>
            </article>

            <h2 className="text-center font-bold text-lg">{project.title}</h2>
        </div>
    );
}