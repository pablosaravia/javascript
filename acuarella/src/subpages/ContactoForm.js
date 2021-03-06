import React, {Component} from 'react';
import './ContactoForm.css';


class ContactoForm extends Component {

  state = {
    UserName: '',
    SenderFrom: '',
    BodyText: ''
  }

  onSubmit = param =>  {
    param.preventDefault();
    alert("Muchas gracias por comunicarse con nosotros. \nLe contestaremos a la brevedad");
    //this.getElementById("contactFormId").reset();
  }

/*
se puede obtener datos de los input con React.createref
poniendo un tag ref en cada input
luego en onSubmit 
leyendo cada dato con this.tagref.current.value
*/

  onChange = param =>  {
    this.setState ({
          [param.target.name]: param.target.value
    })
  }

  render (){
    return (
       <div className="ContactoForm">
            <fieldset>
              <legend>Contactanos:</legend>
                <form className="ContactoForm-Form" id="contactFormId" onSubmit={this.onSubmit}>
                <label> Nombre: <br /> 
                   <input
                      type="text"
                      name="UserName"
                      placeholder="Nombre y Apellido"
                      onChange={this.onChange}
                      value={this.state.UserName}
                      required /></label>
                   <br />
                   <label> e-Mail: <br />
                   <input
                      name="SenderFrom"
                      placeholder="Correo Electronico"
                      onChange={this.onChange}
                      value={this.state.SenderFrom} 
                      required /> </label>
                   <br />
                   <label> Consulta: <br />
                   <textarea
                      name="BodyText"
                      placeholder="Texto de tu consulta" 
                      onChange={this.onChange}
                      value={this.state.BodyText}
                      rows="8" required /> </label>
                   <br />
                   <button type="submit"> Enviar Consulta </button>
               </form>
           </fieldset>  
      </div>
      );
  }
}

export default ContactoForm;
