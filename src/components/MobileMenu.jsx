import Language from "./Language";

export default function MobileMenu({ t }) {
    return (
        <>
            <section className="mobileMenu w-100 p-3" aria-label="Main Navigation">
                <ul className="p-0 m-0 d-flex align-items-center justify-content-around gap-5">
                    <li>
                        <a href="/portafolio-react"><i className="fa-solid fa-house fs-2"></i></a>
                    </li>
                    <li>
                        <a href="/portafolio-react/#/projects"><i className="fa-solid fa-suitcase fs-2"></i></a>
                    </li>
                    <li>
                        <a href="/portafolio-react/#/contact"><i className="fa-solid fa-phone fs-2"></i></a>
                    </li>
                </ul>
            </section>
        </>
    );
}