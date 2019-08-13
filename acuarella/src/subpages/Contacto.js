import React, {Component} from 'react';
import ContactoForm from './ContactoForm.js'

import './Contacto.css';


class Contacto extends Component {


  render (){
    return (
      <div className="Contacto">
        <header className="Contacto-header">
            <h2>Dejanos un mensaje y te contactaremos a la brevedad</h2>
        </header>
        <div>
            <ContactoForm />
         </div>
      </div>
    );
  }
}

export default Contacto;
