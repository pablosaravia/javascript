import React, {Component} from 'react';
import './Galeria.css';
import arrayGal from './Galeria.json'

console.log(arrayGal);

class Galeria extends Component {

  state = {
    image: arrayGal
  }

  render (){
      return (
        <div className="container">
            <div className="cell" id="cell1">
                  <img src="http://w180jsb1:8080/imagen1.jpg" alt="imagen1"/>
            </div>
            <div className="cell" id="cell2">
                <img src="http://w180jsb1:8080/imagen2.jpg" alt="imagen2"/>
            </div>
            <div className="cell" id="cell3">
                <img src="http://w180jsb1:8080/imagen3.jpg" alt="imagen3"/>
            </div>
            <div className="cell" id="cell4">
                <img src="http://w180jsb1:8080/imagen4.jpg" alt="imagen4"/>
            </div>
            <div className="cell" id="cell5">
                <img src="http://w180jsb1:8080/imagen5.jpg" alt="imagen5"/>
            </div>
        </div>        
      );
    }
}

export default Galeria;


