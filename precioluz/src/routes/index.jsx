import React, { useState } from 'react';
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Error from "../pages/Error.jsx";
import LoginPage from "../components/LoginPage.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'login', element: <LoginPage /> },
            // otras rutas de la aplicación
        ],
    },
]);