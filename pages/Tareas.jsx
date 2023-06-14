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