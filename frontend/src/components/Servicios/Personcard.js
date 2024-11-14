import React from 'react';

const Personcard = ({ nombre, titulo, descripcion, red1, red2 }) => {
  return (
    <div className="card" style={{borderStyle:'none', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
      <div className="card-body" >
        <h5 className="card-title">{nombre}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{titulo}</h6>
        <p className="card-text">{descripcion}</p>

        {red1 && (
          <a href={red1} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github fs-1 text-center" style={{color:'white', marginRight:'20px'}}></i>
          </a>
        )}
        {red2 && (
          <a href={red2} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram fs-1 text-center" style={{color:'white'}}></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default Personcard;