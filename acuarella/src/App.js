import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Portfolio from './subpages/Portfolio.js';
import Contacto from './subpages/Contacto.js';
import Precios from './subpages/Precios.js';
import logo from './logo.svg';

function handleClickPortfolio () {
  ReactDOM.render(<Portfolio />, document.getElementById('dataFrame'));
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
      <div>
      <header className="AppHeader">
         <section className="AppLogo">
           <img src={logo} alt="Acuarella Fotografia"></img>
         </section>
         <hgroup className="AppHgroup">
           <h1>Aquarella Fotografia</h1>
           <h3>By Noelia Abate</h3>
         </hgroup>
      </header>
      </div>
      <div className="AppDivMenu">
           <section className="AppMenu">
                <text>|</text>
                <text onClick={handleClickPortfolio}>Portfolio</text>
                <text>|</text>
                <text onClick={handleClickContacto}>Contacto</text>
                <text>|</text>
                <text onClick={handleClickPrecios}>Precios</text>
                <text>|</text>
          </section>
      </div>
      </div>
  );
}

export default App;
