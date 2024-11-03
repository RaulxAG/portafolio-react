import { useTranslation } from 'react-i18next';
import { useState } from "react";

export default function Language() {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const changeLanguage = () => {
        const newLang = currentLang === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
    };
    const phone = "+34603470573"
    const message = "Hola!%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios%20de%20desarrollador"
    const whatsappLink = `https://wa.me/${phone}?text=${message}`;

    return (
        <>
            <button onClick={changeLanguage} className="btn btn-link rounded-pill">
                <img 
                    src={currentLang === 'en' ? 'assets/img/flag-es.png' : 'assets/img/flag-en.png'} 
                    alt={currentLang === 'en' ? 'Cambiar a Español' : 'Change to English'}
                    style={{ width: '50px', height: '50px' }}
                />
            </button>        
            <section>
                <button onClick={changeLanguage} className="btn btn-link rounded-pill">
                    <img 
                        src={currentLang === 'en' ? 'assets/img/flag-es.png' : 'assets/img/flag-en.png'} 
                        alt={currentLang === 'en' ? 'Cambiar a Español' : 'Change to English'}
                        style={{ width: '50px', height: '50px' }}
                    />
                </button>        

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-link2 rounded-pill">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" 
                        alt="Whatsapp" 
                        style={{ width: '50px', height: '50px' }} 
                    />
                </a>
            </section>
        </>
    );
}