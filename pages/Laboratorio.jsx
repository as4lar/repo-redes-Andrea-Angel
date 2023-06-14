/* eslint-disable no-unused-vars */
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
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
import Practica from "../components/Practica";
const practicas = [
    {
        title: "Practica 1: Contador de pulsos y contador de tiempo",
        description: "Conocer, identificar y comprobar el funcionamiento al desarrollar un protocolo de comunicación, en esta primera parte de un contador de pulsos y un contador de tiempo en un pulso.",
        link: "/practica1"
    },
    {
        title: "Practica 2: Convertidor a binario",
        description: "Conocer, identificar y comprobar el funcionamiento al desarrollar un protocolo de comunicación, en esta tercera parte de un convertidor a binario.",
        link: "/practica2"
    },
    {
        title: "Practica 3: Protocolo de Comunicación Asíncrono",
        description: "Conocer, identificar y comprobar el funcionamiento al desarrollar un protocolo de comunicación asíncrono.",
        link: "/practica3"
    },
    {
        title: "Practica 4: Wifi ESP8266 Entradas y Salidas Digitales",
        description: "Conocer, identificar y comprobar el funcionamiento de las entradas y salidas digitales en el módulo NodeMCU ESP8266 o ESP32.",
        link: "/practica4"
    },
];
export function Laboratorio() {
    return (
        <div>
            <div>
                <h1>Laboratorio</h1>
            </div>
            <div className="container text-center">
                <div className="row justify-content-center">
                    {practicas.map((practica, index) => (
                        <div className="col mt-4" key={index}>
                            <div>
                                <Practica tituloPractica={practica.title} descriptPractica={practica.description} linkPractica={practica.link} key={index} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default Laboratorio;