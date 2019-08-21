import React, {Component} from 'react';
import './Galeria.css';
//import arrayGal from './Galeria.json'

let array = [];
let fetchOk = true;
let UriJson = 'https://raw.githubusercontent.com/pablosaravia/javascript/master/acuarella/src/subpages/Galeria.json';

fetch(UriJson)
      .then(function(resp){
                return resp.json();
            })
      .then(function(json){ 
                array = json;
            })
      .catch(function(err){
                fetchOk = false;
      });   


class Galeria extends Component {

  state = {
    arrayJson: array,
    fetchOk: fetchOk
  }

  shuffle (o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

    render (){
       if (this.state.fetchOk){
            this.shuffle(this.state.arrayJson)
            return (
                 <div className="container">
                    {                
                     this.state.arrayJson.map( e => <a key={e.altText} href={e.url}>
                                       <img  src={e.thumb} alt={e.altText}/>
                                       </a>
                                )
                     }  
                  </div>
                  )}
          else {
            return (<div> <h1>Hubo un error al cargar la galeria</h1></div>)
          }
      }
};

export default Galeria;




