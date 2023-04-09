import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GuardarPiezas from "./components/GuardarPiezas.jsx";
import MostrarPiezas from "./components/MostrarPiezas.jsx";

const piezaFake = {
    id: "",
    data: {
        nombre: "",
        precio: 0,
        valoracion: 0,
    }
}

function App() {
  const [pieza, setPieza] = useState(piezaFake);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>FireBase</h1>
      <div>
          <GuardarPiezas pieza={pieza} setPieza={setPieza}></GuardarPiezas>
      </div>
      <div>
          <MostrarPiezas pieza={pieza} setPieza={setPieza}></MostrarPiezas>
      </div>
    </div>
  )
}

export default App
