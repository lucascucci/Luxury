import "../../css/footer.css";
import { Link } from "react-router-dom";


const Footer = ()=> {
    return (
        <>
        <div className="footer">
            <div>Asitencia
            <hr></hr>
            <ul>
                <li>Como comprar</li>
                <li>Preguntas Frecuentes</li>
                <li>Boton arrepentimiento</li>
                <li>Bases y condiciones</li>
                <li>Politicas de privacidad</li>
                <li>Terminos y condiciones</li>
                <li>Cambios y devoluciones</li>
            </ul>  
            </div>
            <div>Experience
            <hr></hr>
                <Link><li>Asistente Online</li></Link>
                <li>Probador virtual</li>
                <li>3D Experience</li>
                <li>Unite a style.club!</li>
            </div>
            <div>Acerca de Style Store
            <hr></hr>
                <li>Tiendas</li>
                <li>Blog Style</li>
                <li>Hot Sale</li>
            </div>
            <div>Medios de pago
                <h2>
                <Link><img className="medioPago" src="https://stylewatchio.vtexassets.com/arquivos/medios_de_pago.jpg" alt="medios"></img></Link>
                </h2>
            </div>
            <div>Seguinos
                <hr></hr>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Youtube</li>
            </div>
        </div>
        </>
        )
}


export default Footer;