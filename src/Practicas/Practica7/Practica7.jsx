/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
export const Practica7 = () => {

    return (
        <div className='container'>
            <div>
                <h1>Practica 7: Redes de Computadora con Switches y cables</h1>
            </div>
            <div>
                <h2>Objetivo General</h2>
            </div>
            <div>
                <p>Conocer, identificar y comprobar el funcionamiento de una red de área local utilizando switches y Router.</p>
            </div>
            <br />
            <div>
                <h2>Materiales</h2>
                <ul>
                    <li>6 computadoras</li>
                    <li>1 Switch</li>
                    <li>1 Router</li>
                    <li>Cables de red directos y cruzados</li>
                </ul>
            </div>
            <br />
            <div>
                <h2>Objetivos Específicos</h2>
            </div>
            <div className='objetivos-esp'>
                <ul>
                    <li>
                        <p className='p-li'>Identificar y caracterizar el funcionamiento del switch y el router.</p>
                    </li>
                    <li><p className='p-li'>Elaborar una red, utilizando la asignación automática de IP, seleccionado el tipo de cable adecuado y un switch conectando mínimo 3 computadoras y una con servicios de servidor.
                        (Comprueba que es posible encontrar dispositivos en la red, puedes usar el comando PING, y comprueba el acceso a la página web del servidor)</p></li>
                    <li>
                        <p className='p-li'>
                            Elaborar una red, utilizando la asignación automática de IP, seleccionado el tipo de cable adecuado y un router conectando mínimo 3 computadoras (alámbrica o inalámbricamente) y una con servicios de servidor.
                            (Comprueba que es posible encontrar dispositivos en la red, puedes usar el comando PING, y comprueba el acceso a la página web del servidor)
                        </p>
                    </li>
                    <li>
                        <p className='p-li'>
                            Une ambas Redes, utilizando la asignación automática de IP, seleccionado el tipo de cable adecuado y comprueba el intercambio de archivos.
                        </p>
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
export default Practica7