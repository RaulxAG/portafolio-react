import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './utils/i18n.jsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Language from './components/Language.jsx';
import Menu from './components/Menu.jsx';
import { useTranslation } from 'react-i18next';
import Inicio from './pages/Inicio.jsx';
import Proyectos from './pages/Proyectos.jsx';
import Contacto from './pages/Contacto.jsx';

const App = () => {
  const { t } = useTranslation();

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

  return (
    <React.StrictMode>
      {/* Menú */}
      <Menu t={t} />

      {/* Contenido */}
      <RouterProvider router={router} />

      <Language />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

