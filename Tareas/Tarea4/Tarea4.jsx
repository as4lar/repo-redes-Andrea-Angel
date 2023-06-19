/* eslint-disable no-unused-vars */
import React from 'react';
import "./estilos.css"
import 'bootstrap/dist/css/bootstrap.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import ModeloT from './ModeloT';
import Tablat4 from './Tablat4';


export const Tarea4 = () => {

    return (
        <div>
            <h1>Tarea4: Modelo OSI y TCP/IP</h1>
            <div className='container' id='modelo-osi'>
                <h2 style={{ textAlign: 'center' }}>Modelo OSI</h2>
                <div>
                    <p>El modelo OSI o modelo de interconexión de sistemas abiertos (Open Systems Interconnection) es un modelo de referencia para los protocolos de la red.
                        Tiene 7 capas o niveles de abstracción y gracias a ellas se pueden interconectar y funcionar correctamente los equipos en la red. </p>

                    <p>Con este modelo permite que diversos sistemas de comunicación se conecten usando protocolos estándar, es un lenguaje universal para la conexión de las
                        redes de equipos. Se basa en dividir un sistema de comunicación en sus siete capas abstractas, cada una apilada sobre la anterior.
                    </p>
                    <p>Cada capa del modelo OSI tiene una función específica y se comunica con las capas superiores e inferiores.</p>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col">
                                <img src={img1} style={{ width: '500px', height: '400px' }}></img>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                    <p>Este modelo es muy útil para resolver problemas de red. El modelo OSI ayuda a desintegrar el problema y aislar la fuente, si éste puede reducirse a una capa específica del modelo
                        se evita trabajo innecesario
                    </p>
                    <h3 style={{ textAlign: 'center' }}>Las 7 capas del Modelo OSI</h3>
                    <br />
                    <h4>Capa 7: Capa de aplicación</h4>
                    <p>Única capa que interactúa directamente con los datos del usuario. Navegadores web y clientes de correo electrónico dependen de la capa de aplicación para iniciar comunicaciones
                        La capa de aplicación es responsable de los protocolos y la manipulación de datos de los que depende el software para presentar datos significativos al usuario
                    </p>
                    <p>Incluye protocolos HTTP así como SMTP (procolo que permite las comunicaciones por correo electrónico)</p>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col">
                                <img src={img2} style={{ width: '500px', height: '300px' }}></img>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                    <br />
                    <h4>Capa 6: Capa de presentación</h4>
                    <p>Responsable de preparar los datos para que la capa de aplicación pueda usarlos, prepara los datos para su consumo por las aplicaciones.
                    </p>
                    <p>Es la responsable de la traducción, el cifrado y la compresión de los datos</p>
                    <p>Incluye protocolos HTTP así como SMTP (procolo que permite las comunicaciones por correo electrónico)</p>
                    <p>Debido a que dos dispositivos de comunicación conectados entre sí podrían estar usando diferentes métodos de codificación, esta capa es responsable de traducir los datos entrantes
                        en una sintaxis que la capa de aplicación del receptor pueda comprender. Esta capa también es responsable de añadir el cifrado en el extremo del emisor y decodificar el cifrado en el extremo
                        del receptor en caso de que los dispositivos se comuniquen a través de una conexión cifrada.
                    </p>
                    <p>Esta capa también see encarga de comprimir los datos que recibe la capa de apliación antes de ser enviados a la siguiente capa. De forma que mejora la velocidad y eficiencia de la comunicación mediante la minimización de la cantidad de datos que serán transferidos</p>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col">
                                <img src={img3} style={{ width: '500px', height: '300px' }}></img>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                    <br />
                    <h4>Capa 5: Capa de Sesión</h4>
                    <p>Responsable de la apertura y cierre de comunicaciones entre dos dispositivos, en el que el tiempo que transcurre entre ambas se conoce como Sesión</p>
                    <p>Esta garantiza que la sesión permanezca abierta el tiempo suficiente como para transferir todos los datos que se están intercambiando hasta que el intercambio termine y cierre la sesión para
                        evitar el desperdicio de recursos
                    </p>
                    <p>Sincroniza la transferencia de datos utilizando puntos de control para evitar que en caso de desconexión o caída, pueda retomarse la transferencia sin tener que reiniciar de cero la carga</p>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col">
                                <img src={img4} style={{ width: '500px', height: '300px' }}></img>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                    <br />
                    <h4>Capa 4: Capa de Transporte</h4>
                    <p>Responsable de las comunicaciones de extremo a extremo entre dos dispositivos. Antes de ejecutar el envío aa la capa 3, toma datos de la capa de sesión y los fragmenta en pedazos más pequeños llamados segmentos.</p>
                    <p>La capa de transporte del dispositivo receptor es responsable de rearmar los segmentos y construir con ellos datos que la capa de sesión pueda consumir
                    </p>
                    <p>Esta capa también es responsable del control de flujo y de errores. El control de flujo determina una velocidad óptima de transmisión para garantizar que un emisor con conexión rápida no abrume a un receptor con conexión lenta</p>
                    <p>Además, también se encarga de realizar un control de errores al garantizar que los datos recibidos estén completos, así como solicitar una retransmisión si no lo están</p>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col">
                                <img src={img5} style={{ width: '500px', height: '300px' }}></img>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                    <br />
                    <h4>Capa 3: Capa de Red</h4>
                    <p>Responsable de facilitar la transferencia de datos entre dos redes diferentes. si están en la misma red, entonces la capa no es necesaria</p>
                    <p>Esta capa divide los segmentos de la capa de transporte en unidades más pequeñas llamadas paquetes en el dispositivo del emisor y los junta en el dispositivo receptor.
                        Así como busca la mejor ruta física para que los datos lleguen a su destino, a este proceso se le conoce como enrutamiento
                    </p>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col">
                                <img src={img7} style={{ width: '500px', height: '300px' }}></img>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                    <br />
                    <h4>Capa 2: Capa de enlace de datos</h4>
                    <p>Facilita la transferencia de datos entre dos dispositivos dentro de la misma red. La capa de enlace de datos toma los paquetes de la capa de red y los divide en
                        partes más pequeñas que se denominan tramas
                    </p>
                    <p>Esta capa también es responsable del control de flujo y de errores en las comunicaciones dentro de la red.
                    </p>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col">
                                <img src={img6} style={{ width: '500px', height: '300px' }}></img>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                    <br />
                    <h4>Capa 1: Capa física</h4>
                    <p>Esta capa incluye el equipo físico implicado en la transferencia de datos (cables y conmutadores de red).
                    </p>
                    <p>Los datos se convierten en una secuencia de bits. La capa física de ambos dispositivos deben estar de acuerdo en cuanto a
                        una convención de señal para que los 1 puedan distinguirse de los 0.
                    </p>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col">
                                <img src={img8} style={{ width: '500px', height: '300px' }}></img>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container' id='modelo-t'>
                <ModeloT />
                <div>
                    <Tablat4 />
                </div>
            </div>
            <div className='container'>
                <div>
                    <h3 style={{ textAlign: 'center' }}>Ejemplo de aplicación Modelo OSI para envío de un mensaje</h3>
                </div>
                <div>
                    <p>La aplicación de software selecciona un protocolo de alto nivel para iniciar la comunicación (FTP, HTTP. SMTP)</p>
                    <ul>
                        <li>Capa 7: Se crea la unicad de datos del protocolo y se transforma en una unidad de datos de interfaz</li>
                        <li>Capa 6: Se recibe la IDU y se extrae la información. Se añade una nueva cabecera y se pasa a la siguiente capa</li>
                        <li>El proceso se repite hasta llegar al nivel físico. Donde con una última transformación se envían los datos por el canal de transmisión</li>
                        <li>El paquete viaja entre routers y switches hasta llegar al receptor</li>
                        <li>Desde su entrada por la Capa 1, cada capa del receptor se ocupa de extraer la cabecera añadida por la capa anterior, procesar la información y entregarla a
                            la capa superior
                        </li>
                        <li>El mensaje finalmente llega a la capa de aplicación del receptor, entregándose al programa destino</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{ textAlign: 'center' }}>Modelo TCP/IP para enviar un correo electrónico</h3>
                </div>
                <div>
                    <p>La capa de aplicación se encargar de la comunicación entre el cliente de correo electrónico y el servidor de correo electrónico. La capa de transporte utilizaría el protocolo TCP para entregar los datos de manera confiable.
                        La capa de red se encargaría del enrutamiento de paquetes a través de la red utilizando el protocolo IP. Y finalmente, la capa de enlace de datos se encargaría de enviar los paquetes a través de la red utilizando el protocolo Ethernet.</p>
                </div>
            </div>
        </div>
    )
}
export default Tarea4