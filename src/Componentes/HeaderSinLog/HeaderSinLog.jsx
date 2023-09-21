import React from 'react'
import './HeaderSinLog.css'

export const HeaderSinLog = () => {
  return (
    <>
      <header>
        <img className='logo' src="public/Img/LogoFondoNaranja.jpeg" alt="" />
      </header>

      <a className='regresar' href="">REGRESAR</a>

      <div className='contenedor1'>
        <div className='titulosContenedor1'>
          <h1>Domina el inglés y abre las puertas al exito global. ¡Empieza hoy mismo!</h1>
          <h2>¡APRENDE JUNTO A NOSOTROS!</h2>
        </div>
        <div className='imagenesContenedor1'>
          <img className='bandera' src="public/Banderas/USA.png" alt="" />
          <img className='zorro' src="public/Zorros/zorro11.jpg" alt="" />
        </div>
      </div>
      <hr className='lineaCont1' />
      <div className='logReg'>
        <a href="">REGISTRATE</a>
        <a href="">INICIA SESIÓN</a>
      </div>

      <div className='contenedor2'>
        <p>Aprender <strong className='ingles'> inglés </strong>es una habilidad valiosa en el mundo actual, ya que es uno de los idiomas más hablados y utilizados en el ámbito internacional. </p>

        <img src="public/Img/lineasDerecho.png" alt="" />
      </div>
      <hr className='lineaCont2' />

      <div className='contenedor3'>
        <div>
          <h2>Mejora tus oportunidades laborales</h2>
          <p>Muchas empresas buscan empleados que sean competentes en inglés debido a la naturaleza globalizada de los negocios.</p>
        </div>
        <img src="public/Img/LineasIzquierda.png" alt="" />
      </div>

      <div className='contenedor4'>
        <h2>¡APRENDE OTROS IDIOMAS JUNTO A NOSOTROS!</h2>
        <h3>TOTALMENTE GRATIS</h3>
      </div>

      <div className='contenedor5'>
        <div className='banderas1'>
          <img src="public/Banderas/ALEMANIA.png" alt="" />
          <img src="public/Banderas/INGLATERRA.png" alt="" />
          <img src="public/Banderas/FRANCIA.png" alt="" />
        </div>
        <div className='banderas2'>
          <img src="public/Banderas/BRAZIL.png" alt="" />
          <img src="public/Banderas/AFRICA.png" alt="" />
        </div>
        <img className='japon' src="public/Banderas/JAPON.png" alt="" />
      </div>

    </>
  )
}

