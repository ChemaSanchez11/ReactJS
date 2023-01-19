//1- Importamos create context que permite crear el contexto
import {createContext, useContext, useState} from "react";

export const InfoContext = createContext();

//2- Creamos el provider que permite envolver a los componentes que les quiero mandr el contexto

export function ContextInfoProvider(props) {
    //Ponemos lo que queremos que se vean en los componentes
    const [dni, setDni] = useState('-');
    const [nombre, setNombre] = useState('-');
    const [edad, setEdad] = useState(0);
    const value = {miEdad: {edad, setEdad}, miNombre: {nombre, setNombre}, miDni: {dni, setDni}};
    //3- Exportamos un componente de tipo Provider
    return <InfoContext.Provider value={value}>{props.children}</InfoContext.Provider>;
}

// 4- Debemos exportar el contexto y el provider

// -5 Hook personalizado

export function useInfoContext() {
    const context = useContext(InfoContext);
    return context;
}