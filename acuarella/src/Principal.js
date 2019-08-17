import React from 'react';
import ReactDOM from 'react-dom';
import './Principal.css';
import App from './App';
import Galeria from './subpages/Galeria.js';
import arrayGal from './subpages/Galeria.json';

//import Button from 'react-bootstrap/Button';
  
  function handleClick () {
      ReactDOM.render(<App />, document.getElementById('root'));
      ReactDOM.render(<Galeria datos={arrayGal} />, document.getElementById('dataFrame'));
  }
  
  
function Principal() {
  return (
    <div className="Principal">
        <div className="PrincipalBack" >
            <div className="PrincipalLogo" onClick={handleClick}>
            </div>
        </div>
    </div>
  );
}
  
export default Principal;