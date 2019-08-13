import React from 'react';
import ReactDOM from 'react-dom';
import './Principal.css';
import App from './App';
import Button from 'react-bootstrap/Button';

function handleClick () {
    ReactDOM.render(<App />, document.getElementById('root'));
}


function Principal() {
    return (
      <div className="Principal">
          <section className="Principal-Section">
              <Button variant="flat" size="xxl" id="Principal-Boton" onClick={handleClick}>
                         Ingresar
              </Button>
          </section>
      </div>
    );
  }

  export default Principal;
