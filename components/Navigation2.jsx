/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import ibero from './images/ibero.png';
export const Navigation2 = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={ibero}></img>
            </div>
            <div>
                <nav>
                    <ul className='nav-links'>
                        <li value='home'><Link to="/" className="link-p">Home</Link></li>
                        <li ><Link to="/tareas" className="link-p">Tareas</Link></li>
                        <li ><Link to="/laboratorio" className="link-p">Laboratorio</Link></li>
                        <li ><Link to="/proyecto" className="link-p">Proyecto Final</Link></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}
export default Navigation2