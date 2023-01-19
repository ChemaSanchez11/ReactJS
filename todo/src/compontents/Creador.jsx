// -- Imports --
import React, {useState} from "react";
import {Button, Col, Form, InputGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../logo.svg";
import saveTask from "../helpers/saveTask";

// -- Variables Globales

function Creador({setTareas}) {

    // -- Declaracion de los Estados
    const [validated, setValidated] = useState(false);

    // -- Declaracion de los Efectos

    // -- Logica de funciones

    async function handleSubmit(event) {
        const form = event.currentTarget;

        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        const formData = new FormData(form);

        let newTask = {
            name: formData.get('nombre-tarea'),
            type: formData.get('tipo-tarea')
        }

        saveTask(newTask, setTareas)

        setValidated(true);
    };

    // -- Pintamos con JSX el componente

    return (
        <Col md={{ span: 6, offset: 0 }}>

            <img src={logo} className="App-logo" alt="logo" />

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Nombre Tarea</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre-tarea"
                        placeholder="Nombre Tarea"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Debe Rellenar Nombre de la tarea
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustomUsername">
                    <Form.Label>Tipo Tarea</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="tipo-tarea">@</InputGroup.Text>
                        <Form.Select name="tipo-tarea" aria-describedby="tipo-tarea" required>
                            <option>Tarea Corto Alcance</option>
                            <option>Tarea Prioritaria</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Selecciona Un Tipo De Tarea.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Button type="submit">Crear</Button>
            </Form>
        </Col>
    );
}

export default Creador;