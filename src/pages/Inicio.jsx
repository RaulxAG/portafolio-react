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

        <section className="certifications m-auto my-5">
          
          <div className="certifications__timeline">
            <div className="timeline__line">
              <article className="line__item">
                <p className="fs-1">2022</p>
                <ul className="item__certs d-flex flex-row gap-4">
                  <li><p className="fs-6">CFGM - Sistemas Microinformáticos y Redes</p></li>
                </ul>
              </article>

              <article className="line__item">
                <p className="fs-1">2024</p>
                <ul className="item__certs d-flex flex-row gap-4">
                  <li><p className="fs-6">CFGS - Desarollo de Aplicaciones Web</p></li>
                  <li>
                    <a className="enlace fs-6" href="https://www.credly.com/badges/67e6d145-4d76-48cb-b2ff-082e39235b7b/public_url" target="_blank" rel="noopener noreferrer">
                      <img src="https://images.credly.com/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png" alt="Foto" width="100"/>
                      AWS - Cloud Foundations <i class="fa-solid fa-up-right-from-square"></i>
                    </a>
                  </li>
                  <li>
                    <a className="enlace fs-6" href="https://www.credly.com/badges/7c346508-bb00-41b5-a767-6f39cf7e1c4d/public_url" target="_blank" rel="noopener noreferrer">
                      <img src="https://images.credly.com/size/340x340/images/0590787c-66c7-46be-be18-bbfcf16c795b/image.png" alt="Foto" width="100"/>
                      AWS - Cloud Data Pipeline Builder <i class="fa-solid fa-up-right-from-square"></i>
                    </a>
                  </li>
                  <li>
                    <a className="enlace fs-6" href="https://www.credly.com/badges/39bb0904-baba-42ef-a583-ce9b8fe1b8a2/public_url" target="_blank" rel="noopener noreferrer">
                      <img src="https://images.credly.com/size/340x340/images/119182cf-ca68-495a-a415-bff62dfdcc7e/image.png" alt="Foto" width="100"/>
                      AWS - Cloud Developing <i class="fa-solid fa-up-right-from-square"></i>
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
      </main>
    </>
  )
}