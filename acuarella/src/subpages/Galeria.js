import React, {Component} from 'react';
import './Galeria.css';
//import arrayGal from './Galeria.json'

let UriJson = 'https://raw.githubusercontent.com/pablosaravia/javascript/master/acuarella/src/subpages/Galeria.json'

let arrayGal;
         // .catch(alert('falla al descargar archivo'));

class Galeria extends Component {

  state = {
    urijson : UriJson
  }

   shuffle (o) {
     for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
     return o;
   }

   obtenerJson(){
       fetch(this.state.urijson)
          .then(function(resp){
                return resp.json()
          })
         .then(function(json){
           alert(json)
           console.log(this.state.urijson)
             return this.shuffle(json)
            })
  }

   array = this.obtenerJson();

    render (){
 //aalert (typeof this.array)
        return (
            <div className="container">
                {                 
                  this.array.map( e => <a key={e.altText} href={e.url}>
                                       <img  src={e.thumb} alt={e.altText}/>
                                       </a>
                                )
                }  
            </div>
          )
      }
};

export default Galeria;




