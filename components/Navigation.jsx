/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./estilos.css";
import 'bootstrap/dist/css/bootstrap.css';
export function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand"><Link to="/" className="link-p" style={{ textDecoration: "none", color: "white" }}>Home</Link></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link"><Link to="/tareas" className="link-p" style={{ textDecoration: "none", color: "white" }}>Tareas</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link to="/laboratorio" className="link-p" style={{ textDecoration: "none", color: "white" }}> Laboratorio</Link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}
export default Navigation;
