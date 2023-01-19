import './App.css';
import Selector from "./components/Selector";
import {Col, Row} from "react-bootstrap";
import TarjetaPeli from "./components/TarjetaPeli";
import {useState} from "react";

function App() {

    const [idPeli, setIdPeli] = useState(0);

    return (
        <div className="App">
            <Row>
                <Col>
                    <Selector setIdPeli={setIdPeli}></Selector>
                </Col>
                <Col>
                    <TarjetaPeli idPeli={idPeli}></TarjetaPeli>
                </Col>
            </Row>
        </div>
    );
}

export default App;
