/* eslint-disable no-unused-vars */
import React from 'react';
import "./estilos.css";
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';



export const Practica3 = () => {

    return (
        <div className='container'>
            <div>
                <h1>Practica 3: Protocolo de Comunicación Asíncrono</h1>
            </div>
            <div>
                <h2>Objetivo General</h2>
            </div>
            <div>
                <p>Conocer, identificar y comprobar el funcionamiento al desarrollar un protocolo de comunicación asíncrono.</p>
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
                        <p className='p-li'>Utilizando 1 Arduino, diseñar un sistema que permita convertir el valor analógico de un potenciómetro en un arreglo de variables que representen el número en binario de 8 bits, y los deposite en un arreglo [ ], Finalmente elaborar un código de programación que permita enviar los bits del arreglo en orden y en serie siguiendo las siguientes características:</p>
                        <p>El código presentado permite convertir el valor analógico de un potenciómetro en un número binario de 8 bits utilizando un Arduino. En la función setup(), se inicializan los pines y se establecen como entradas o salidas según corresponda. En la función loop(), se lee el valor analógico del potenciómetro y se convierte a binario mediante la función convertToBinary(), que almacena los bits en un arreglo. Luego, se envían los bits en orden y en serie mediante la función sendBits(), que utiliza los pines digitales y muestra los bits en el monitor serial. Se agrega un retraso de 1 segundo para enviar el siguiente conjunto de bits. En resumen, el código permite la conversión y transmisión de datos binarios del potenciómetro utilizando un Arduino.</p>
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
                        <p>Iniciar el envío de los datos siempre con una señal HIGH (En total se enviarán 9 datos, el primer bit en HIGH y posteriormente los 8 bits de información).</p>
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
                        <p>Enviar los datos con una duración del pulso predeterminada, ejemplo 1000 ms</p>
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
                    <br />
                    <br />
                    <li>
                        <p className='p-li'>Utilizando un segundo Arduino, diseñar una función que permita adquirir el valor en bits de la señal de comunicación del Arduino anterior, la procese y la convierte en un dato decimal que finalmente enviará al monitor serial.
                        </p>
                        <p>En la siguiente imagen, el Arduino funciona como el emisor de la señal. Primero, se definen las constantes outPin y inPin, que representan los pines de salida y entrada respectivamente. En la función setup(), se configuran los pines como salida y entrada utilizando pinMode(), y se inicia la comunicación serial con Serial.begin(). En el bucle loop(), se genera un valor decimal aleatorio entre 0 y 255 utilizando la función random(). Luego, se envía este valor al Arduino receptor mediante el pin de salida outPin. Se indica el inicio del envío estableciendo el pin en estado alto durante un breve lapso de tiempo. Finalmente, se utiliza Serial.write() para enviar el valor como un byte a través de la comunicación serial. Se espera un tiempo de 2 segundos antes de enviar el siguiente dato.</p>
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
                        <br />
                        <br />
                        <p>El código que se encuentra a continuación, corresponde al Arduino receptor de la señal enviada por el emisor. Se definen las constantes inPin y outPin para representar los pines de entrada y salida respectivamente. En la función setup(), se configuran los pines utilizando pinMode(), y se inicia la comunicación serial con Serial.begin(). Además, se establece una interrupción en el pin de entrada utilizando attachInterrupt(), lo que significa que la función locationBitInterrupt() se ejecutará cada vez que se detecte un cambio de estado en el pin de entrada. En el bucle loop(), se comprueba si se ha recibido un dato completo mediante la variable dataReceived. En caso afirmativo, se convierte el arreglo de bits recibidos en un valor decimal utilizando la función bitsToDecimal(). Este valor se muestra en el monitor serial. A continuación, se envía el valor decimal al Arduino emisor a través del pin de salida outPin. Al igual que en el código del emisor, se indica el inicio del envío estableciendo el pin en estado alto durante un breve lapso de tiempo, y se utiliza Serial.write() para enviar el valor como un byte a través de la comunicación serial.
                        </p>
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
                        <br />
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
                        <h2 style={{ textAlign: 'center' }}>Videos de la práctica</h2>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                </div>
                                <div className="col">
                                    <p><a href='https://youtube.com/shorts/Y4By-v8yDuM?feature=share'>Practica3.1</a></p>
                                    <p><a href='https://youtube.com/shorts/EsCW_ZqEgvc?feature=share'>Practica3.2</a></p>
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
export default Practica3;