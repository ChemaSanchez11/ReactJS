import {React, useContext, useState} from "react";
import { Navigate } from 'react-router-dom';
import {userContext} from "../contexts/UserContext.jsx";

function Home(){

    const values = useContext(userContext);

    return (
        <div>
            {values.user && (
                <span>Hola</span>
            )}
            {!values.user && <Navigate to="/login" />}
        </div>
    );
};

export default Home;