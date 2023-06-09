import React, { useState, useEffect } from 'react';
import './listaRecetasStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import DetalleReceta from '../DetalleReceta/DetalleRecetas';

const ListaRecetas = ({ categoriaSeleccionada }) => {
  // Estado para almacenar las recetas obtenidas de la API
  const [recetas, setRecetas] = useState([]);

  // Estado para almacenar la receta seleccionada
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);

  useEffect(() => {
    // Efecto que se ejecuta cuando cambia la categoría seleccionada
    // y carga las recetas correspondientes desde la API

    // Realiza una solicitud a la API para obtener todas las recetas
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then((data) => {
        // Limita el número de recetas a mostrar a 12
        const recetasLimitadas = data.meals.slice(0, 12);

        if (categoriaSeleccionada === 'All') {
          // Si se selecciona la categoría "All", muestra todas las recetas limitadas
          setRecetas(recetasLimitadas);
        } else {
          // Filtra las recetas por categoría seleccionada
          const recetasFiltradas = recetasLimitadas.filter((receta) => receta.strCategory === categoriaSeleccionada);
          setRecetas(recetasFiltradas);
        }
      })
      .catch((error) => {
        console.error('Error fetching recetas:', error);
      });
  }, [categoriaSeleccionada]);

  const handleRecetaClick = (receta) => {
    // Maneja el clic en una receta para mostrar los detalles
    setRecetaSeleccionada(receta);
  };

  const handleBackToRecetas = () => {
    // Maneja el regreso desde los detalles de la receta a la lista de recetas
    setRecetaSeleccionada(null);
  };

  if (recetaSeleccionada) {
    // Si hay una receta seleccionada, muestra el componente DetalleReceta
    return (
      <DetalleReceta receta={recetaSeleccionada} handleBack={handleBackToRecetas} />
    );
  }

  return (
    <div className="lista-recetas">
      <div className="row">
        {/* Itera sobre el array de recetas y genera un elemento para cada receta */}
        {recetas.map((receta) => (
          <div key={receta.idMeal} className="col-md-4">
            <div className="receta" onClick={() => handleRecetaClick(receta)}>
              {/* Muestra la imagen de la receta */}
              <img src={receta.strMealThumb} alt={receta.strMeal} className="receta-imagen" />
              {/* Muestra el nombre de la receta */}
              <h3 className="receta-nombre">{receta.strMeal}</h3>
              <div className="receta-reviews">
                {/* Muestra un icono de estrella */}
                <FontAwesomeIcon icon={faStar} className="receta-estrella" />
                {/* Muestra el número de revisiones o calificaciones de la receta */}
                <span className="receta-numero-reviews">4.8</span>
              </div>
              {/* Muestra la categoría de la receta */}
              <span className="receta-tipo-comida">{receta.strCategory}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default ListaRecetas;
