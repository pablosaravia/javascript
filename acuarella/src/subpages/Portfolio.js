import ReactDOM from 'react-dom';
import React , { Component } from 'react';
import './Portfolio.css';
import arrayWork from './Portfolio.json'
import Galeria from './Galeria.js';
import ArchJson from './Portfolio_res/Trabajo3.json'

class Portfolio extends Component {
//function Portfolio() {
 
  state ={
      array : arrayWork
  }
 
  render () {
      return (
          <div className="Portfolio">
              <span id="PortfolioRenderDiv"/>
                <h1>Portfolio</h1>
                  {
                      this.state.array.map(
                          e => {
                              return <fieldset className="borde">
                                  <div key={e.workId} className="workdiv">
                                  <img src={e.workThumb} onClick={<Galeria datos={[e.workJsonFile]} />} alt="texto"></img>
                                  <div className="workdivP" >
                                        <p>Nombre: {e.workName}</p>
                                        <p>Fecha: {e.workDate}</p>
                                  </div>
                                  </div>
                                  </fieldset>;
                                  
                               } )
                  }
             </div>
          );
      }
}

export default Portfolio;