import React from "react";
import {useForm} from "react-hook-form";
import validarEdad from "./misValidaciones.js";
function FormularioDatos() {
    //register registra ese cambo, y handlesubmit recoge el submit
    //formState recoge los errores, watch en tiempo real los datos


    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            nombre: 'Chema'
        }
    });

    const miSubmit = (data) => {
        console.log(data);
    }

    //Checkbox carnet
    const tieneCarnet = watch('carnet');

    return (
        <div className="FormularioDatos">
            <form onSubmit={handleSubmit(miSubmit)}>
                <label>Nombre</label>
                <input type="text" {...register("nombre", {required: true, maxLength: 15})}/><br/>
                {errors.nombre?.type === "required" && <h2>ERROR, ES OBLIGATORIO</h2>}
                <label>Apellidos</label>
                <input type="text" {...register("apellidos")}/><br/>
                <label>Edad</label>
                <input type="text" {...register("edad", {required: true, validate: validarEdad})}/><br/>
                {errors.edad && <h2>ERROR EN EDAD</h2>}
                <label>Correo Electronico</label>
                <input type="text" {...register("email", {required: true})}/><br/>
                <label>C. Postal</label>
                <input type="text" {...register("postal", {required: true, pattern: /^[0-5][0-9]{4}$/gm})}/><br/>
                {errors.postal?.type === "pattern" && <h2>ERROR EN EL PATTERN</h2>}
                <select  {...register("provincia")}>
                    <option value="andalucia">Andalucia</option>
                    <option value="fuera">Fuera de Andalucia</option>
                </select><br/>
                <label>Dispone de carnet de conducir</label>
                <input type="checkbox" {...register("carnet")}/>
                <input type="submit"/>
                {tieneCarnet && (
                    <div>
                        <label>Fecha Expedicion</label>
                        <input type="date"/>
                    </div>
                )}

                <label>{watch('nombre')}</label>
            </form>
        </div>
    )
}

export default FormularioDatos
