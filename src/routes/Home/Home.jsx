
import "../../css/home.css";
import MyCarousel from "../../componentes/MyCarousel/MyCarousel";
import AutoPlayer from "../../componentes/AutoPlayer/AutoPlayer";
import CardGroup from "../../componentes/CardGroup/CardGroup";
import CardImage from "../../componentes/CardImage/CardImage";
import CarouselRelojes from "../../componentes/CarouselRelojes/CarouselRelojes";
import Carrousel from "../../componentes/Carrousel/Carrousel";


const Home = () => {
    return(
        <div>
            <div className="cuotas">12 cuotas sin interés en compras superiores a $50.000 con VISA y MasterCard</div>
            <div>
                <Carrousel/>
            </div>
            <div>
                <MyCarousel/>
            </div>
                <AutoPlayer/>
            <div>
                <CardImage/>
            </div>
            <div>
                <CarouselRelojes/>
            </div>
            <div>
                <hr />
                <CardGroup/>
            </div>
        </div>
    
    )
}

export default Home;