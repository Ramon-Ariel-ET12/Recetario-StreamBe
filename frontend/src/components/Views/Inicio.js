import React from 'react'
import Card from '../Servicios/Card'
import ReactPlayer from 'react-player'

const Inicio = () => {
  return (
    <div>
      <Card style={{ width: '90%', margin: '2rem auto', padding: '1.5rem', lineHeight: '1.6' }}>
          <div className="card mb-3" style={{ maxWidth: '100%', borderStyle:'none' }}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body" style={{color: 'white'}}>
                <h5 className="card-title">Recetario</h5>
                <p className="card-text ">
                Es una plataforma colaborativa donde los usuarios pueden compartir y descubrir recetas caseras de la comunidad. Con una interfaz amigable, permite explorar recetas por categorías y niveles de dificultad. Cada receta refleja la creatividad de sus creadores, haciendo de Recetarios un espacio auténtico y accesible para todos los amantes de la cocina.
                </p>
              </div>
            </div>
            <div className="col-md-4">
                <ReactPlayer
                  url="https://youtu.be/AhaxAbtuy_E"
                  width={'100%'}
                  height={'250px'}
                  controls
                />
            </div>
          </div>
        </div>
      </Card>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <h1>Inicio</h1>

    </div>
  )
}

export default Inicio