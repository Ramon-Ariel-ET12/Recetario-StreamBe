import React from 'react'

const Inicio = () => {
  let element = [];
  for (let i = 0; i < 20; i++) {
    element.push(<h1 key={i}>Esta es la pagina de Inicio</h1>);
    
  }
  return (
    <div>
      {element}
    </div>
  )
}

export default Inicio