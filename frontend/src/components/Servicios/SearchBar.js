import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // aca agrega las consultas
    console.log('Search term:', searchTerm);
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid" >
        <form className="d-flex" role="search" style={{width:'100%'}} onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          <button className="btn" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
}

export default SearchBar;