import React from 'react';
import './detalleRecetesStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const DetalleReceta = ({ receta }) => {
  return (
    <div className="row justify-content-center detalle-div">
      <div className="col-md-8">
        <div className="detalle-receta">
          {/* Banner de la receta */}
          <div className="banner">
            {/* Imagen de la receta */}
            <img src={receta.strMealThumb} alt={receta.strMeal} className="banner-imagen" />
            <div className="iconos">
              {/* Icono de App Store */}
              <FontAwesomeIcon icon={faAppStore} className="icono" />
              {/* Icono de Google Play */}
              <FontAwesomeIcon icon={faGooglePlay} className="icono" />
            </div>
          </div>
          {/* Nombre de la receta */}
          <h2 className="nombre-plato">{receta.strMeal}</h2>
          {/* Tiempo de preparación */}
          <p className="tiempo-preparacion">Tiempo de preparación: {receta.strMealTime}</p>
          <div className="informacion-plato">
            {/* Título de la sección de información del platillo */}
            <h3>Información del platillo</h3>
            {/* Instrucciones de preparación */}
            <p>{receta.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleReceta;
