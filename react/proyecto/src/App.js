
import './App.css';
import {useState} from 'react';

import Boton from './components/Boton.js'
import Contador from './components/Contador.js'

function App() {
  const [nroClicks, setNumClicks]= useState(0);
  const clickMas3=()=>{
    setNumClicks(nroClicks +3);
    console.log("click");
  }
  const clickMenos3=()=>{
    setNumClicks(nroClicks -3);
    console.log("click");
  }
  const clickMas1=()=>{
    setNumClicks(nroClicks +1);
    console.log("click");
  }
  const clickMenos1=()=>{
    setNumClicks(nroClicks -1);
    console.log("click");
  }

  const reiniciar=()=>{
    setNumClicks(0);
    console.log("reiniciar");
  }


  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks}/>        
        <div className='contenedor-botones'>
          <div className='suma-botones'>
            <Boton texto="-3" esBotonClick={true} funcionClick={clickMenos3}/>
            <Boton texto="+3" esBotonClick={true} funcionClick={clickMas3}/>
            <Boton texto="-1" esBotonClick={true} funcionClick={clickMenos1}/>
            <Boton texto="+1" esBotonClick={true} funcionClick={clickMas1}/>
          </div>
          <Boton texto="Reiniciar" esBotonClick={false} funcionClick={reiniciar}/>
        </div>

      </div>

    </div>
  );
}

export default App;
