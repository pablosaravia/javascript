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
                {this.state.image.map(e => <img key={e.altText} src={e.url} alt={e.altText} />)}  
            </div>
          )
      }
};

export default Galeria;


