/* eslint-disable no-unused-vars */
import React from 'react';
import "./estilos.css"
import 'bootstrap/dist/css/bootstrap.css';
import img10 from './images/img10.jpg';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';

export const ModeloT = () => {

    return (
        <div>
            <div className='container' id='modelo-tcp'>
                <h2 style={{ textAlign: 'center' }}>Modelo TCP/IP</h2>
                <p>Este modelo es un protocolos que hacen posible la transferencia de datos en redes, equipos informáticos e internet.
                </p>
                <p>Sus siglas hacen referencia a los siguientes protocolos:</p>
                <ul>
                    <li>TCP: Protocolo de Transmisión que permite establecer una conexión y el intercambio de datos entre dos anfitriones.
                        Brinda un transporte fiable de datos.
                    </li>
                    <li>IP: Protocolo de Internet, utiliza direcciones de cuatro octetos con formato de punto decimal y lleva datos de otras
                        máquinas de la red
                    </li>
                </ul>
                <p>El modelo TCP/IP divide los datos en paquetes y los vuelve a juntar para formar el mensaje completo en el destino.
                    El modelo divide los datos en paquetes y atraviesan las capas en un sentido, para después hacerlo en sentido contrario cuando los datos
                    vuelven a juntarse en el destino.
                </p>
                <p>Es el conjunto de protocolos más usado en Internet, es el estándar en la mayoría de los ordenadores</p>
                <br />
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                        </div>
                        <div className="col">
                            <img src={img10} style={{ width: '500px', height: '300px' }}></img>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>
                <br />
                <h3 style={{ textAlign: 'center' }}>Capas del Modelo TCP/IP</h3>
                <br />
                <div>
                    <h4>Capa 1: Capa de acceso a la red</h4>
                    <p>La capa de enlace a los datos gestiona la infraestructura física que permite a los ordenadores comunicarse entre sí por Internet.
                        Esto incluye cables Ethernet, redes inalambricas, tarjetas de interfaz de red y controladores de dispositivos en el ordenador
                    </p>
                    <p>Esta capa maneja las partes físicas del envío y recepción de datos mediante cable Ethernet, red inalámbrica, tarjeta de interfaz de red, el controlador del dispositivo
                        en el equipo, entre otros.
                    </p>
                    <p>Asimismo, incluye infraestructura técnica como el código que convierte datos en señales transmisibles que hacen posible la conexión</p>
                </div>
                <div>
                    <h4>Capa 2: Capa de Internet</h4>
                    <p>También llamada capa de red, controla el flujo y enrutamiento de tráfico para garantizar que los datos se envían de forma rápida y correcta.Es responsable de juntar el paquete de datos
                        en el destino. Controla el movimiento de los paquetes alrededor de Internet.
                    </p>
                </div>
                <div>
                    <h4>Capa 3: Capa de Transporte</h4>
                    <p>Proporciona una conexión de datos fiable entre dos dispositivos de comunicación. Divide los datos en paquetes, confirma que los paquetes se
                        hayan recibido del remitente y se asegura que el destinatario confirme que recibió los paquetes.
                    </p>
                </div>
                <div>
                    <h4>Capa 4: Capa de aplicaciones</h4>
                    <p>Grupo de aplicaciones que permite al usuario acceder a la red, como el correo electrónico, aplicaciones de mensajería y programas de almacenamiento en la nube.
                        Es lo que el usuario final ve y con lo que interactúa al recibir y enviar datos.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ModeloT