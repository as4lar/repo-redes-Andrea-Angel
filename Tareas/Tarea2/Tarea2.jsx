/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./estilos.css"
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
export const Tarea2 = () => {

    return (
        <div>
            <div>
                <Typography variant='h1' sx={{ fontSize: '60px', textAlign: "center", color: "#1a237e" }}>Tarea 2 Estilos CSS</Typography>
            </div>
            <div>
                <Grid container spacing={1} justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo1'>
                                    font-size: 30px;
                                    text-align: center;
                                    color: blue;
                                    font-weight: bolder;
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo2'>
                                    font-size: 25px;
                                    text-align: center;
                                    font-family: sans-serif;
                                    color: rgb(129, 235, 203);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo3'>
                                    font-size: 25px;
                                    text-align: center;
                                    font-family: Lucida Sans;
                                    color: rgb(235, 129, 138);
                                    font-style: oblique;
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo4'>
                                    font-size: 25px;
                                    text-align: center;
                                    font-family: Lucida Handwriting;
                                    color: rgb(121, 121, 121);
                                    font-variant: small-caps;
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo5'>
                                    font-size: 25px;
                                    text-align: center;
                                    font-family: Copperplate;
                                    font-weight: bold;
                                    color: rgb(255, 251, 194);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo6'>
                                    font-size: 25px;
                                    text-align: center;
                                    font-family: Papyrus;
                                    color: rgb(18, 39, 56);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo7'>
                                    font-size: 25px;
                                    text-align: center;
                                    font-style: italic;
                                    color: rgb(74, 4, 102);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo8'>
                                    font-size: 20px;
                                    text-align: center;
                                    font-style:oblique;
                                    color: rgb(4, 102, 64);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo9'>
                                    font-size: 20px;
                                    text-align: left;
                                    font-style:initial;
                                    color: rgb(19, 4, 102);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo10'>
                                    font-size: 10px;
                                    text-align: right;
                                    color: rgb(51, 48, 68);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo11'>
                                    font-size: 20px;
                                    text-align: justify;
                                    color: rgb(45, 201, 45);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo12'>
                                    font-size: 20px;
                                    font-family: Consolas;
                                    text-align: justify;
                                    color: rgb(109, 6, 54);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo13'>
                                    font-size: 20px;
                                    font-family: Impact;
                                    text-align: center;
                                    position: top;
                                    color: rgb(139, 95, 211);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo14'>
                                    font-size: 20px;
                                    font-family: Jazz LET;
                                    position: bottom;
                                    color: rgb(212, 236, 128);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo15'>
                                    font-size: 20px;
                                    position: bottom;
                                    color: rgb(34, 39, 17);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo16'>
                                    font-family: Monaco;
                                    font-size: 25px;
                                    position: center;
                                    color: rgb(189, 29, 141);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo17'>
                                    font-size: 25px;
                                    background-color: black;
                                    color: rgb(29, 144, 189);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo18'>
                                    font-size: 20px;
                                    background-color: rgb(173, 24, 24);
                                    text-align: center;
                                    font-family: Brush Script MT;
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo19'>
                                    font-size: 30px;
                                    font-weight: bolder;
                                    background-color: rgb(238, 248, 143);
                                    text-align: center;
                                    font-family:Times New Roman;
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo20'>
                                    font-size: 25px;
                                    font-weight: bolder;
                                    color: rgb(59, 70, 230);
                                    text-align: center;
                                    text-decoration: overline;
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo21'>
                                    font-size: 25px;
                                    color: rgb(111, 24, 224);
                                    text-align: center;
                                    text-decoration: line-through;
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo22'>
                                    font-size: 25px;
                                    color: rgb(24, 224, 124);
                                    text-align: center;
                                    text-decoration: underline;
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo23'>
                                    font-size: 25px;
                                    color: rgb(24, 167, 224);
                                    text-align: left;
                                    text-decoration: overline underline;
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo24'>
                                    font-size: 25px;
                                    text-align: left;
                                    font-family: Brush Script MT;
                                    text-decoration: overline line-through;
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo25'>
                                    font-size: 25px;
                                    text-align: center;
                                    text-transform: uppercase;
                                    font-family: Consolas;
                                    color: coral;
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo26'>
                                    font-size: 25px;
                                    text-align: center;
                                    text-transform: lowercase;
                                    font-family: monospace;
                                    color: rgb(36, 51, 73);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo27'>
                                    font-size: 25px;
                                    text-align: center;
                                    text-transform: lowercase;
                                    font-family: monospace;
                                    color: rgb(36, 51, 73);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo28'>
                                    font-size: 25px;
                                    text-align: center;
                                    font-family: Papyrus;
                                    color: rgb(60, 105, 172);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo29'>
                                    font-size: 25px;
                                    text-align: center;
                                    letter-spacing: 12px;
                                    color: rgb(155, 31, 62);
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} mt={1}>
                        <Card sx={{ maxWidth: 275, backgroundColor: "rgb(228, 240, 250)" }} className='card-st'>
                            <CardContent>
                                <p className='estilo30'>
                                    font-size: 20px;
                                    text-align: center;
                                    text-shadow: 2px 2px 10px rgb(55, 0, 255);
                                    letter-spacing: 12px;
                                    font-weight: bolder;
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>


        </div>
    )
}
export default Tarea2