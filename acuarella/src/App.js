import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Portfolio from './subpages/Portfolio.js';
import Contacto from './subpages/Contacto.js';
import Precios from './subpages/Precios.js';
import logo from './logo.svg';


function renderLink (destino) {
  ReactDOM.render(<this.destino />, document.getElementById('dataFrame'));
}

function handleClickContacto () {
  ReactDOM.render(<Contacto />, document.getElementById('dataFrame'));
}

function handleClickPrecios () {
  ReactDOM.render(<Precios />, document.getElementById('dataFrame'));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <section className="App-logo">
         <img src={logo} alt="Acuarella Fotografia"></img>
       </section>
        <hgroup className="App-hgroup">
           <h1>Aquarella Fotografia</h1>
           <h3>By Noelia Abate</h3>
        </hgroup>
      </header>
      <nav className="App-menu">
          <ul>
            <li onClick={renderLink(Portfolio)}>Portfolio</li>
            <li onClick={handleClickContacto}>Contacto</li>
            <li onClick={handleClickPrecios}>Precios</li>
          </ul>
      </nav>
      <div id="dataFrame"></div>
    </div>
  );
}

export default App;
