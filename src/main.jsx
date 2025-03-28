import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './utils/i18n.jsx';
import { createHashRouter, RouterProvider, useLocation } from 'react-router-dom';

import Language from './components/Language.jsx';
import Menu from './components/Menu.jsx';
import { useTranslation } from 'react-i18next';
import Inicio from './pages/Inicio.jsx';
import Proyectos from './pages/Proyectos.jsx';
import Contacto from './pages/Contacto.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const router = createHashRouter([
    {
      path: "/",
      element: <Inicio t={t} />
    },
    {
      path: "/projects",
      element: <Proyectos t={t} />
    },
    {
      path: "/contact",
      element: <Contacto t={t} />
    }
  ]);

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]); // Resetea el scroll al cambiar de ruta
  
    return null; // No renderiza nada
  };

  return (
    <React.StrictMode>
      {/* Menú */}
      {isMobile ? '' : <Menu t={t} />}

      {/* Contenido */}
      <RouterProvider router={router} />

      <Language t={t} />

      {isMobile ? <MobileMenu t={t} /> : ''}

      <Analytics />
      <SpeedInsights />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);