import React, { useState } from "react";

function Contador() {

    // let miEstado = useState(0);
    const [contador, setContador] = useState(0);
    const [cambiar, setCambiar] = useState(true);

    return <div>
        <h5>{contador}</h5>
        <button className="btn btn-primary" onClick={handleIncrementar}>Incrementar</button>
        <button className="btn btn-primary" onClick={handleDecrementar}>Incrementar</button>
        <button className="btn btn-primary" onClick={handleCambiar}>Cambiar</button>

        {
            cambiar ? <h1>Sisas</h1> : <h1>Nonas</h1>
        }

    </div>;

    function handleIncrementar() {
        return setContador(contador+1);
    }
    function handleDecrementar() {
        return setContador(contador-1);
    }
    function handleCambiar() {
        return setCambiar(!cambiar);
    }

}

export default Contador;