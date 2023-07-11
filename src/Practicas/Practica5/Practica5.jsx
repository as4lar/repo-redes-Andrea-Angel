/* eslint-disable no-unused-vars */
import React from 'react';
import "./estilos.css";
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
export const Practica5 = () => {

    return (
        <div className='container'>
            <div>
                <h1>Practica 5: Cables de Red</h1>
            </div>
            <div>
                <h2>Objetivo General</h2>
            </div>
            <div>
                <p>Conocer, identificar y comprobar el funcionamiento de los cables de red estructurado.</p>
            </div>
            <br />
            <div>
                <h2>Materiales</h2>
                <ul>
                    <li>Cable de red para armar</li>
                    <li>Cabezales de ethernet</li>
                    <li>Pinza ponchadora de cable de red</li>
                </ul>
            </div>
            <br />
            <div>
                <h2>Objetivos Específicos</h2>
            </div>
            <div className='objetivos-esp'>
                <ul>
                    <li>
                        <p className='p-li'>Investigar la configuración de los cables de red estructurados: Directo y Cruzado</p>
                        <p>Los cables de red estructurados se utilizan para establecer conexiones de red en infraestructuras de cableado estructurado, como en redes Ethernet.</p>
                        <ul>
                            <li>
                                <span style={{ fontWeight: 'bolder' }}>Directo: </span>Los pines en un extremo del cable siguen la misma secuencia numérica que en el otro extremo.
                                Se utiliza para conectar dispositivos de red a otros dispositivos de red que tienen funciones opuestas. (ordenador a switch)
                            </li>
                        </ul>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <img src={img1} style={{ width: '400px', height: '400px' }}></img>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <p><span style={{ fontWeight: 'bolder' }}>Cruzado: </span>En un extremo del cable los pines se intercambian o se cruzan.
                                    Se utilizan para conectar dos dispositivos de red similares entre sí (dos ordenadores)
                                </p>
                            </li>
                        </ul>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <img src={img2} style={{ width: '400px', height: '400px' }}></img>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <p className='p-li'>Investigar y explicar la forma de probar un cable de red directo y uno cruzado.</p>
                        <p>
                            En ambos tipos de cable se conecta de la misma forma. Conecta un extremo del cable directo a la salida de un dispositivo de red, luego conectar al otro extremo a la entrada, enviamos
                            una señal a través del cable.
                        </p>
                    </li>
                    <li>
                        <p className='p-li'>Armar 3 cables de red directos y probarlos</p>
                        <p>Se armaron los 3 cables, en la foto adjuntada en la parte de cables cruzados pueden verse los seis cables totales que se realizaron</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <img src={img3} style={{ width: '400px', height: '400px' }}></img>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <p className='p-li'> Armar 3 cables de red cruzados y probarlos.</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <img src={img4} style={{ width: '400px', height: '400px' }}></img>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Practica5