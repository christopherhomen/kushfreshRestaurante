import React, { useState } from 'react';
import './categoriaStyle.css';
import { faUtensils, faFish, faDrumstickBite, faLeaf, faMugHot, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Categorias = ({ handleCategoriaClick }) => {
  // El hook useState se utiliza para manejar el estado en un componente funcional.
  // En este caso, declaramos una variable de estado llamada `categoriaSeleccionada` y su función de actualización `setCategoriaSeleccionada`.
  // La inicializamos con el valor 'All'.
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('All');

  // La función `handleClick` se ejecuta cuando se hace clic en una categoría.
  // Recibe la categoría seleccionada como argumento y actualiza el estado de `categoriaSeleccionada` llamando a `setCategoriaSeleccionada`.
  // Luego, llama a la función `handleCategoriaClick` pasando la categoría seleccionada como argumento.
  const handleClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
    handleCategoriaClick(categoria);
  };

  return (
    <div className="categorias">
      <div className="container">
        <div className="row">
          {/* Categoría "All" */}
          <div className={`col-md-2 ${categoriaSeleccionada === 'All' ? 'active' : ''}`}>
            <div className="categoria categoria-uno" onClick={() => handleClick('All')}>
              {/* El componente FontAwesomeIcon se utiliza para mostrar iconos de FontAwesome. */}
              {/* Aquí se utiliza el icono faUtensils de FontAwesome para la categoría "All". */}
              <FontAwesomeIcon icon={faUtensils} className="categoria-icon" />
              <span className="categoria-texto">All</span>
            </div>
          </div>
          {/* Categoría "Side" */}
          <div className={`col-md-2 ${categoriaSeleccionada === 'Side' ? 'active' : ''}`}>
            <div className="categoria" onClick={() => handleClick('Side')}>
              {/* El componente FontAwesomeIcon se utiliza para mostrar iconos de FontAwesome. */}
              {/* Aquí se utiliza el icono faUtensils de FontAwesome para la categoría "Side". */}
              <FontAwesomeIcon icon={faUtensils} className="categoria-icon" />
              <span className="categoria-texto">Side</span>
            </div>
          </div>
          {/* Categoría "Seafood" */}
          <div className={`col-md-2 ${categoriaSeleccionada === 'Seafood' ? 'active' : ''}`}>
            <div className="categoria" onClick={() => handleClick('Seafood')}>
              {/* El componente FontAwesomeIcon se utiliza para mostrar iconos de FontAwesome. */}
              {/* Aquí se utiliza el icono faFish de FontAwesome para la categoría "Seafood". */}
              <FontAwesomeIcon icon={faFish} className="categoria-icon" />
              <span className="categoria-texto">Seafood</span>
            </div>
          </div>
          {/* Categoría "Beef" */}
          <div className={`col-md-2 ${categoriaSeleccionada === 'Beef' ? 'active' : ''}`}>
            <div className="categoria" onClick={() => handleClick('Beef')}>
              {/* El componente FontAwesomeIcon se utiliza para mostrar iconos de FontAwesome. */}
              {/* Aquí se utiliza el icono faDrumstickBite de FontAwesome para la categoría "Beef". */}
              <FontAwesomeIcon icon={faDrumstickBite} className="categoria-icon" />
              <span className="categoria-texto">Beef</span>
            </div>
          </div>
          {/* Categoría "Vegetarian" */}
          <div className={`col-md-2 ${categoriaSeleccionada === 'Vegetarian' ? 'active' : ''}`}>
            <div className="categoria" onClick={() => handleClick('Vegetarian')}>
              {/* El componente FontAwesomeIcon se utiliza para mostrar iconos de FontAwesome. */}
              {/* Aquí se utiliza el icono faLeaf de FontAwesome para la categoría "Vegetarian". */}
              <FontAwesomeIcon icon={faLeaf} className="categoria-icon" />
              <span className="categoria-texto">Vegetarian</span>
            </div>
          </div>
          {/* Categoría "Pasta" */}
          <div className={`col-md-2 ${categoriaSeleccionada === 'Pasta' ? 'active' : ''}`}>
            <div className="categoria" onClick={() => handleClick('Pasta')}>
              {/* El componente FontAwesomeIcon se utiliza para mostrar iconos de FontAwesome. */}
              {/* Aquí se utiliza el icono faPizzaSlice de FontAwesome para la categoría "Pasta". */}
              <FontAwesomeIcon icon={faPizzaSlice} className="categoria-icon" />
              <span className="categoria-texto">Pasta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorias;
