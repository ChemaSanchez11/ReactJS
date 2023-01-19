// import logo from './logo.svg';
import './App.css';
// import Card from "./components/Card";
// import uuidv4 from 'react-uuid';
// import Contador from "./components/Contador";
import Usuarios from "./components/Usuarios";

function App() {

    return (<div className="App">
        {/*<Contador>*/}

        {/*</Contador>*/}
        <Usuarios />

    </div>);

    // const nombre = "Plutonium";
    //
    // const nombres = [
    //     {
    //         nombre: "Pepe",
    //         profesion: "developer",
    //         genero: "masculino",
    //     },
    //     {
    //         nombre: "Maria",
    //         profesion: "developer",
    //         genero: "femenino",
    //     }
    // ];
    //
    // let randomPhoto = randomNumber(0, 99);
    //
    // return (<div className="App">
    //
    //     <ul className="list-group">
    //         {nombres.map((user) => {
    //             return (
    //                 <li key={uuidv4()} data-id={uuidv4()} className="list-group-item">
    //                     <Card nombre={user.nombre}
    //                           profesion={user.profesion}
    //                           url={user.genero === 'masculino' ? `https://randomuser.me/api/portraits/men/${randomPhoto}.jpg` : `https://randomuser.me/api/portraits/women/${randomPhoto}.jpg`}
    //                     />
    //                 </li>
    //             )}
    //         )}
    //     </ul>
    //
    //     <img alt="logo" className="App-logo" src={logo}></img>
    //     <h3>{nombre}</h3>
    //
    // </div>);
}

// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }


export default App;
