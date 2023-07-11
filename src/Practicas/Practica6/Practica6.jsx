/* eslint-disable no-unused-vars */
import React from 'react';
import "./estilos.css";
import img1 from './images/img1.png';
import img2 from './images/img2.png';
export const Practica6 = () => {

    return (
        <div className='container'>
            <div>
                <h1>Practica 6: Configuración de servidor para Red Local</h1>
            </div>
            <div>
                <h2>Objetivo General</h2>
            </div>
            <div>
                <p>Conocer, investigar e identificar los pasos para configurar una red local y el acceso a recursos de un equipo en red.</p>
            </div>
            <br />
            <div>
                <h2>Objetivos Específicos</h2>
            </div>
            <div className='objetivos-esp'>
                <ul>
                    <li>
                        <p className='p-li'>Conéctate a una red de internet (IBERO o red personal con tu celular), Identifica la Ip de asignada al equipo servidor</p>
                    </li>
                    <li><p className='p-li'>Habilita el acceso al puerto 80 desde el firewall del equipo configurado como el servidor local.</p></li>
                    <li>
                        <p className='p-li'>En tu computadora instala XAMPP para configurar un servidor local, habilita los servicios de Apache y monta un sitio web</p>
                    </li>
                    <li>
                        <p className='p-li'>Comprueba el acceso al sitio web montado en el servidor local desde 3 dispositivos distintos (para acceder es necesario estar en la misma red y colocar en el explorador en url la dirección IP del servidor).</p>
                    </li>
                </ul>
            </div>
            <div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                        </div>
                        <div className="col">
                            <img src={img1} style={{ width: '400px', height: '400px' }}></img>
                        </div>
                        <div className="col">
                            <img src={img2} style={{ width: '400px', height: '400px' }}></img>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Practica6