//Importamos create context que permite crear el contexto
import {createContext, useContext, useState} from "react";

export const ProductContext = createContext();

//Creamos el provider que permite envolver a los componentes que les quiero mandr el contexto
export function ContextProductProvider(props) {
    //Ponemos lo que queremos que se vean en los componentes
    const [products, setProducts] = useState([])
    const value = {products, setProducts};
    //Exportamos un componente de tipo Provider
    return <ProductContext.Provider value={value}>{props.children}</ProductContext.Provider>;
}

//Debemos exportar el contexto y el provider

//Hook personalizado
export function useProductContext() {
    return useContext(ProductContext);
}