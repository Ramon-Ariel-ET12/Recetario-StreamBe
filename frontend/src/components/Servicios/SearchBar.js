import Button from './Button';
import React, { useState } from 'react';

function SearchBar({ busqueda}) {
  const [buscar, setBuscar] = useState("");
  const [loading , setLoading] = useState(false);

  function handleChange(e) {
    setBuscar(e.target.value);
    
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    busqueda(buscar);
    setLoading(false);
  };

  return (
    <>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar"
          aria-label="Search"
          onChange={handleChange}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Buscar"}
        </Button>
      </form>
    </>
  );
}

export default SearchBar;