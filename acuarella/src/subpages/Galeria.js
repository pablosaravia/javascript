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
                //return array
            })
      .catch(function(err){
                console.log('hubo algun error');
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


    /* async obtenerJson(){
       try { 
              let response = await fetch(this.state.UriJson);
              return response.json();
      } catch (err) {
        this.setState({fetchOk: false})
        return console.log('error en el fetch')
      }
    }
          console.log('resp.json vale ' + response.json)

                this.setState({arrayJson: response.json});

                //console.log('resp vale' + resp) 
                console.log('resp.json vale' + response.json)
                //console.log('arrayJson vale' + this.state.arrayJson)
                return response.json();
              }
          )
          .catch(err => this.setState({fetchOk: false})
          )
         }*/
//this.setState({arrayJson : obtenerJson()})

    render (){
       console.log('array vale ' + this.state.arrayJson)
       if (this.state.fetchOk){
            this.shuffle(this.state.arrayJson)
            return (
                 <div className="container">
                   <h1>Cargando galeria</h1>
                    {                
                     this.state.arrayJson.map( e => <a key={e.altText} href={e.url}>
                                       <img  src={e.thumb} alt={e.altText}/>
                                       </a>
                                )
                     }  
                  </div>
                  )}
          else {
            console.log('llegue al else')
            return (<div> <h1>Hubo un error al cargar la galeria</h1></div>)
          }
      }
};

export default Galeria;




