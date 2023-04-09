import 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import Componente1 from "./components/Componente1.jsx";
import Componente5 from "./components/Componente5.jsx";
import {ContextInfoProvider} from "./contexts/InfoContext.jsx";

function App() {
  return (
    <div className="App">
        <ContextInfoProvider>
            <Componente1></Componente1>
            <Componente5></Componente5>
        </ContextInfoProvider>
    </div>
  )
}

export default App
