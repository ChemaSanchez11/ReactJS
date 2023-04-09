import React, {useEffect, useState} from "react";
import getServers from "../helpers/getServers.js";
import mysql from '/icons/mysql.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import connectServer from "../helpers/connectServer.js";
import Swal from "sweetalert2";

function Nav({ servers , setServers }) {

    // -- Declaracion de los Efectos
    useEffect(() => {
        getServers()
            .then(servers => {
                if(typeof servers !== 'undefined' && servers.success){
                    if(servers.output.length) setServers(JSON.parse(servers.output));
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error Cargando Los Servidores',
                        text: typeof servers !== 'undefined' ? servers.output : 'Error al conectar',
                        showConfirmButton: false,
                        showCancelButton: true,
                        cancelButtonText: 'Cerrar',
                    })
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    async function handleConnect(event) {
        let server = event.target.closest('a').dataset.server;
        console.log(server);
        connectServer({server})
            .then(server => {
                if(server.success){
                    console.log(server.output);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: typeof server !== 'undefined' ? server.output : 'Error al conectar',
                        showConfirmButton: false,
                        showCancelButton: true,
                        cancelButtonText: 'Cerrar',
                    })
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }


    return (
        <>
            <div className="col-p2">
                <ul id='servers' className="list-group bg-dark">
                    {servers.map((server) => {
                            return (
                                <li key={server.token} onDoubleClick={handleConnect}>
                                    <a className='conection prevent-select px-3 py-1 w-100 d-inline-block'
                                       data-server={server.token} data-id={server.id} data-name={server.host}>
                                        <img id={server.token+'_'+server.host} src={mysql}
                                             width='24' height='24' alt='' className='align-middle'/>
                                            <span className='align-middle' style={{fontSize: "18px"}}> {`${server.host} [${server.user}]`}</span>
                                    </a>
                                    <div id='loading' className='mt-2' style={{display: "none"}}>
                                        <div className='spinner m-auto'>
                                            <div className='spinner-circle spinner-circle-outer'/>
                                            <div className='spinner-circle-off spinner-circle-inner'/>
                                            <div className='spinner-circle spinner-circle-single-1'/>
                                            <div className='spinner-circle spinner-circle-single-2'/>
                                        </div>
                                    </div>

                                    <ul id={`'table_${server.id}_${server.host}`} className='list-group bg-dark d-none'>
                                    </ul>

                                </li>
                            )
                        }
                    )}

                </ul>
            </div>
            <div id="context-menu" className="no-visible">
                <div className="item" id="close-connection">Cerrar Conexion</div>
                <div className="item">Editar Conexion</div>
                <div className="item">Eliminar Conexion</div>
            </div>
        </>
    )
}

export default Nav;
