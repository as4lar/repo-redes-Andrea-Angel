/* eslint-disable no-unused-vars */
import React from 'react';
import "./estilos.css"
import 'bootstrap/dist/css/bootstrap.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import Matriz from './Matriz';

export const Tarea5 = () => {

    return (
        <div className='container'>
            <h2 style={{ textAlign: 'center' }}>Elementos de una Red Local</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Elemento</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">IP</th>
                        <th scope="col">Ejemplo</th>
                        <th scope="col">Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Repetidor</td>
                        <td>Componente de red utilizado para amplificar y regenar señales de comunicación. Recibe una señal débil para
                            retransmitirla a una mayor potencia</td>
                        <td>No IP propia</td>
                        <td>Una habitación que se encuentre lejos del módem y no le llegue bien la señal wifi necesita un repetidor para
                            poder tener un mejor acceso a internet
                        </td>
                        <td><img src={img1} style={{ height: '200px', width: '200px' }}></img></td>
                    </tr>
                    <tr>
                        <td>HUB</td>
                        <td>Concentrador, dispositivo de red que actúa como punto central para la conexión de múltiples dispositivos en una red local.
                            Permite la interconexión de dispositivos, facilitando la conexión entre ellos.
                        </td>
                        <td>No IP propia</td>
                        <td>En una casa queremos comunicar todos los dispositivos entre sí (computaoras, impresoras y cámaras de seguridad). El HUB crea una
                            conexión física entre los equipos haciendo una conexión física utilizando cable Ethernet  </td>
                        <td><img src={img2} style={{ height: '200px', width: '200px' }}></img></td>
                    </tr>
                    <tr>
                        <td>Router</td>
                        <td>Enrutador, dispositivo de red que se utiliza para interconectar diferentes redes informáticas y facilitar el enrutamiento de datos
                            entre ellos. Determina la ruta más eficiente para enviar paquetes de datos desde el origen al destino
                        </td>
                        <td>Cada interfaz de red del router tiene asignada una dirección IP pública</td>
                        <td>Conexión de varios dispositivos entre sí y con conexión a internet para compartir recursos mientras el router administra el tráfico de red</td>
                        <td><img src={img3} style={{ height: '200px', width: '200px' }}></img></td>

                    </tr>
                    <tr>
                        <td>Bridge</td>
                        <td>Dispositivo de red utilizado para interconectar dos redes locales (LAN) separadas y permitir la comunicación entre ellas. Punto de conexión entre las
                            dos redes. Opera en la capa de enlace de datos del modelo OSI y lee las direcciones MAC de los paquetes de datos y enviarlos al destino correcto dentro de las
                            redes conectadas
                        </td>
                        <td>No tiene IP propia</td>
                        <td>Cuando en una empresa se tienen dos oficinas en la que cada una tiene su propia red local. Una tiene un protocolo Ethernet y la otra utiliza el protocolo
                            Token Ring, que son incompatibles entre sí y no pueden comunicarse directamente. Puede utilizarse el bridge para conectar esas dos redes y permitir la comunicación
                            entre ellas.
                        </td>
                        <td><img src={img4} style={{ height: '200px', width: '200px' }}></img></td>

                    </tr>
                    <tr>
                        <td>Switch</td>
                        <td>Dispositivo de red utilizado para conectar múltiples dispositivos en una red local (LAN) y facilitar la comunicación entre ellos. Funciona como un concentrador de conexiones,
                            lo cual permite una comunicación directa entre los dispositivos conectados al switch sin interferencias ni colisiones. Conectividad eficiente y segura entre los dispositivos
                            de la red.
                        </td>
                        <td>Un switch no tiene IP propia</td>
                        <td>En una oficina varios empleados necesitan conectarse a la red para acceder a recursos compartidos, cada empleado puede conectar su computadora al switch mediante un cable Ethernet.
                            El switch se encarga de recibir y enviar datos entre los dispositivos conectados. Además puede tener puertos adicionales para conectar otros dispositivos como impresoras en red.
                        </td>
                        <td><img src={img5} style={{ height: '200px', width: '200px' }}></img></td>
                    </tr>
                </tbody>
            </table>
            <br />
            <div>
                <h2 style={{ textAlign: 'center' }}>Matriz de Interconexión entre los elementos de Red</h2>
            </div>
            <br />
            <div>
                <Matriz />
            </div>


        </div>
    )
}
export default Tarea5