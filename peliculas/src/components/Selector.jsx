// -- Imports --
import React, {useEffect, useState} from "react";
import getMoovieDB from "../helpers/getMoovieDB";
import {FormSelect} from "react-bootstrap";

// -- Variables Globales

const initPeliculas = [];

function Selector({setIdPeli}){

    console.log("Comienza mi programa");

    // -- Declaracion de los Estados

    const [peliculas, setPeliculas] = useState(initPeliculas);

    // -- Declaracion de los Efectos
    useEffect(() => {
        traerPelis();
    }, []);

    // -- Logica de funciones
    function traerPelis(){
        getMoovieDB()
            .then((peliculas) => {
                setPeliculas(peliculas);
            })
            .catch((error) => console.error(error));
    }

    function handleSelect(e){
        setIdPeli(e.target.value)
    }

    // -- Pintamos con JSX el componente

    return (
        <FormSelect aria-label="Seleccione una por defecto" onChange={(e) => handleSelect(e)}>
            <option>Seleccione Una Pelicula</option>
            {
                peliculas.map((peli) => (
                   <option value={peli.id} key={peli.id}>{peli.title}</option>
                ))
            }
        </FormSelect>
    );
}

export default Selector;