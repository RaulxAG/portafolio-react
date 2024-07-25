import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './utils/i18n.jsx';
import App from './App.jsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Inicio from './pages/Inicio.jsx';

const router = createHashRouter([
  {
    path:"/",
    element: <Inicio />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
