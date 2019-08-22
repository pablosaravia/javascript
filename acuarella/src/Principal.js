import React from 'react';
import ReactDOM from 'react-dom';
import './Principal.css';
import App from './App';
import Galeria from './subpages/Galeria.js';

//import arrayGal from './subpages/Galeria.json';

//import Button from 'react-bootstrap/Button';
  
  function handleClick () {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      ReactDOM.render(<App />, document.getElementById('mainRoot'));
      ReactDOM.render(<Galeria />, document.getElementById('mainData'))
      //.catch(alert('error cargando la galeria'))
      }
  
  
function Principal() {
  return (
    <div className="Principal">
       <div>
            <div className="PrincipalBack" >
               <div className="PrincipalLogo" onClick={handleClick}>
               </div>
            </div>
        </div>
        <div id="mainRoot"/>
        <div id="mainData"/>
    </div>
  );
}
  
export default Principal;