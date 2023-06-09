import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Banner';
import Busqueda from './components/Busqueda/Busqueda';
import Categorias from './components/Categorias/Categorias';
import ListaRecetas from './components/ListaRecetas/ListaRecetas';
import DetalleReceta from './components/DetalleReceta/DetalleRecetas';

function App() {
  // Estado para almacenar la categoría seleccionada
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('All');

  // Maneja el clic en una categoría para actualizar la categoría seleccionada
  const handleCategoriaClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  // Devuelve el contenido principal de la aplicación
  return (
    <div className="App">
      {/* Encabezado de la aplicación */}
      <header className="App-header header">
        {/* Componente del menú */}
        <Menu />
        {/* Componente del banner */}
        <Banner />
      </header>
      
      {/* Componente de búsqueda */}
      <Busqueda />

      {/* Componente de categorías, pasando la función de manejo de clic en categorías */}
      <Categorias handleCategoriaClick={handleCategoriaClick} />

      {/* Componente de lista de recetas, pasando la categoría seleccionada */}
      <ListaRecetas categoriaSeleccionada={categoriaSeleccionada} />
    </div>
  );
}

export default App;
