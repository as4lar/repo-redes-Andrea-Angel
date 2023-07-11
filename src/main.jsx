import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import ContactPage from "../pages/ContactPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Laboratorio from "../pages/Laboratorio";
import Tareas from "../pages/Tareas.jsx";
import Tarea2 from "../Tareas/Tarea2/Tarea2.jsx";
import Practica1 from "./Practicas/Practica1/Practica1.jsx";
import Navigation2 from "../components/Navigation2.jsx";
import Proyecto from "../pages/Proyecto/Proyecto.jsx";
import Practica2 from "./Practicas/Practica2/Practica2.jsx";
import Practica3 from "./Practicas/Practica3/Practica3.jsx";
import Practica4 from "./Practicas/Practica4/Practica4.jsx";
import Practica5 from "./Practicas/Practica5/Practica5.jsx";
import Tarea4 from "../Tareas/Tarea4/Tarea4.jsx";
import Tarea5 from "../Tareas/Tarea5/Tarea5.jsx";
import Tarea8 from "../Tareas/Tarea8/Tarea8.jsx";
import Tarea9 from "../Tareas/Tarea9/Tarea9.jsx";
import Practica6 from "./Practicas/Practica6/Practica6.jsx";
import Practica7 from "./Practicas/Practica7/Practica7.jsx";
import Tarea6 from "../Tareas/Tarea6/Tarea6.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation2 />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/*  Practicas*/}
          <Route path="/laboratorio" element={<Laboratorio />} />
          <Route path="/practica1" element={<Practica1 />} />
          <Route path="/practica2" element={<Practica2 />} />
          <Route path="/practica3" element={<Practica3 />} />
          <Route path="/practica4" element={<Practica4 />} />
          <Route path="/practica5" element={<Practica5 />} />
          <Route path="/practica6" element={<Practica6 />} />
          <Route path="/practica7" element={<Practica7 />} />

          {/* Tareas */}
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/tarea2" element={<Tarea2 />} />
          <Route path="/tarea4" element={<Tarea4 />} />
          <Route path="/tarea5" element={<Tarea5 />} />
          <Route path="/tarea6" element={<Tarea6 />} />
          <Route path="/tarea8" element={<Tarea8 />} />
          <Route path="/tarea9" element={<Tarea9 />} />
          <Route path="/proyecto" element={<Proyecto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
