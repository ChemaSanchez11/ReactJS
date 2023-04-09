import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/index.jsx";
import {ContextProductProvider} from "./contexts/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProductProvider>
        <RouterProvider router={router} />
    </ContextProductProvider>,
)
