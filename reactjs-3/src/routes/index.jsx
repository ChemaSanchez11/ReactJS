import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Error from "../pages/Error.jsx";
import LayoutPublic from "../layout/LayoutPublic.jsx";
import Peliculas, { getMoovieDB } from "../pages/Peliculas";

function InfoPeliculas() {
    return null;
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <Error></Error>,
        children: [
            {
              index: true, // Es lo mismo que path: "/"
              element: <Home></Home>
            },
            {
                path: "/peliculas",
                element: <Peliculas />,
                loader: getMoovieDB
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/infopeliculas",
                element: <InfoPeliculas />,
            }
        ]
    }
]);