import React, {Component} from 'react';
import './ContactoForm.css';


class ContactoForm extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    console.log(data);
  }

  onSubmit = func =>  {
    console.log(func.target.value)
    func.preventDefault();
  }

  render (){
    
    return (
       <div className="ContactoForm">
            <fieldset>
              <legend>Contactanos:</legend>
                <form className="ContactoForm-Form" onSubmit={this.handleSubmit} method="post">
                   <label> Nombre: <br />
                   <input id="mailname"
                      placeholder="Nombre y Apellido" required /> </label>
                   <br />
                   <label> e-Mail: <br />
                   <input id="mailfrom" 
                      placeholder="Correo Electronico" required /> </label>
                   <br />
                   <label> Consulta: <br />
                   <textarea id="mailtext"
                      placeholder="Texto de tu consulta" rows="8" required /> </label>
                   <br />
                   <button type="submit"> Enviar Consulta </button>
               </form>
           </fieldset>  
      </div>
      );
  }
}

export default ContactoForm;
