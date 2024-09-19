export default function ProjectCard({ t, project }) {
    return (
        <div className="projects__card rounded p-1 rounded-lg">
            <img src={project.image} alt={project.title} className="w-100 object-cover mb-2 rounded" />
            <h2 className="text-center font-bold text-lg">{project.title}</h2>

            {/* <p>{project.description}</p>
            <div>
                <strong>Lenguajes:</strong>
                <ul>
                    {project.languages.map((lang, index) => (
                        <li key={index}>{lang}</li>
                    ))}
                </ul>
            </div> */}
        </div>
    );
}