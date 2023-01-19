// -- Imports --
import React, {useEffect, useState, useContext} from "react";
import {useForm} from "react-hook-form";
import {InfoContext} from "../contexts/InfoContext.jsx";
// -- Variables Globales

function Componente5(){

    const values = useContext(InfoContext);

    let { miEdad, miNombre, miDni } = values;

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    // -- Declaracion de los Estados

    // -- Declaracion de los Efectos

    // -- Logica de funciones
    function handleClick(event){
        miEdad.setEdad(() => miEdad.edad+1);
    }

    const miSubmit = (data) => {
        miDni.setDni(data.dni);
        miEdad.setEdad(data.edad);
        miNombre.setNombre(data.nombre);
    }

    // -- Pintamos con JSX el componente

    return (
        <div>
            <h1>Componente 5</h1>
            <p>Edad: {miEdad.edad}</p>
            <p>DNI: {miDni.dni}</p>
            <p>Nombre: {miNombre.nombre}</p>
            <button onClick={handleClick}>Sumar Edad</button>
            <form onSubmit={handleSubmit(miSubmit)}>
                <label>Edad</label>
                <input type="text" {...register("edad", {required: true, maxLength: 20})}/><br/>
                {errors.edad?.type === "required" && <h2>ERROR, ES OBLIGATORIO</h2>}
                <label>Dni</label>
                <input type="text" {...register("dni")}/><br/>
                {errors.dni?.type === "required" && <h2>ERROR, ES OBLIGATORIO</h2>}
                <label>Nombre</label>
                <input type="text" {...register("nombre", {required: true})}/><br/>
                {errors.nombre?.type === "required" && <h2>ERROR, ES OBLIGATORIO</h2>}
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Componente5;