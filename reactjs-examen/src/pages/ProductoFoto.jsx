import React, {useContext} from "react";
import {Link, useParams} from "react-router-dom";
import {ProductContext} from "../contexts/ProductContext.jsx";
import getProducts from "../helpers/getProducts.js";

function ProductoFoto() {

    const {id} = useParams();

    const values = useContext(ProductContext);

    let {products, setProducts} = values;

    //Si esta vacio vuelvo a llamar para obtener todos los productos
    if (!products.length){
        getProducts()
            .then(apiProducts => {
                setProducts(apiProducts);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="d-flex text-center my-4">
            {products.map((product) => {
                    if (product.id === parseInt(id)) {
                        return (
                            <div key={product.id} className="w-50 mx-auto">
                                <p>{product.title}</p>
                                <img style={{height: "20rem", width: "20rem"}} src={product.image}></img>
                                <p>{product.description}</p>
                                <p>Precio {product.price}</p>
                                <Link to="/">Volver</Link>
                            </div>

                        )
                    }
                }
            )}
        </div>
    )
}

export default ProductoFoto
