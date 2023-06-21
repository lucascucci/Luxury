import '../../css/carrMap.css';
import { Link } from 'react-router-dom';


const CarrMap = ({ sacarProductos, eliminarIndividual, vaciarCarrito, precioTotal, cart }) => {

    return (
        <div>
            {
                cart.map((data, indice) =>
                    <div className="contenedorOri" key={indice}>
                        <div>
                            <h1 className="titulo"> {data.titulo}</h1>
                            <p className='detalle'>{data.detalle}</p>
                            <img className='imagen' src={data.Imagen} alt="foto" />
                            <br></br>
                            <span className="value">Valor $ :{data.precio}</span>
                            <br></br>
                            <h3>Cantidad: {data.cantidad}</h3>
                            <div >
                                <button type="button" class="btn btn-dark" disable={data.cantidad <= 0 && sacarProductos(data.id)} onClick={() => eliminarIndividual(data.id)}>Eliminar Individual</button>
                                <br /><br />
                            </div>
                        </div>
                    </div>
                )
            }
            <div className='vaciar'>
                <button type="button" class="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
                <br /><br />
                <h2 className="precioTotal">Total:$ {precioTotal()}</h2>
                <Link to={`/form`}><button type="button" class="btn btn-success">Continuar compra</button></Link>
            </div>
        </div>
    )
}

export default CarrMap;