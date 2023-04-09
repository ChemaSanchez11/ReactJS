import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Peliculas = () => {
    const { peliculas } = useLoaderData();
    console.log(peliculas);
    return peliculas.map((pelicula) => (
        <li key={pelicula.id}>
            <Link to={`/infopeliculas/${pelicula.id}`}>{pelicula.title}</Link>
        </li>
    ));
};

export default Peliculas;

export const getMoovieDB = async () => {
    const apikey = "d587770e7a8fb19b70d71d7cacab871b";
    const url = 'https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key='+apikey;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const peliculas = data.results;
        return { peliculas };
    } catch (e) {
        console.error(e);
    }
}
