export default function ProjectCard({ t, project }) {
    return (
        <div className="projects__card rounded p-1 rounded-lg">
            <figure className="card__image">
                <img src={project.image} alt={project.title} className="w-100 object-cover mb-2 rounded" />

                <article className="card__info">
                    <p className="pb-2 fs-5">{project.description}</p>

                    <div className="info__languages w-100">
                        {/* <strong>Lenguajes:</strong> */}
                        <ul>
                            {project.languages.map((lang, index) => (
                                <li key={index}><img width="30" src={`assets/img/technologies/${lang}.svg`} alt={lang} title={lang} /></li>
                            ))}
                        </ul>
                    </div>
                </article>
            </figure>

            

            <article className="d-flex align-items-center justify-content-between px-3 pb-2">
                <h2 className="font-bold text-lg">{project.title}</h2>

                <a href={project.link} target="_blank" rel="noopener noreferrer"><i class="bi bi-arrow-up-right-square fs-4"></i></a>
            </article>
        </div>
    );
}