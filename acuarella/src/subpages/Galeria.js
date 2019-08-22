import React, {Component} from 'react';
import './Galeria.css';

let array = [];
let fetchOk = false;
let errorValue = ' ';

//let UriJson = 'https://raw.githubusercontent.com/pablosaravia/javascript/master/acuarella/src/subpages/Galeria.json';
let UriJson = 'http://localhost:8080/subpages/Galeria-local.json';

fetch(UriJson)
      .then(function(resp){
                return resp.json();
            })
      .then(function(json){ 
                array = json
                fetchOk = true
            })
      .catch(function(err){
                console.log('Error al cargar la galeria ' + err)
                errorValue = err.toString()
                console.log(errorValue)

      });   


class Galeria extends Component {

  constructor(){
      super()
      this.state = {
          arrayJson: array,
          fetchOk: fetchOk,
          errorValue: errorValue
      }
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
                     this.state.arrayJson.map(e => <a key={e.altText} href={e.url}>
                                       <img  src={e.thumb} alt={e.altText}/>
                                       </a>
                                )
                     }  
                  </div>
                  )}
          else {
            return (<div className="errorGaleria"> 
                        <h1>Hubo un error al cargar la galeria</h1>
                        
                        
                    </div>)
          }
      }
};

export default Galeria;




