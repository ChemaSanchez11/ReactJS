### `npx create-react-app ReactJs-1`
### `npm create vite@latest reactjs-5`

### `npm start`

Ver [http://localhost:3000](http://localhost:3000)

### `npm install react-bootstrap bootstrap`
### import 'bootstrap/dist/css/bootstrap.min.css';
### `npm install react-uuid`

### Componente

// -- Imports --
import React, {useEffect, useState} from "react";

// -- Variables Globales

function NombreComponente(){

    // -- Declaracion de los Estados

    // -- Declaracion de los Efectos

    // -- Logica de funciones

    // -- Pintamos con JSX el componente

    return (
        <div>Hola</div>
    );
}

export default NombreComponente;

### -- Importar variables de un componente a otro

- Componente Padre

<NombreComponente variable={variable}></NombreComponente>

- Componente Hijo

function NombreComponente({variable}){}

### -- Declaracion de los Estados

const [peliculas, setPeliculas] = useState(initPeliculas);

### -- Declaracion de los Efectos
useEffect(() => {
    nombreFuncion();
}, []);