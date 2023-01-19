import React from "react";

function Carrito({ carrito, setCarrito }) {

    let precio = 0;

    /**
     * Eliminamos los productos del carrito
     */
    function vaciarCarrito(){
        setCarrito([]);
    }

    return (
        <div className="row bg-grey mt-5 px-5 py-3" style={{minHeight: '200px'}}>

            <h1 className="text-center">Productos <i className="fas fa-shopping-cart"></i></h1>

            {carrito.map((product) => {

                    { precio += product.price}

                    return (
                        <li key={product.id} className="col-12 py-2">
                            {/*<span className="text-center">{product.title}</span>*/}
                            <div className="mt-auto d-flex justify-content-around">
                                <h5>{product.title}</h5>
                                <h5>{product.price} €</h5>
                            </div>
                        </li>
                    )
                }
            )}

            <div className="mt-auto d-flex justify-content-around border-y my-4 py-2">
                <h5>Total:</h5>
                <h5>{precio.toFixed(2)} €</h5>
            </div>
            { carrito.length ? <span className="text-center "><i className="fas fa-credit-card pe-3"></i><button className="btn btn-primary" onClick={() => vaciarCarrito()}>Pagar</button></span> : ''}

        </div>
    )
}

export default Carrito;
