import React, {Component} from 'react';
import './ContactoForm.css';


class ContactoForm extends Component {

  render (){
    
    return (
       <div className="ContactoForm">
            <fieldset>
              <legend>Contactanos:</legend>
                <form className="ContactoForm-Form">
                   <label> Nombre: <br />
                   <input type="text" name="form-name" placeholder="Nombre y Apellido" required onChange={console.log('value')} /> </label>
                   <br />
                   <label> Consulta: <br />
                   <textarea type="text" name="form-text" placeholder="Texto de tu consulta" rows="8" required /> </label>
                   <br />
                   <input type="submit" value="Submit" />
               </form>
           </fieldset>  
      </div>
      );
  }
}

export default ContactoForm;
