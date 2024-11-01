import React from 'react'

const Inicio = () => {
  let element = [];
  for (let index = 0; index < 20; index++) {
    element.push(<h1>Esta es la pagina de Inicio</h1>);
    
  }
  return (
    <div>
      {element}
    </div>
  )
}

export default Inicio