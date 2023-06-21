
import { useCartContext } from "../../context/Context";
import { Link } from "react-router-dom";
import '../../css/cart.css';
import CarrMap from "../../componentes/CarrMap/CarrMap";


const Cart = () => {
    const {
        sacarProductos,
        eliminarIndividual,
        vaciarCarrito,
        precioTotal,
        cart,
    } = useCartContext();



    return (
        <>
            {
                cart.length === 0 ?
                    <div className="carriVacio">
                        <span>El carrito esta vacio!</span>
                        <br /><br />
                        <Link to={`/`}><button type="button" class="btn btn-primary">Volver al inicio</button></Link>
                    </div>
                    :
                    <div>
                        <CarrMap precioTotal={precioTotal} vaciarCarrito={vaciarCarrito} eliminarIndividual={eliminarIndividual} sacarProductos={sacarProductos} cart={cart} />
                    </div>
            }
        </>
    )
}


export default Cart;