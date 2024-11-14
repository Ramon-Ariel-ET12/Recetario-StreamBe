import React from 'react';
import Card from '../Servicios/Card';
import Personcard from '../Servicios/Personcard';

const Sobrenosotros = () => {
  return (
    <Card style={{ width: '90%', margin: '2rem auto', padding: '1.5rem', lineHeight: '1.6'}}>
      <Card style={{borderStyle:'none'}}>
        <i class="bi bi-person-square fs-1"></i>
        <Personcard
          nombre="Diego Vega"
          titulo="Desarrollador Frontend"
          descripcion="Diego Vega, estudiante de la Escuela Técnica N° 12, es un apasionado de la programación. Demostró sus habilidades en el desarrollo web al encargarse del diseño y construcción de la interfaz de usuario de 'Recetario'. Utilizando tecnologías como HTML, CSS y JavaScript, Diego logró crear una experiencia de usuario fluida y agradable, convirtiendo a 'Recetario' en una herramienta útil para cualquier amante de la cocina."
          red1="https://github.com/Diego-VJM"
          red2="https://www.instagram.com/dev_ega2/profilecard/?igsh=Z2NjZWNhcjkxZTdq"
        />
      </Card>
      <Card style={{borderStyle:'none'}}>
            <i class="bi bi-person-square fs-1"></i>
            <Personcard
              nombre="Ramón Lugones"
              titulo="Desarrollador Full-Stack"
              descripcion="Ramón Lugones, estudiante de la Escuela Técnica N° 12, demostró un sólido dominio de tecnologías backend al desarrollar 'Recetario'. Utilizando C# como lenguaje principal, se valió de PostgreSQL para gestionar de manera eficiente la base de datos y empleó Dockerfile para crear un entorno de desarrollo y despliegue altamente portable. Esta combinación de herramientas le permitió construir una aplicación robusta y escalable, capaz de soportar un gran volumen de usuarios y datos."
              red1="https://github.com/Ramon-Ariel-ET12"
              red2="https://www.instagram.com/ramon.ariel.55?igsh=cmp5MTImZ3M1ZnJv"
            />
      </Card>

    </Card>
    
  );
};

export default Sobrenosotros;