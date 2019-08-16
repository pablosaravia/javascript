import React, {Component} from 'react';
import './Galeria.css';
import arrayGal from './Galeria.json'

function Shuffle(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

Shuffle(arrayGal) ;

class Galeria extends Component {
    
    state = {
        image: arrayGal
    }

    render (){
        return (
            <div className="container">
                {
                  this.state.image.map(
                                      e => <a key={e.altText} href={e.url}>
                                                 <img  src={e.thumb} alt={e.altText}/>
                                           </a>
                                      )
                }  
            </div>
          )
      }
};

export default Galeria;




