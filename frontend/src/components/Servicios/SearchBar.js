import Button from './Button';
import React, { useState } from 'react';

function SearchBar({ busqueda, loading }) {
  const [buscar, setBuscar] = useState("");

  function handleChange(e) {
    setBuscar(e.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    busqueda(buscar);
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
        <Button disabled={loading} onSubmit={handleSubmit}>
          {loading ? "Cargando..." : "Buscar"}
        </Button>
      </form>
    </>
  );
}

export default SearchBar;