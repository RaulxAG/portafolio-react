export default function CardProject({ project }) {
    return (
        <section className="projects__grid__card overflow-hidden shadow">
            <img src={"/assets/img/"+project+".png"} alt="Imagen del proyecto" />

            <article className="d-flex align-items-center justify-content-center h-100 p-4">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cum, minus doloribus.
                </p>
            </article>
        </section>
    );
}