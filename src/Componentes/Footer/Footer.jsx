import React from 'react'
import "./Footer.css"

export const Footer = () => {
    return (
        <>
            <footer>

                <div className='footer'>
                    <div className='soportes'>
                        <h3>AYUDA Y SOPORTE</h3>

                        <ul>
                            <li> <a href="">Estado</a></li>
                            <li><a href="">Cuenta</a></li>
                            <li><a href="">Cursos cerrados</a></li>
                            <li><a href="">Inicio de sesión</a></li>
                        </ul>
                    </div>

                    <div className='soportes'>
                        <h3>TERMINOS Y PRIVACIDAD</h3>
                        <ul>
                            <li> <a href="">Normas de la comunidad</a></li>
                            <li><a href="">Terminos y condiciones</a></li>
                            <li><a href="">Privacidad</a></li>
                        </ul>
                    </div>

                    <div className='soportes'>
                        <h3>CONTACTANOS</h3>
                        <ul>
                            <li> 0180003456 </li>
                            <li><a href="">Redes sociales</a></li>
                            <li><a href="">www.paipi@gmail.com</a></li>
                        </ul>
                    </div>

                    <div className='soportes'>
                        <h3>SOBRE NOSOTROS</h3>
                        <ul>
                            <li><a href="">Cursos</a></li>
                            <li><a href="">Equipo</a></li>
                            <li><a href="">Misión</a></li>
                            <li><a href="">Metodo de enseñanza</a></li>
                        </ul>
                    </div>
                </div>
                <div className='hr'>
                    <hr/>
                </div>

                <div className='aprendeFooter'>
                    <h2>¡APRENDE DE UNA FORMA DIVERTIDA!</h2>
                </div>

            </footer>
        </>
    )
}
