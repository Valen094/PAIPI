import React from 'react'
import "./InicionSesion.css"

export const InicioSesion = () => {
    return (
        <>
            <a className='regresar' href="">REGRESAR</a>
            <header> <img className='logo' src="public/Img/LogoFondoBlanco.jpeg" alt="" width={250} /></header>
            <body>
                <div className='contenedor'>
                    <h1>INICIAR SESIÓN</h1>

                    <div className='formulario'>
                        <label htmlFor="">Correo</label>
                        <input type="text" name='' id='' />

                        <label htmlFor="">Contraseña</label>
                        <input type="password" name="" id="" />
                        <a href="">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className='regresar'>
                        <a href="">INGRESAR</a>
                    </div>

                    <div className='contenedorLineas'>
                        <div className='linea'>
                            <hr className='linea1' />
                        </div>
                        <div className='o'>
                            <p>o</p>
                        </div>
                        <div className='linea'>
                            <hr className='linea2' />
                        </div>
                    </div>

                    <div className='redes'>
                        <div>
                            <a href=""><img src="public/Img/google.png" alt="" width={140} height={50} /></a>
                        </div>
                        <div>
                            <a href=""><img src="public/Img/faceboook.png" alt="" width={150} height={50} /></a>
                        </div>
                    </div>

                    <div className='resgistrate'>
                        <h2>¿Aún no tienes una cuenta? Registrate</h2>
                        <a href="">AQUÍ</a>
                    </div>
                </div>
            </body>
        </>
    )
}

