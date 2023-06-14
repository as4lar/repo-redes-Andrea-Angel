/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
import React, { useState } from "react";
import {
    Button,
    TextField,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Box,
} from "@mui/material";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Tarea2 from "../Tareas/Tarea2/Tarea2";
import 'bootstrap/dist/css/bootstrap.css';
import "./estilos.css";

export const Tarea = ({ tituloTarea, descriptTarea, linkTarea }) => {
    return (
        <div className="card shadow" style={{ width: '18rem', height: '14rem', border: 'none' }} id="card">
            {/* <img src="..." className="card-img-top"></img> */}
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{tituloTarea}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Angel de los Santos y Andrea Sanchez</h6>
                    <p className="card-text" style={{ textAlign: 'justify' }}>{descriptTarea}</p>
                </div>
                <div className="d-grid gap-2">
                    <Link to={linkTarea} className="card-link link-p btn btn-primary shadow" style={{ textDecoration: "none" }} id="button">
                        Ver mas
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tarea;

