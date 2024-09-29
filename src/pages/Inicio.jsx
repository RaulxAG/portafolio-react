export default function Inicio({ t }) {

  return (
    <>
      <section className="title m-auto d-flex flex-column align-items-center justify-content-center">
        <article className="d-flex flex-column justify-content-center align-items-center w-100">
          <p className="m-0">&lt; {t('job')} &gt;</p>
          <p className="m-0">Raúl Arroyo</p>
        </article>

        <section className="about__links d-flex justify-content-between gap-2 mt-3">
          <a href="https://github.com/RaulxAG/" target="blank" className="fs-5" rel="noopener noreferrer" aria-label="GitHub">GitHub <i className="rrss bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/raul-arrgon/" target="blank" className="fs-5" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn <i className="rrss bi bi-linkedin"></i></a>
        </section>
      </section>

      <main>
        <section className="about m-auto my-5 pb-2">
          <h2>{t('about')}</h2>

          <div className="d-flex gap-5">
            <article>
              <p>{t('about-1')}</p>
              <p>{t('about-3')}</p>
            </article>

            <img src="https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png" alt="foto de perfil" />
          </div>
        </section>

        <section className="certifications m-auto pb-5">
          <h2>{t('certifications')}</h2>
          <div className="certifications__timeline"></div>
        </section>
        {/* <section className="section-abilities my-5 py-4">

          <section className="abilities m-auto">
            <h2>{t('skills')}</h2>

            <section className="abilities__grid mt-4">
              <figure>
                <img src="assets/img/technologies/mysql.svg" alt="MySQL" title="MySQL" />
              </figure>

              <figure>
                <img src="assets/img/technologies/aws.svg" alt="Amazon Web Services" title="Amazon Web Services" />
              </figure>

              <figure>
                <img src="assets/img/technologies/css3.svg" alt="CSS 3" title="CSS3" />
              </figure>

              <figure>
              <img src="assets/img/technologies/html5.svg" alt="HTML 5" title="HTML5" />
              </figure>

              <figure>
                <img className="rounded" src="assets/img/technologies/javascript.svg" alt="JavaScript" title="JavaScript" />
              </figure>

              <figure>
              <img src="assets/img/technologies/django.svg" alt="Django" title="Django" />
              </figure>
              
              <figure>
                <img src="assets/img/technologies/docker.svg" alt="Docker" title="Docker" />
              </figure>

              <figure>
                <img src="assets/img/technologies/php.svg" alt="PHP" title="PHP" />
              </figure>

              <figure>
                <img src="assets/img/technologies/python.svg" alt="Python" title="Python" />
              </figure>

              <figure>
                <img src="assets/img/technologies/react.svg" alt="React" title="React" />
              </figure>

              <figure>
                <img src="assets/img/technologies/sass.svg" alt="Sass" title="SASS" />
              </figure>

              <figure>
                <img src="assets/img/technologies/symfony.svg" alt="Symfony" title="Symfony" />
              </figure>

              <figure>
                <img src="assets/img/technologies/java.svg" alt="Java" title="Java" />
              </figure>

              <figure>
                <img src="assets/img/technologies/figma.svg" alt="Figma" title="Figma" />
              </figure>

              <figure>
                <img src="assets/img/technologies/git.svg" alt="Git" title="Git" />
              </figure>
            </section>
          </section>
        </section> */}

        {/* <section className="projects m-auto mt-1">
          <h2>{t('projects')}</h2>

          <section className="projects__grid mt-4">
            <CardProject project={"monstedex"} />
            <CardProject project={"fakeStore"} />
            <CardProject project={"monstedex"} />
            <CardProject project={"fakeStore"} />
          </section>
        </section> */}
      </main>
    </>
  )
}