// -- Imports --
import React, {useEffect, useState} from "react";
import {Button, Card} from "react-bootstrap";
import getInfoPelicula from "../helpers/getInfoPelicula";

// -- Variables Globales

const initPelicula = [];

function TarjetaPeli({ idPeli }){
    // -- Declaracion de los Estados

    const [pelicula, setPelicula] = useState(initPelicula);

    // -- Declaracion de los Efectos
    useEffect(() => {
        traerPeli();
    }, [idPeli]);

    // -- Logica de funciones
    function traerPeli(){
        getInfoPelicula(idPeli)
            .then((pelicula) => {
                setPelicula(pelicula);
            })
            .catch((error) => console.error(error));
    }
    // -- Pintamos con JSX el componente

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`} />
            <Card.Body>
                <Card.Title>{pelicula.title}</Card.Title>
                <Card.Text>{pelicula.overview}</Card.Text>
                <Button variant="primary">Valorar</Button>
            </Card.Body>
        </Card>
    );
}

export default TarjetaPeli;

