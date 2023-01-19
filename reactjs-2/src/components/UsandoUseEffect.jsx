// -- Imports --
import React, {useEffect, useState} from "react";

// -- Variables Globales
const stateInitialContador1 = 0;
const stateInitialContador2 = 0;

function UsandoUserEffect(){

    console.log("Comienza mi programa");

    // -- Declaracion de los Estados
    const [contador1, setContador1] = useState(stateInitialContador1);
    const [contador2, setContador2] = useState(stateInitialContador2);

    // -- Declaracion de los Efectos
    useEffect(() => {
        console.log("Estoy ejecutando el efecto");
    });

    useEffect(() => {
        console.log("Estoy ejecutando el efecto cuando cambia contador1");
    }, [contador1]);

    console.log("DEBAJO DEL EFECTO")

    // -- Logica de funciones
    function handleClickContador1(){
        return setContador1((newContador1) => newContador1+1);
    }

    function handleClickContador2(){
        return setContador2(contador2+1);
    }

    // -- Pintamos con JSX el componente
    return (
        <div>
            <p>Contador1: {contador1}</p>
            <p>Contador2: {contador2}</p>
            <p>Ejemplo del uso UseEffect y las dependencias</p>
            <button onClick={() => handleClickContador1()}>Aumentar C1</button>
            <button onClick={() => handleClickContador2()}>Aumentar C2</button>
        </div>
    );
}

export default UsandoUserEffect;