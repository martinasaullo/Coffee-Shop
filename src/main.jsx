import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Shop from './Shop.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/shop",
    element: <Shop></Shop>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
