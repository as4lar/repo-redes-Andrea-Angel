/* eslint-disable no-unused-vars */
import React from 'react';
import "./estilos.css"
import 'bootstrap/dist/css/bootstrap.css';
export const Matriz = () => {

    return (
        <div className='container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">Elemento de Red</th>
                        <th scope="col">Computadora</th>
                        <th scope="col">Repetidor</th>
                        <th scope="col">HUB</th>
                        <th scope="col">Switch</th>
                        <th scope="col">Bridge</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Computadora</td>
                        <td>Cruzado</td>
                        <td>Directo</td>
                        <td>Directo</td>
                        <td>Directo</td>
                        <td>Directo</td>

                    </tr>
                    <tr>
                        <td>Repetidor</td>
                        <td>Directo</td>
                        <td>Cruzado</td>
                        <td>Directo</td>
                        <td>Directo</td>
                        <td>Directo</td>

                    </tr>
                    <tr>
                        <td>HUB</td>
                        <td>Directo</td>
                        <td>Directo</td>
                        <td>Cruzado</td>
                        <td>Directo</td>
                        <td>Directo</td>

                    </tr>
                    <tr>
                        <td>Switch</td>
                        <td>Directo</td>
                        <td>Directo</td>
                        <td>Directo</td>
                        <td>Cruzado</td>
                        <td>Directo</td>

                    </tr>
                    <tr>
                        <td>Bridge</td>
                        <td>Directo</td>
                        <td>Directo</td>
                        <td>Directo</td>
                        <td>Directo</td>
                        <td>Cruzado</td>

                    </tr>

                </tbody>
            </table>

        </div>
    )
}
export default Matriz