// -- Imports --
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

// -- Variables Globales

function Nav(){

    // -- Declaracion de los Estados

    // -- Declaracion de los Efectos

    // -- Logica de funciones

    // -- Pintamos con JSX el componente

    return (
        <nav className="navbar navbar-dark bg-dark">
            <NavLink to="/peliculas" className="btn btn-primary">Peliculas</NavLink>
            <NavLink to="/infopeliculas" className="btn btn-primary">Info</NavLink>
            <NavLink to="/about" className="btn btn-primary">About</NavLink>
        </nav>

    );
}

export default Nav;