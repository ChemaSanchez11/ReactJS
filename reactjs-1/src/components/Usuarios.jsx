import React, {useState} from "react";

const userIni = [
    {
        id: 1,
        nombre: "Edu",
        edad: 20,
        img: "urlImg"
    },
    {
        id: 2,
        nombre: "Pepe",
        edad: 22,
        img: "urlImg"
    },
]

function Usuarios() {

    const [user, setUser] = useState(userIni);

    return (<div>

            {user.map((user) => {
                    return (
                        <div className="border border-primary p-2 my-2">
                            <p>Nombre {user.nombre}</p>
                            <p>Edad {user.edad}</p>
                            <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                        </div>
                    )
                }
            )}

        <button className="btn btn-warning" onClick={handleCreateUser}>Crear Usuario</button>
    </div>);

    function handleCreateUser() {
        //Insertamos un objeto nuevo sin mutarlo
        const newUser = [...user];
        newUser.push({
            id: newUser.length + 1, nombre: "Carlos", edad: 30, img: "urlImg"
        })
        newUser.reverse();

        console.log(newUser);

        return setUser(newUser);
    }

    //Eliminar usuario seleccionado
    function handleDeleteUser(userid) {
        //Filtramos y obtenemos un array con los diferentes a esa id
        const newUser = user.filter(user => user.id !== userid);
        return setUser(newUser);
    }

}

export default Usuarios;