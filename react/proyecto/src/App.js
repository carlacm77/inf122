
import './App.css';
import {useState} from 'react';

import Boton from './components/Boton.js'
import Contador from './components/Contador.js'

function App() {
  const [nroClicks, setNumClicks]= useState(0);
  const [show, setShow] = useState(true)
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
  const clickMul2=()=>{
    setNumClicks(nroClicks *2);
    console.log("click");
  }
  const reiniciar=()=>{
    setNumClicks(0);
    console.log("reiniciar");
  }
  const mostrar =()=> {
    setShow(!show);
  }


  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} mostrar={show}/>        
        <div className='contenedor-botones'>
          <div className='suma-botones'>
            <Boton texto="-3" esBotonClick={true} funcionClick={clickMenos3}/>
            <Boton texto="+3" esBotonClick={true} funcionClick={clickMas3}/>
            <Boton texto="-1" esBotonClick={true} funcionClick={clickMenos1}/>
            <Boton texto="+1" esBotonClick={true} funcionClick={clickMas1}/>
            <Boton texto="x2" esBotonClick={true} funcionClick={clickMul2}/>
          </div>
          <Boton texto="Reiniciar" esBotonClick={false} funcionClick={reiniciar}/>
          <Boton texto="Mostrar/Ocultar" esBotonClick={false} funcionClick={mostrar}/>
        </div>

      </div>

    </div>
  );
}

export default App;
