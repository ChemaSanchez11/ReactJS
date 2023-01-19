// -- Imports --
import React, {useEffect, useState} from "react";
import getUsers from "../helpers/getUsers";
import {Card} from "react-bootstrap";

// -- Variables Globales
const initialUsuarios = [];

function DatosAPI(){

    // -- Declaracion de los Estados

    const [usuarios, setUsuarios] = useState(initialUsuarios);

    // -- Declaracion de los Efectos
    useEffect(() => {
        traerUsuarios();
    }, []);

    // -- Logica de funciones

    //Gracias al helpers getUser me devuelve los usuarios de la api reqres.in
    function traerUsuarios(){
        getUsers()
            .then(users => {
                setUsuarios(users);
            })
            .catch((error) => {
               console.error(error);
            });
    }

    // -- Pintamos con JSX el componente
    return (
        <div className="d-flex mx-auto">
            {usuarios.map((user) => {
                    return (
                        <Card className="text-center mb-4" border="primary" style={{width: "18rem"}} key={user.id}>
                            <Card.Img src={user.avatar} alt="alt"></Card.Img>
                            <Card.Body>
                                <Card.Title>
                                    {user.first_name}
                                </Card.Title>
                                <Card.Subtitle>
                                    {user.email}
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    )
                }
            )}
        </div>
    );
}

export default DatosAPI;