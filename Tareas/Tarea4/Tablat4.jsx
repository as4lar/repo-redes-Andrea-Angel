/* eslint-disable no-unused-vars */
import React from 'react';
import "./estilos.css"
import 'bootstrap/dist/css/bootstrap.css'; export const Tablat4 = () => {

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Modelo OSI</th>
                        <th scope="col">Modelo TCP/IP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tiene 7 capas</td>
                        <td>Tiene 4 capas</td>
                    </tr>
                    <tr>
                        <td>Desarrollado por ISO (Organización de Normas Internacionales)</td>
                        <td>Desarrollado por el Departamento de Defensa de Estados Unidos</td>
                    </tr>
                    <tr>
                        <td>Modelo teórico que se utiliza para el sistema informático</td>
                        <td>Modelo de servidor de cliente que se emplea para la transmisión de datos a través de internet</td>
                    </tr>
                    <tr>
                        <td>Más segmentado</td>
                        <td>Más compacto</td>
                    </tr>
                    <tr>
                        <td>Menos empleado</td>
                        <td>Más empleado</td>
                    </tr>
                    <tr>
                        <td>Únicamente para estudio</td>
                        <td>Para implementaciones reales</td>
                    </tr>
                    <tr>
                        <td>Protocolo estándar que actúa como una puerta de salida entre la red y el usuario</td>
                        <td>Modelo basado en protocolos estándar que permiten la conexion entre los hosts sobre las redes</td>
                    </tr>
                    <tr>
                        <td>Creado para transmitir datos, pero no seguridad en los sistemas informáticos</td>
                        <td>Permite realizar transmisiones rápidamente empleando el mismo protocolo de OSI pero con mayor seguridad</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default Tablat4