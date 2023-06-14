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



export const Tarea = ({ tituloTarea, descriptTarea, linkTarea }) => {
    return (
        <Box>
            <Card sx={{ maxWidth: 275, backgroundColor: '#F8F8FF' }}>
                <CardContent>
                    <Typography variant="h4" component="div" sx={{ color: '#1a237e', textAlign: "center" }}>
                        {tituloTarea}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Angel de los Santos y Andrea Sánchez
                    </Typography>
                    <Typography variant="body2">
                        {descriptTarea}
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={linkTarea}>
                        <Button variant="contained" size="medium" sx={{ justifyContent: 'center' }}>Ver más</Button>
                    </Link>
                </CardActions>
            </Card>
        </Box>
    );
};
export default Tarea;
