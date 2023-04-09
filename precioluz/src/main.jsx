import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// importamos el elemento para cargar mi ruta
import { RouterProvider } from "react-router-dom";
import {router} from "./routes/index.jsx";
import {ContextUserProvider} from "./contexts/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ContextUserProvider>
        <RouterProvider router={router} />
    </ContextUserProvider>
);
