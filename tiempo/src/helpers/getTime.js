async function getTime(localidad, pais) {
    const token = 'fdee1d0779b23d3d497a9f0de22cbd14';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${localidad},${pais}&appid=${token}&units=metric&lang=es`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
    }
}

export default getTime;