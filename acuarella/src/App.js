import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Portfolio from './subpages/Portfolio.js';
import Contacto from './subpages/Contacto.js';
import Productos from './subpages/Productos.js';
import Galeria from './subpages/Galeria.js'
import logo from './logo.svg';
//import Applist from './Applist.json'

function handleClickPortfolio () {
  ReactDOM.render(<Portfolio />, document.getElementById('mainData'));
}

function handleClickContacto () {
  ReactDOM.render(<Contacto />, document.getElementById('mainData'));
}

function handleClickProductos () {
  ReactDOM.render(<Productos />, document.getElementById('mainData'));
}

function handleClickGaleria () {
      ReactDOM.render(<Galeria />, document.getElementById('mainData'));
}

function handleClick (props) {
  console.log('contenido de props ' + props)
  React.render(<props/>, document.getElementById('mainData'));
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
                    <h1>Acuarella Fotografia</h1>
                    <h3>By Noelia Abate</h3>
                </hgroup>
            </header>
          </div>
          <div className="AppDivMenu">
              <section className="AppMenu">
                <p>|</p>
                <p className="menuItem" onClick={handleClickPortfolio }>Portfolio</p>
                <p>|</p>
                <p className="menuItem" onClick={handleClickContacto}>Contacto</p>
                <p>|</p>
                <p className="menuItem" onClick={handleClickProductos}>Productos</p>
                <p>|</p>
                <p className="menuItem" onClick={handleClick(<Galeria/>)}>Galeria</p>
                <p>|</p>
              </section>
          </div>
      </div>
  );
}

export default App;

/*{ 
  Applist.map(
              e => <p key={e.objId} className="menuItem"
                      onClick={handleClicLink(e.objName)}> 
                   {e.objText}
                  </p>
              )
 }*/
