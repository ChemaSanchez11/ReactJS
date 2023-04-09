import React from "react";
import {Link} from "react-router-dom";

function Productos({product, carrito, setCarrito}) {

    function addProduct(event, productSelect){


        //Recorro para comprobar si existe y declaro un booleano
        let repeat = false;
        carrito.forEach(function (element) {
            if(element.id === productSelect.id){
                repeat = true;
                return false;
            }
        });

        //Si es repetido lo añadimos y cambiamos las clases
        if(!repeat){
            let carritoCopia = [...carrito];
            carritoCopia.push(productSelect);
            setCarrito(carritoCopia);
            if(event.target.classList.contains('fa-plus-circle')){
                event.target.classList.remove('fa-plus-circle');
                event.target.classList.add('fa-check-circle');
            }
        } else {
            //Si no llamo a la funcion para quitar el producto seleccionado y quito las clases
            removeRepeatProduct(carrito, productSelect.id);
            if(event.target.classList.contains('fa-check-circle')){
                event.target.classList.remove('fa-check-circle');
                event.target.classList.add('fa-plus-circle');
            }
        }

    }

    /**
     * Eliminamos el producto seleccionado del carrito
     * @param {array} carrito
     * @param {int} id
     * @return array
     */
    function removeRepeatProduct(carrito, id) {

        let filter = [];

        //Recorro para pushear los elementos que no son iguales
        carrito.forEach(function (event) {
           if(event.id !== id) filter.push(event);
        });

        //Seteo todos menos el seleccionado
        setCarrito(filter);
    }

    return (
        <div className="card bg-grey p-5" style={{width: '20rem'}}>
            <Link to={'/productos/'+product.id}><img className="card-img-top img-fluid mx-1" src={product.image}/></Link>
            <div className="card-body mx-1">
                <span className="card-title">{product.title}</span>
                <div className="d-flex">
                    <p className="card-text">Precio {product.price}</p>
                    <i onClick={(event) => addProduct(event, product)} className="fas fa-plus-circle ms-auto mt-1 text-success"></i>
                </div>

            </div>
        </div>
    )
}

export default Productos;
