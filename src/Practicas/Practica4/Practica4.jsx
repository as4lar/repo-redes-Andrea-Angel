/* eslint-disable no-unused-vars */
import React from 'react';
import "./estilos.css";
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';
import img10 from './images/img10.png';
import img11 from './images/img11.png';
export const Practica4 = () => {

    return (
        <div className='container'>
            <div>
                <h1>Practica 4: Wifi ESP8266 Entradas y Salidas Digitales</h1>
            </div>
            <div>
                <h2>Objetivo General</h2>
            </div>
            <div>
                <p>Conocer, identificar y comprobar el funcionamiento de las entradas y salidas digitales en el módulo NodeMCU ESP8266 o ESP32.</p>
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
                        <p className='p-li'>Utilizando la información e instrucciones de la presentación, configurar el IDE de Arduino para poder programar el NodeMCU directamente desde el entorno de Arduino, instalando las herramientas necesarias.</p>
                        <p>Revisar el pinout y los GPIO disponibles para el uso del NodeMCU seleccionado.</p>
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
                        <p>Desarrollar un programa de encendido de un LED mediante programación.</p>
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
                        <p>Desarrollar un programa de apagado de un LED mediante programación.</p>
                        <p>Se declara el puerto donde se conectara el led, luego, en la función setup(), se configura el pin del LED como una salida utilizando pinMode(), indicando que se utilizará para enviar una señal. En el bucle loop(), se enciende el LED al establecer el pin en estado alto utilizando digitalWrite(), se espera un segundo con delay(1000), se apaga el LED estableciendo el pin en estado bajo y se vuelve a esperar un segundo antes de repetir el proceso. De esta manera, el LED parpadea continuamente con un intervalo de encendido y apagado de un segundo.</p>
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
                        <p> Desarrollar un programa de encendido y apagado de un LED mediante retardos.</p>
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
                        <p>Desarrollar un sistema de encendido y apagado de un LED mediante el uso de botones.</p>
                        <p>En este código,se configura un pulsador y un LED en un Arduino. En la función setup(), se define que el pin del pulsador (pinPulsador) es de entrada y el pin del LED (pinLed) es de salida. En el bucle loop(), se verifica si el pulsador ha sido activado utilizando digitalRead(pinPulsador). Si el pulsador está activado, el LED se enciende al poner el pin del LED en estado alto. Por otro lado, si el pulsador no está activado, el LED se apaga al establecer el pin del LED en estado bajo. El programa se repite continuamente y se incluye un pequeño retardo de 10 milisegundos para evitar lecturas erróneas debido a fluctuaciones en la señal. En resumen, este código permite controlar el encendido y apagado del LED mediante el uso de un pulsador.</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <img src={img5} style={{ width: '400px', height: '400px' }}></img>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                        <p>Asimismo, se realizó encendido y apagado del led mediante dos botones, donde uno prendía nuestro led y otro botón lo apagaba.</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <img src={img6} style={{ width: '400px', height: '400px' }}></img>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                    </li>
                    <br />
                    <br />
                    <li>
                        <p className='p-li'> Desarrollar un sistema de encendido y apagado de un LED mediante el uso de dos botones y una condicional OR.
                        </p>
                        <p>Se configuró Arduino con un pulsador, un apagador y un LED. En la función setup(), se define que el pin del pulsador (pinPulsador) y el pin del apagador (pinApagador) son de entrada, mientras que el pin del LED (pinLed) es de salida. En el bucle loop(), se verifica si la señal del pulsador o la señal del apagador son activas utilizando digitalRead(). Si alguna de las señales está activa, lo cual significa que el pulsador ha sido presionado o el apagador ha sido activado, se enciende el LED estableciendo el pin del LED en estado alto. En caso contrario, si ninguna de las señales está activa, se apaga el LED estableciendo el pin del LED en estado bajo. El programa se repite continuamente, asegurándose de leer constantemente el estado de los pulsadores y controlar el encendido y apagado del LED en consecuencia. Se incluye un pequeño retardo de 10 milisegundos entre cada iteración para evitar lecturas erróneas debido a fluctuaciones en la señal. En resumen, este código permite controlar el estado del LED mediante el uso del pulsador y el apagador.</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <img src={img7} style={{ width: '400px', height: '400px' }}></img>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <p>Desarrollar un sistema de encendido y apagado de un LED mediante el uso de dos botones y una condicional  AND.
                        </p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <img src={img8} style={{ width: '400px', height: '400px' }}></img>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>
                        <br />
                        <p>Utilizando el ejemplo de Thingspeak, desarrollar un sistema que mediante un botón conectado al NodeMCU enviemos un 1 al apretar el botón y un 0 al soltarlo. (Ejemplo Thingspeak, prueba el tablero de ejemplo que se muestra en la presentación, crea tu propio tablero de Thingspeak y envía los datos como evidencia):</p>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                    <img src={img9} style={{ width: '330px', height: '330px' }}></img>
                                </div>
                                <div className="col">
                                    <img src={img10} style={{ width: '330px', height: '330px' }}></img>
                                </div>
                                <div className="col">
                                    <img src={img11} style={{ width: '330px', height: '330px' }}></img>
                                </div>
                            </div>
                        </div>
                    </li>
                    <br />
                    <br />
                    <li>
                        <p className='p-li'>Utilizando un dashboard de ejemplo de PHP, desarrollar un sistema que mediante 3 botones conectados al NodeMCU enviemos un 1 al apretar el botón y un 0 al soltarlo. (Ejemplo GET, primero prueba el envió de datos al dashboard público en ingeniería-iberopuebla.mx, posteriormente contrata tu propio servidor, implementa la página del dashboard en el servidor y envía datos como evidencia, personaliza el dashboard con estilos propios)</p>
                        <p>A continuación se muestra el código de nuestro Arduino Uno, que actúa como el emisor de los datos. También se puede observar cómo está configurado para aumentar el número de pulsos que envía cada segundo que pasa.
                        </p>
                        <h2 style={{ textAlign: 'center' }}>Videos de la práctica</h2>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <p><a href='https://youtube.com/shorts/mZNOATlyLbE?feature=share'>Practica4.1</a></p>
                                    <p><a href='https://youtube.com/shorts/LSxoPURCZjI?feature=share'>Practica4.2</a></p>
                                    <p><a href='https://youtube.com/shorts/Gau12t2Tgd4?feature=share'>Practica4.3</a></p>
                                    <p><a href='https://youtube.com/shorts/_jtxzHYd1rM?feature=share'>Practica4.4</a></p>
                                    <p><a href='https://youtube.com/shorts/TCcUg0_U6wI?feature=share'>Practica4.5</a></p>
                                    <p><a href='https://youtube.com/shorts/g8ia1zcEmOE?feature=share'>Practica4.6</a></p>
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
export default Practica4;