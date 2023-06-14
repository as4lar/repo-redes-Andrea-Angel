/* eslint-disable no-unused-vars */
import React from 'react';
import "./estilos.css";

export const Practica1 = () => {

    return (
        <div className='container'>
            <div>
                <h1>Practica 1: Contador de pulsos y contador de tiempo</h1>
            </div>
            <div>
                <h2>Objetivo General</h2>
            </div>
            <div>
                <p>Conocer, identificar y comprobar el funcionamiento al desarrollar un protocolo de comunicación, en esta primera parte de un contador de pulsos y un contador de tiempo en un pulso.</p>
            </div>
            <br />
            <div>
                <h2>Materiales</h2>
                <ul>
                    <li>2 Arduinos</li>
                    <li>Protoboards</li>
                    <li>Botones</li>
                    <li>LEDS</li>
                </ul>
            </div>
            <br />
            <div>
                <h2>Objetivos Específicos</h2>
            </div>
            <div className='objetivos-esp'>
                <ul>
                    <li>
                        <p className='p-li'>Utilizando 1 Arduino, diseñar una función que permite enviar un número determinado de pulsos (Variación de 0 a 1) a una frecuencia específica, la función debe tener la siguiente estructura void pulsos(int cantidad, int duración). (Comprobar el correcto funcionamiento utilizando el osciloscopio).</p>
                        <p>En la siguiente imagen se puede observar el código que se realizó para alcanzar el primer objetivo. </p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <img src='https://imgur.com/a/ZIxk6Jb' style={{ width: '400px', height: '400px' }}></img>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                    </li>
                    <br />
                    <br />
                    <li>
                        <p className='p-li'>Utilizando un segundo Arduino, diseñar una función que permita contar el número de pulsos que ha recibido (Variación de 0 a 1) y mostrarlos en el monitor serial.
                        </p>
                        <p>Para alcanzar este segundo objetivo, hemos desarrollado el siguiente código, el cual será implementado en nuestro primer Arduino encargado de enviar los datos, en este caso (0,1).</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <img src='src\Practicas\Practica1\images\img2.png' style={{ width: '400px', height: '400px' }}></img>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <p>En la siguiente imagen se muestra el código que se utilizó en el segundo arduino para que este recibiera la información que envía el arduino número uno.
                        </p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <img src='src\Practicas\Practica1\images\img3.png' style={{ width: '400px', height: '400px' }}></img>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                    </li>
                    <br />
                    <br />
                    <li>
                        <p className='p-li'>Utilizando ambos arduinos, conectar un pin de los Arduinos para comprobar el funcionamiento del sistema enviando un número de pulsos específicos a la velocidad de 1 pulso por segundo,10, 100 y 1000 pulsos por segundo.</p>
                        <p>A continuación se muestra el código de nuestro Arduino Uno, que actúa como el emisor de los datos. También se puede observar cómo está configurado para aumentar el número de pulsos que envía cada segundo que pasa.
                        </p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <img src='src\Practicas\Practica1\images\img4.png' style={{ width: '400px', height: '400px' }}></img>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                        <br />
                        <p>Como puede observarse en la suiguiente imagen, el código está configurado para recibir los pulsos que envía el arduino número 1.
                        </p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <img src='src\Practicas\Practica1\images\img5.png' style={{ width: '400px', height: '400px' }}></img>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                        <br />
                        <h2 style={{ textAlign: 'center' }}>Videos de la práctica</h2>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <a href='https://youtube.com/shorts/oVGSSguqRYE?feature=share'>Practica1</a>
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
export default Practica1;