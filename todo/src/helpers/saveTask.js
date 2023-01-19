import loadTask from "./loadTask";

async function saveTask(newTask, setTareas) {

    //Se almacenan en el JSON-Server
    try {
        const options = {
            method: "POST", headers: {
                "Content-Type": "application/json; charset=utf-8",
            }, body: JSON.stringify(newTask),
        };

        const res = await fetch("http://localhost:8080/tareas", options);


        if (res.ok) console.log(res.status); else throw {status: res.status, statusText: res.statusText};

        loadTask()
            .then((tareas) => {
                setTareas(tareas);
            })
            .catch((error) => console.error(error));

    } catch (exception) {
        console.log(exception.statusText);
    }

}

export default saveTask;