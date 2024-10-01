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
        <section className="about m-auto mt-5 mb-3">
          <h2>{t('about')}</h2>

          <div className="d-flex gap-5">
            <article>
              <p>{t('about-1')}</p>
              <p>{t('about-3')}</p>
            </article>

            <img src="https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png" alt="foto de perfil" />
          </div>
        </section>

        <section className="about m-auto">
          <h2 className="p-0 m-0">{t('certifications')}</h2>
        </section>

        <section className="certifications m-auto my-5 py-5">
          
          <div className="certifications__timeline">
            <div className="timeline__line">
              <article className="line__item">
                <p className="fs-1">2022</p>
                <ul className="item__certs d-flex flex-row gap-4">
                  <li><p className="fs-6"><span>CFGM</span>Sistemas Microinformáticos y Redes</p></li>
                  <li><p className="fs-6"><span>Cisco</span>Networking Essentials</p></li>
                  <li><p className="fs-6"><span>Openwebinars</span>Introducción a docker</p></li>
                </ul>
              </article>

              <article className="line__item">
                <p className="fs-1">2024</p>
                <ul className="item__certs d-flex flex-row gap-4">
                  <li><p className="fs-6"><span>CFGS</span>Desarollo de Aplicaciones Web</p></li>
                  <li>
                    <a className="enlace fs-6" href="https://www.credly.com/badges/67e6d145-4d76-48cb-b2ff-082e39235b7b/public_url" target="_blank" rel="noopener noreferrer">
                      <img src="https://images.credly.com/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png" alt="Foto" width="100"/>
                      <span>AWS</span>Cloud Foundations <i className="fa-solid fa-up-right-from-square"></i>
                    </a>
                  </li>
                  <li>
                    <a className="enlace fs-6" href="https://www.credly.com/badges/7c346508-bb00-41b5-a767-6f39cf7e1c4d/public_url" target="_blank" rel="noopener noreferrer">
                      <img src="https://images.credly.com/size/340x340/images/0590787c-66c7-46be-be18-bbfcf16c795b/image.png" alt="Foto" width="100"/>
                      <span>AWS</span>Cloud Data Pipeline Builder <i className="fa-solid fa-up-right-from-square"></i>
                    </a>
                  </li>
                  <li>
                    <a className="enlace fs-6" href="https://www.credly.com/badges/39bb0904-baba-42ef-a583-ce9b8fe1b8a2/public_url" target="_blank" rel="noopener noreferrer">
                      <img src="https://images.credly.com/size/340x340/images/119182cf-ca68-495a-a415-bff62dfdcc7e/image.png" alt="Foto" width="100"/>
                      <span>AWS</span>Cloud Developing <i className="fa-solid fa-up-right-from-square"></i>
                    </a>
                  </li>
                </ul>
              </article>

              {/* <article className="line__item">
                <p className="fs-1">2025</p>
              </article>

              <article className="line__item">
                <p className="fs-1">...</p>
              </article> */}
            </div>
          </div>
        </section>

        <div className="skills py-3 pb-5">
          <section className="skills__content m-auto">
            <h2>{t('skills')}</h2>

            <div id="carouselExampleAutoplaying" className="carousel slide pt-3 pb-5" data-bs-ride="carousel">
              <div className="carousel-indicators z-0">
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h3 className="fs-1 text-center mb-5">Front-End</h3>
                  <section className="mb-5">
                    <img width={80} src="assets/img/technologies/html5.svg" alt="Logo de HTML5 - Lenguaje de marcado utilizado para estructurar contenido en la web" title="HTML5 - Lenguaje de marcado utilizado para estructurar contenido en la web" />
                    <img width={80} src="assets/img/technologies/css3.svg" alt="Logo de CSS3 - Lenguaje para dar estilo a las páginas web" title="CSS3 - Lenguaje para dar estilo a las páginas web" />
                    <img width={80} src="assets/img/technologies/javascript.svg" alt="Logo de JavaScript - Lenguaje de programación para el desarrollo web interactivo" title="JavaScript - Lenguaje de programación para el desarrollo web interactivo" />
                    <img width={80} src="assets/img/technologies/react.svg" alt="Logo de React - Biblioteca de JavaScript para la creación de interfaces de usuario" title="React - Biblioteca de JavaScript para la creación de interfaces de usuario" />
                    <img width={80} src="assets/img/technologies/vite.svg" alt="Logo de Vite - Herramienta rápida de desarrollo para proyectos de JavaScript" title="Vite - Herramienta rápida de desarrollo para proyectos de JavaScript" />
                    <img width={80} src="assets/img/technologies/sass.svg" alt="Logo de SASS - Preprocesador de CSS que permite escribir estilos más eficientes" title="SASS - Preprocesador de CSS que permite escribir estilos más eficientes" />
                  </section>
                </div>

                <div className="carousel-item">
                  <h3 className="fs-1 text-center mb-5">Back-End</h3>
                  <section className="mb-5">
                    <img width={80} src="assets/img/technologies/symfony.svg" alt="Logo de Symfony - Framework PHP para desarrollo web" title="Symfony - Framework PHP para desarrollo web" className="fondo-logo"/>
                    <img width={80} src="assets/img/technologies/java.svg" alt="Logo de Java - Lenguaje de programación de alto nivel" title="Java - Lenguaje de programación de alto nivel" />
                    <img width={80} src="assets/img/technologies/django.svg" alt="Logo de Django - Framework de Python para aplicaciones web rápidas" title="Django - Framework de Python para aplicaciones web rápidas" />
                    <img width={80} src="assets/img/technologies/mysql.svg" alt="Logo de MySQL - Sistema de gestión de bases de datos relacional" title="MySQL - Sistema de gestión de bases de datos relacional" className="fondo-logo"/>
                    <img width={80} src="assets/img/technologies/php.svg" alt="Logo de PHP - Lenguaje de programación para desarrollo web del lado del servidor" title="PHP - Lenguaje de programación para desarrollo web del lado del servidor" />
                    <img width={80} src="assets/img/technologies/python.svg" alt="Logo de Python - Lenguaje de programación versátil y fácil de aprender" title="Python - Lenguaje de programación versátil y fácil de aprender" />
                  </section>
                </div>

                <div className="carousel-item">
                  <h3 className="fs-1 text-center mb-5">DevOps</h3>
                  <section className="mb-5">
                    <img width={80} src="assets/img/technologies/aws.svg" alt="Logo de AWS - Amazon Web Services para servicios en la nube" title="AWS - Amazon Web Services para servicios en la nube" className="fondo-logo"/>
                    <img width={80} src="assets/img/technologies/docker.svg" alt="Logo de Docker - Plataforma de contenedorización" title="Docker - Plataforma de contenedorización" />
                    <img width={80} src="assets/img/technologies/terraform.svg" alt="Logo de Terraform - Herramienta de infraestructura como código" title="Terraform - Herramienta de infraestructura como código" className="fondo-logo"/>
                    <img width={80} src="assets/img/technologies/git.svg" alt="Logo de Git - Sistema de control de versiones distribuido" title="Git - Sistema de control de versiones distribuido" />
                    <img width={80} src="assets/img/technologies/cisco.svg" alt="Logo de Cisco - Líder en soluciones de red y telecomunicaciones" title="Cisco - Líder en soluciones de red y telecomunicaciones" className="fondo-logo"/>
                    <img width={80} src="assets/img/technologies/linux.svg" alt="Logo de Linux - Sistema operativo de código abierto" title="Linux - Sistema operativo de código abierto" className="fondo-logo"/>
                  </section>
                </div>

                <div className="carousel-item">
                  <h3 className="fs-1 text-center mb-5">Diseño - UX/UI</h3>
                  <section className="mb-5">
                    <img width={80} src="assets/img/technologies/figma.svg" alt="Logo de Figma - Herramienta de diseño colaborativo para interfaces de usuario" title="Figma - Herramienta de diseño colaborativo para interfaces de usuario" />
                    <img width={80} src="assets/img/technologies/photoshop.svg" alt="Logo de Photoshop - Herramienta de diseño gráfico y edición de imágenes" title="Photoshop - Herramienta de diseño gráfico y edición de imágenes" />
                    <img width={80} src="assets/img/technologies/canva.svg" alt="Logo de Canva - Plataforma de diseño gráfico fácil de usar" title="Canva - Plataforma de diseño gráfico fácil de usar" />
                  </section>
                </div>
              </div>


              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}