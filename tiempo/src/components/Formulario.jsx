import React from "react";
import {useForm} from "react-hook-form";
import getTime from "../helpers/getTime.js";
function Formulario() {
    //register registra ese cambo, y handlesubmit recoge el submit
    //formState recoge los errores, watch en tiempo real los datos

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            pais: 'España'
        }
    });
    const miSubmit = (data) => {
        console.log(data);
        console.log(getTime(data.localidad, data.pais));
    }


    return (
        <div className="Formulario">
            <form onSubmit={handleSubmit(miSubmit)}>
                <label>Pais</label>
                <input type="text" {...register("pais", {required: true, maxLength: 20})}/><br/>
                {errors.pais?.type === "required" && <h2>ERROR, ES OBLIGATORIO</h2>}
                <label>Localidad</label>
                <input type="text" {...register("localidad")}/><br/>
                {errors.localidad?.type === "required" && <h2>ERROR, ES OBLIGATORIO</h2>}
                <label>Nombre</label>
                <input type="text" {...register("nombre", {required: true})}/><br/>
                {errors.pais?.type === "required" && <h2>ERROR, ES OBLIGATORIO</h2>}
                <input type="submit"/>
                {(watch("pais") && watch("localidad") && watch("nombre")) && (
                    <div>
                        <label>Fecha Expedicion</label>
                        <input type="date"/>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Formulario
