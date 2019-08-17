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
                              return <div key={e.workId} className="workdiv">
                                  <img src={e.workThumb} on={<Galeria datos={[e.workJsonFile]} />} alt="texto"></img>
                                  <p>trabajo {e.workName}</p>
                                  <p>Fecha: {e.workDate}</p>
                              </div>;
                               } )
                  }
             </div>
          );
      }
}

export default Portfolio;