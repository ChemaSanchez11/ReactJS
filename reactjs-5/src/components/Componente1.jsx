// -- Imports --
import React, {useContext, useEffect, useState} from "react";
import Componente2 from "./Componente2.jsx";
import {InfoContext} from "../contexts/InfoContext.jsx";

// -- Variables Globales

function Componente1(){
    const values = useContext(InfoContext);

    let miEdad = values.miEdad;

    // -- Declaracion de los Estados

    // -- Declaracion de los Efectos

    // -- Logica de funciones

    // -- Pintamos con JSX el componente

    return (
        <div>
            <h1>Componente 1 {miEdad.edad}</h1>
            <Componente2></Componente2>
        </div>
    );
}

export default Componente1;