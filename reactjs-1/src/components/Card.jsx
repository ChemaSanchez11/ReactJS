import React from "react";
import './card.css';

function Card({ nombre, profesion, url }){

    function handleClick(e){
        e.preventDefault();
        // document.querySelector('.user-img').style.setAttribute('filter: blur(90%)');
        console.log(document.querySelector('.user-img').style.setProperty('filter', 'blur(0.7rem)'));
    }

    return (
        <div className="card">
            <img src={url} className="card-img-top user-img mx-auto" alt="user"/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{profesion}</li>
                    </ul>
                    <button className="btn btn-danger" type="button" onClick={handleClick}>Difuminar</button>
                </div>
        </div>
    );
}

export default Card;