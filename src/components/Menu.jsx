
export default function Menu({ t }) {
    return (
        <>
            <nav className="px-5 py-2" aria-label="Main Navigation">
                <section className="d-flex justify-content-between align-items-center m-auto">
                    <header>
                        <h1 className="m-0 p-0 fs-5">Raul Arroyo</h1>
                        <h2 className="m-0 p-0">{t('job')}</h2>
                    </header>
                    
                    <ul className="p-0 m-0 d-flex align-items-center justify-content-center gap-3">
                        <li>
                            <a href="/">{t('home')}</a>
                        </li>
                        <li>
                            <a href="/#/projects">{t('projects')}</a>
                        </li>
                        <li>
                            <a href="/#/contact">{t('contact')}</a>
                        </li>
                    </ul>
                </section>
            </nav>
        </>
    );
}