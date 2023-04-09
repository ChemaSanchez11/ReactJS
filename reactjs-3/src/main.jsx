import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//Importamos elemento para cargar tura
import { RouterProvider } from "react-router-dom"
import {router} from "./routes/index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
