import { Link } from "react-router-dom";
import { useCartContext } from "../../context/Context";
import carrito from "../../assets/carrito.png";
import '../../css/cardWidget.css';

const CartWidget = () => {
    const {cantidadIndivual} = useCartContext();


    return (
        <Link to= {`/cart`}>
        <span>{parseInt(cantidadIndivual())}</span>
        <img className="carro" src={carrito} alt={carrito}/>
        </Link>
    )
}

export default CartWidget;