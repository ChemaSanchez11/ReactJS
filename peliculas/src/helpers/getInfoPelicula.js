async function getInfoPelicula(idPeli) {
    const apikey = "d587770e7a8fb19b70d71d7cacab871b";
    const url = `https://api.themoviedb.org/3/movie/${idPeli}?&language=es-es&api_key=${apikey}`; //
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
    }
}

export default getInfoPelicula;