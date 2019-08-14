import React from 'react';
import './Galeria.css';
import './Galeria-images/gal.json'

function Galeria() {
  return (
    <div className="Galeria">
      <div class="row">
          <div class="column">
              <img src="./Galeria-images/imagen1.jpg"/>
              <img src="Galeria-images/imagen2.jpg"/>
              <img src="Galeria-images/imagen3.jpg"/>
              <img src="Galeria-images/imagen4.jpg"/>
              <img src="Galeria-images/imagen5.jpg"/>
          </div>
      </div>
    </div>
  );
}

export default Galeria;


