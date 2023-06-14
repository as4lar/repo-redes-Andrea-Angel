/* eslint-disable no-unused-vars */
import React from 'react';
import "./estilos.css";
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
export const Practica2 = () => {

    return (
        <div className='container'>
            <div>
                <h1>Practica 2: Convertidor a binario</h1>
            </div>
            <div>
                <h2>Objetivo General</h2>
            </div>
            <div>
                <p>Conocer, identificar y comprobar el funcionamiento al desarrollar un protocolo de comunicación, en esta tercera parte de un convertidor a binario.</p>
            </div>
            <br />
            <div>
                <h2>Materiales</h2>
                <ul>
                    <li>2 Arduinos</li>
                    <li>Protoboards</li>
                    <li>Botones</li>
                    <li>LEDS</li>
                    <li>Potenciómetro</li>
                </ul>
            </div>
            <br />
            <div>
                <h2>Objetivos Específicos</h2>
            </div>
            <div className='objetivos-esp'>
                <ul>
                    <li>
                        <p className='p-li'>Utilizando 1 Arduino, diseñar un sistema que permita convertir el valor analógico de un potenciómetro en un arreglo de variables que representen el número en binario de 8 bits, de tal forma que podamos ver cada uno de los valores como salidas digitales en los pines del Arduino.</p>
                        <p>El código utiliza un Arduino para convertir el valor analógico de un potenciómetro en un número binario de 8 bits. Se configuran los pines digitales como salidas y se lee el valor analógico. Luego, se convierte a binario y se establece el estado de los pines según los bits del valor binario. Finalmente, se imprime el valor binario en la consola y se genera un retraso para visualizar los cambios en los pines digitales. En resumen, el código permite representar visualmente el número binario correspondiente al potenciómetro utilizando las salidas digitales del Arduino.</p>
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
                    </li>
                    <br />
                    <br />
                    <li>
                        <p className='p-li'>Utilizando un segundo Arduino, diseñar una función que permita convertir el valor en binario obtenido de 8 puertos digitales del Arduino en un valor entero en sistema decimal y mostrarlos en el monitor serial. Utilizar el primer Arduino para generar los valores digitales en binario y el segundo Arduino utilizarlo para decodificarlos y convertirlos en un valor decimal.
                        </p>
                        <p>Para este segundo punto, se adaptó el código utilizado en el objetivo número uno.</p>
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
                        <br />
                        <br />
                        <p>El siguiente código utiliza un segundo Arduino para decodificar los valores binarios generados por el primer Arduino a través de 8 pines digitales. Mediante la lectura de los estados de los pines digitales, se calcula un valor decimal correspondiente a los valores binarios. Este valor decimal se muestra en el monitor serial. En resumen, el código permite convertir señales binarias en un valor decimal y visualizarlo, lo que facilita la interpretación de los datos obtenidos a partir de los pines digitales del primer Arduino.
                        </p>
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
                        <br />
                        <h2 style={{ textAlign: 'center' }}>Videos de la práctica</h2>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <p><a href='https://youtube.com/shorts/nH1plperXHE?feature=share'>Practica2.1</a></p>
                                    <p><a href='https://youtube.com/shorts/2leyYzFezok?feature=share'>Practica2.2</a></p>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                    </li>
                    <br />
                    <br />
                </ul>
            </div>

        </div>
    )
}
export default Practica2;