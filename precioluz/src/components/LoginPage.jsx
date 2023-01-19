import React from 'react';
import { useForm } from 'react-hook-form';
import {getAll} from "../helpers/firebase.js";

function LoginPage() {
    const { register, handleSubmit } = useForm();

    console.log(getAll());

    const onSubmit = data => {
        console.log(data); // reemplaza por la lógica que procese el inicio de sesión
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="username">Usuario</label>
                <input type="text" id="username" {...register('username', { required: true })} />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" {...register('password', { required: true })} />
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

export default LoginPage;