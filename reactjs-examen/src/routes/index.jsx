import React, { useState } from 'react';
import {createBrowserRouter} from "react-router-dom";
import Error from "../pages/Error.jsx";
import App from "../App.jsx";
import ProductoFoto from "../pages/ProductoFoto";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        children: [
            {
                index: true, // Es lo mismo que path: "/"
                element: <App />,
            },
            {
                path: "/productos/:id",
                element: <ProductoFoto />,
            }
        ],
    },
]);