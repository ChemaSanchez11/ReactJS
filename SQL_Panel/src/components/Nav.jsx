import server_connection from '/icons/server_connection.png'
import database_reload from '/icons/database_reload.png'
import query from '/icons/query.png'
import warning from '/icons/warning.png'
import info from '/icons/info.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {

    return (
        <nav className="navbar navbar-dark justify-content-start">

            <div id="vertical-line" className="mx-2">
                <a className="navbar-brand" id="add_new_server" >
                    <img src={server_connection} width="45" height="45" alt="" data-bs-toggle="modal" data-bs-target="#modalAddHost"/>
                </a>
                <a className="navbar-brand" href="#">
                    <img src={database_reload} width="45" height="45" alt=""/>
                </a>
            </div>

            <a className="navbar-brand ms-2" href="#">
                <img src={query} width="45" height="45" alt=""/>
            </a>

            <a className="navbar-brand ms-auto" href="#">
                <img id="status_connect" src={warning} width="30" height="30" alt="" />
            </a>
            <a className="navbar-brand" href="#">
                <img src={info} width="30" height="30" alt="" data-bs-toggle="modal" data-bs-target="#modalInfo" />
            </a>

        </nav>
    )
}

export default Nav;
