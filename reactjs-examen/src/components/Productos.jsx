import React, {useContext, useEffect} from "react";
import getProducts from "../helpers/getProducts.js";
import Producto from "./Producto";

import {ProductContext} from "../contexts/ProductContext.jsx";

function Productos({ carrito, setCarrito }) {

    const values = useContext(ProductContext);
    let { products, setProducts } = values;

    // -- Declaracion de los Efectos
    useEffect(() => {
        getProducts()
            .then(apiProducts => {
                setProducts(apiProducts);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="row container justify-content-around">
            {products.map((product) => {
                    return (
                        <div key={product.id} className="col-6 mt-2">
                            <Producto product={product} carrito={carrito} setCarrito={setCarrito}></Producto>
                        </div>
                    )
                }
            )}
        </div>
    )
}

export default Productos;
