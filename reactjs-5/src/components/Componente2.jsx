// -- Imports --
import React, {useEffect, useState, useContext} from "react";
import Componente3 from "./Componente3.jsx";
import {InfoContext} from "../contexts/InfoContext.jsx";

// -- Variables Globales

function Componente2(){

    const values = useContext(InfoContext);

    let miEdad = values.miEdad;

    // -- Declaracion de los Estados

    // -- Declaracion de los Efectos

    // -- Logica de funciones
    function handleClick(event){
        miEdad.setEdad(() => miEdad.edad-1);
    }

    // -- Pintamos con JSX el componente

    return (
        <div>
            <h2>Componente 2</h2>
            <button onClick={handleClick}>Restar Edad</button>
            <Componente3></Componente3>
        </div>
    );
}

export default Componente2;