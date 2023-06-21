
import "../../css/cardGroup.css";
import { Link } from "react-router-dom";

const CardGroup = () => {
    return (
        <div class="card-group">
            <div class="card">
                <img src="https://res.cloudinary.com/kendra-scott/image/upload/w_250,c_fit/q_auto,f_auto,dpr_2.0/v1685557560/homepage-imageuploader/Summer%202/Category_Image_74.jpg" class="card-img-top" alt="foto" />
                <div class="card-body">
                    <h5 class="card-title">New trend Jewelry</h5>
                    <p class="card-text">Desde las deslumbrantes piezas de Swarovski hasta las cautivadoras joyas de plata 925 Carmin, descubrí diseños exclusivos de collares, aros, anillos y pulseras para cada ocasión y estilo.
                        #jewelry #swarovski #carmin #joyeria #moda #accesorios</p>
                </div>
                <div class="card-footer">
                    <Link to={`https://www.swarovski.com.ar/`}><button type="button" class="btn btn-outline-warning">VER MAS</button></Link>
                </div>
            </div>
            <div class="card">
                <img src="https://res.cloudinary.com/kendra-scott/image/upload/w_250,c_fit/q_auto,f_auto,dpr_2.0/v1685557566/homepage-imageuploader/Summer%202/Category_Image_78.jpg" class="card-img-top" alt="foto" />
                <div class="card-body">
                    <h5 class="card-title">Elegance, precision & swiss tradition</h5>
                    <p class="card-text">Elevá cualquier look con la exclusiva colección de relojes Tissot, diseños clásicos, deportivos y sofisticados. ¡Encontrá tu nuevo Tissot!
                    #newdesigns #tissot #swissmade #watches #style</p>
                </div>
                <div class="card-footer">
                    <Link to={`https://tienda.tissotwatches.com/ar`}><button type="button" class="btn btn-outline-warning">VER MAS</button></Link>
                </div>
            </div>
            <div class="card">
                <img src="https://www.zonaoutdoor.es/sites/default/files/auriculares_marshall_mid_bluetooth_iii.png" class="card-img-top" alt="foto" />
                <div class="card-body">
                    <h5 class="card-title">Sonido legendario</h5>
                    <p class="card-text">Los amplificadores, parlantes y auriculares Marshall ofrecen una experiencia de audio potente y equilibrada, combinando tecnología y diseño icónico. ¡Conseguí el tuyo! #marshall #auriculares #parlantes #audio #music #amplificadores</p>
                </div>
                <div class="card-footer">
                    <Link to={`https://marshall.com/`}><button type="button" class="btn btn-outline-warning">VER MAS</button></Link>
                </div>
            </div>
            <div class="card">
                <img src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/bbcb4d99-37e0-4e48-a20f-df11492640a3___fd0974736a413540226a7580b6db4f79.jpg" class="card-img-top" alt="foto" />
                <div class="card-body">
                    <h5 class="card-title">Enjoy the new generation</h5>
                    <p class="card-text">La consola de PS5 redefine tu experencia de juego, con su potente hardware y joystick DualSense de última generación. Descubrí una amplia variedad de accesorios, juegos exclusivos y lo mejor del mundo gaming.
                    #playstation #videojuegos #gaming #accesorios</p>
                </div>
                <div class="card-footer">
                    <Link  to={`https://www.playstation.com/es-ar/`}><button type="button" class="btn btn-outline-warning">VER MAS</button></Link>
                </div>
            </div>
        </div>
    )
}


export default CardGroup;


//