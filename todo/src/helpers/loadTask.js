async function loadTask() {

    try {
        const response = await fetch("http://localhost:8080/tareas");
        return await response.json();
    } catch (e) {
        console.error(e);
    }

}

export default loadTask;