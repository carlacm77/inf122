
import './App.css';

import Login from './components/Login.js'
import Registro from './components/Registro.js';
import Perfil from './components/Perfil.js'
import Navbar from './components/Navbar.js';
import Galeria from './components/Galeria.js';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {


  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
              <Route path="/" element={<Navbar/>}>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/galeria" element={<Galeria/>}/>
              </Route>
          </Routes>          
        </div>
      </Router>
    </div>
  );
}

export default App;