import './App.css';
import Creador from "./compontents/Creador";
import Listador from "./compontents/Listador";
import {Row} from "react-bootstrap";
import {useState} from "react";

const initTareas = [];

function App() {

    const [tareas, setTareas] = useState(initTareas);

    return (
        <div className="App">
            <Row>
                <Creador setTareas={setTareas}></Creador>
                <Listador tareas={tareas} setTareas={setTareas}></Listador>
            </Row>
        </div>
    );
}

export default App;
