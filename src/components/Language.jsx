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

    return (
        <>
            <button onClick={changeLanguage} className="btn btn-link rounded-pill">
                <img 
                    src={currentLang === 'en' ? '/assets/img/flag-es.png' : '/assets/img/flag-en.png'} 
                    alt={currentLang === 'en' ? 'Cambiar a Español' : 'Change to English'}
                    style={{ width: '20px', height: '20px' }}
                />
            </button>        
        </>
    );
}