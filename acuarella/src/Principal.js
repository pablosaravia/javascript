import React from 'react';
import ReactDOM from 'react-dom';
import './Principal.css';
import App from './App';
import Galeria from './subpages/Galeria'
import Button from 'react-bootstrap/Button';

function handleClick () {
    ReactDOM.render(<App />, document.getElementById('root'));
    ReactDOM.render(<Galeria />, document.getElementById('dataFrame'));

}


function Principal() {
    return (
      <div className="Main">
          <div className="Principal">
             <section className="Principal-Section">
                <Button variant="flat" size="xxl" id="Principal-Boton" onClick={handleClick}>
                         Ingresar
                </Button>
             </section>
          </div>
      </div>
    );
  }

  export default Principal;
