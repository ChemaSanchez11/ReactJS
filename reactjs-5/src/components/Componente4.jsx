// -- Imports --
import React, {useEffect, useState, useContext} from "react";

import {InfoContext, useInfoContext} from "../contexts/InfoContext.jsx";

console.log(InfoContext);

function Componente4() {

    const values = useInfoContext();

    let miEdad = values.miEdad;

    // -- Declaracion de los Estados

    // -- Declaracion de los Efectos

    // -- Logica de funciones

    // -- Pintamos con JSX el componente

    return (
        <div>
            <h4>Componente 4 {miEdad.edad}</h4>
        </div>
    );
}

export default Componente4;