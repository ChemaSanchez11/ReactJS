import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import "./scss/sweetalert.css";
import Nav from "./components/Nav.jsx";
import ServersList from "./components/ServersList.jsx";
import ModalAddHost from "./components/ModalAddHost";
import ModalInfo from "./components/ModalInfo.jsx";

function Main() {
    const [servers, setServers] = useState([]);

    return (
        <React.Fragment>
            <Nav/>
            <div className="bg-dark d-flex">
                <ServersList servers={servers} setServers={setServers}/>
            </div>
            <ModalAddHost servers={servers} setServers={setServers}/>
            <ModalInfo/>
        </React.Fragment>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <Main/>
);