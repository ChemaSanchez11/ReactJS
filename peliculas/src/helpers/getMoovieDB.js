async function getMoovieDB() {
    const apikey = "d587770e7a8fb19b70d71d7cacab871b";
    const url = 'https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key='+apikey;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (e) {
        console.error(e);
    }
}

export default getMoovieDB;