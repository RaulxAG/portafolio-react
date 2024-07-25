import Language from './components/Language.jsx';
import { BrowserRouter as Router, Route, Routes, createHashRouter, RouterProvider } from 'react-router-dom';
import Menu from './components/Menu.jsx';
import Inicio from './pages/Inicio.jsx';
import { useTranslation } from 'react-i18next';

export default function App() {
    const { t } = useTranslation();

    return (
        <>
            {/* Menú */}
            <Menu t={t} />

            {/* Contenido */}
            {/* <Router>
                <Routes>
                    <Route path="*" element={<Inicio t={t} />} />

                    <Route path="/portafolio-react" element={<Inicio t={t} />} />
                    <Route path="portafolio-react/" element={<Inicio t={t} />} />
                    <Route path="/portafolio-react/inicio" element={<Inicio t={t} />} />

                </Routes>
            </Router> */}
            <Inicio t={t}/>

            <Language />
        </>
    );
}