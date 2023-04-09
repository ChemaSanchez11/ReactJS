import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productos from "./components/Productos.jsx";
import Carrito from "./components/Carrito.jsx";

function App() {
  const [carrito, setCarrito] = useState([]);
  return (
    <div className="App row mx-3">
        <div className="col-8">
            <Productos carrito={carrito} setCarrito={setCarrito}/>
        </div>
        <div className="col-4">
            <Carrito carrito={carrito} setCarrito={setCarrito}/>
        </div>
    </div>
  )
}

export default App
