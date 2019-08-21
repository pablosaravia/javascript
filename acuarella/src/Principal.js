import React from 'react';
import ReactDOM from 'react-dom';
import './Principal.css';
import App from './App';
import Galeria from './subpages/Galeria.js';

//import arrayGal from './subpages/Galeria.json';

//import Button from 'react-bootstrap/Button';
  
  function handleClick () {
      ReactDOM.render(<App />, document.getElementById('mainRoot'));
      ReactDOM.render(<Galeria />, document.getElementById('mainData'))
      //.catch(alert('error cargando la galeria'))
      }
  
  
function Principal() {
  return (
    <div className="Principal">
       <div id="mainRoot">
            <div className="PrincipalBack" >
               <div className="PrincipalLogo" onClick={handleClick}>
               </div>
            </div>
        </div>
        <div id="mainData">
        </div>
    </div>
  );
}
  
export default Principal;