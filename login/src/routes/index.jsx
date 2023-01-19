import {createBrowserRouter} from "react-router-dom";
import Home from "../components/Home.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        children: [
            {
              index: true, // Es lo mismo que path: "/"
              element: <Home></Home>
            },
            // {
            //     path: "/peliculas",
            //     element: <Peliculas />,
            //     loader: getMoovieDB
            // }
        ]
    }
]);