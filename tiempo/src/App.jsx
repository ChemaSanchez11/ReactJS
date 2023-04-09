import { useState } from 'react'
import './App.css'
import Formulario from "./components/Formulario.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Formulario></Formulario>
    </div>
  )
}

export default App
