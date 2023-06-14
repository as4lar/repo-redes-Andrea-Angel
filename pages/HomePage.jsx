/* eslint-disable no-unused-vars */
import React from "react";
import './estilos.css'
import 'bootstrap/dist/css/bootstrap.css';

export function HomePage() {
    return (
        <div className="container mt-3">
            <div>
                <h1>Redes Digitales</h1>
            </div>
            <div className="container text-center mt-3">
                <div className="row">
                    <div className="col mt-4" id="presentacion">
                        <p style={{ textAlign: "justify" }}>Esta es la página de Angel de los Santos y Andrea Sánchez d ela materia de Redes Digitales y su laboratorio en la Universidad Iberoamericana Puebla.</p>
                        <br>
                        </br>
                        <p style={{ textAlign: "justify" }}>Angel de los Santos es estudiante de octavo semestre de la carrera de Ingeniería Mecatrónica. Le gusta programar, StarWars, Lana del Rey, The 1975 y los bowls de Green Chile</p>
                        <br></br>
                        <p style={{ textAlign: "justify" }}>Andrea Sánchez es estudiante de octavo semestre en Ingeniería en Sistemas Computacionales. Le gusta programar en React y Python, StarWars, ver series, How I Met your Mother y las ensaladas de Limoneta</p>

                        <p style={{ textAlign: "justify" }}>Esta página fue desarrollada utilizando CSS, HTML, Bootstrap5, MaterialUI y React.</p>
                    </div>
                    <div className="col">
                        <div className="container text-center">
                            <div className="row justify-content-center">
                                <div className="col mt-3">
                                    <div>
                                        <div className="card shadow" style={{ width: '10rem', height: '10rem', border: 'none' }} id="card">
                                            <img src="https://desarrolloweb.com/storage/tag_images/actual/sT1RLpDHzInATuKnDUkwXhKoaIOrtS97gBtgiQ6M.png" className="card-img-top mx-auto d-block" alt="Imagen" style={{ height: '10rem', width: '10rem' }}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mt-3">
                                    <div>
                                        <div className="card shadow" style={{ width: '10rem', height: '10rem', border: 'none' }} id="card">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png" className="card-img-top mx-auto d-block" alt="Imagen" style={{ height: '10rem', width: '10rem' }}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mt-3">
                                    <div>
                                        <div className="card shadow" style={{ width: '10rem', height: '10rem', border: 'none' }} id="card">
                                            <img src="https://img.freepik.com/premium-vector/bootstrap-icon-b-letter-logo_781017-7.jpg" className="card-img-top mx-auto d-block" alt="Imagen" style={{ height: '10rem', width: '10rem' }}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mt-3">
                                    <div>
                                        <div className="card shadow" style={{ width: '10rem', height: '10rem', border: 'none' }} id="card">
                                            <img src="https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg" className="card-img-top mx-auto d-block" alt="Imagen" style={{ height: '10rem', width: '10rem' }}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;