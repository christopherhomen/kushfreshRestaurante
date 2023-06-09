import React from 'react';
import './busquedaStyle.css';

const SearchByName = () => {
  return (
    <div className="col-md-12">

    <div className="search-by-name">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="search-title">RECETAS</h2>
        <div className="spacer"></div>
        <div className="input-group">
          <input type="text" className="form-control search" placeholder="Search by name" />
          <div className="input-group-append">
            <button className="btn btn-primary btn-search" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default SearchByName;
