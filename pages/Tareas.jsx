/* eslint-disable no-unused-vars */
import React from "react";
import {
    Button,
    TextField,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Grid,
    Link,
} from "@mui/material";
import Tarea from "../components/Tarea";

const tareas = [
    {
        title: "Tarea 1",
        description: "Primera página con imágenes e hipervínculos",
        link: "https://andreas-redes.000webhostapp.com/index.html"
    },
    {
        title: "Tarea 2",
        description: "30 estilos implementados en CSS",
        link: "/tarea2"
    },
    {
        title: "Tarea 3",
        description: "Réplica de página de Intrauia realizada con Bootstrap, CSS y HTML",
        link: "https://tarea3redesdigitales.000webhostapp.com/"
    },
    {
        title: "Tarea 4",
        description: "Lectura Modelo OSI vs TCP/IP",
        link: "/tarea4"
    },
    {
        title: "Tarea 5",
        description: "Elementos de redes locales y matriz de interconexión",
        link: "/tarea5"
    },
    {
        title: "Tarea 6",
        description: "Ejercicios en Packet Tracer",
        link: "/tarea5"
    },
    {
        title: "Examen",
        description: "Examen cotización de la Red en el IDIT",
        link: "https://www.canva.com/design/DAFml1Bbwew/FWFMMd-7Wiyj_zbp97IJKw/edit?utm_content=DAFml1Bbwew&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
        title: "Tarea 8",
        description: "Cuestionario JavaScript",
        link: "/tarea8"
    },
    {
        title: "Tarea 9",
        description: "Cuestionario PHP",
        link: "/tarea9"
    },
];

export function Tareas() {
    return (
        <div>
            <div>
                <h1
                >
                    Tareas
                </h1>
            </div>
            <div className="container text-center">
                <div className="row justify-content-center">
                    {tareas.map((tarea, index) => (
                        <div className="col mt-4" key={index}>
                            <div>
                                <Tarea tituloTarea={tarea.title} descriptTarea={tarea.description} linkTarea={tarea.link} key={index} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Tareas;
