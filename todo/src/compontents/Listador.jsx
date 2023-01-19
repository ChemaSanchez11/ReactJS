// -- Imports --
import React, {useEffect} from "react";
import {Button, Card, Col} from "react-bootstrap";
import loadTask from "../helpers/loadTask";

// -- Variables Globales
function Listador({tareas, setTareas}){

    // -- Declaracion de los Estados

    // -- Declaracion de los Efectos
    useEffect(() => {
        listarTareas();
    }, [tareas]);
    // -- Logica de funciones
        function listarTareas(){
            loadTask()
                .then((tareas) => {
                    setTareas(tareas);
                })
                .catch((error) => console.error(error));
        }
    // -- Pintamos con JSX el componente

    return (
        <Col md={{ span: 6, offset: 0 }}>
            {tareas.map((tarea) => {
                    return (
                        <Card style={{ width: '18rem' }} className="m-2" key={tarea.id}>
                            <Card.Body>
                                <Card.Title className="text-dark">{tarea.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{tarea.type}</Card.Subtitle>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    )
                }
            )}
        </Col>
    );
}

export default Listador;