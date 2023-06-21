import { useState } from "react"
import '../../css/itemCount.css';
import swal from "sweetalert";

const ItemCount = ({ data, onAdd }) => {

    const [contador, setContador] = useState(1)


    const botonAumento = () => {
        setContador(contador + 1)
    }
    const botonDecremento = () => {
        contador > 0 ? setContador(contador - 1) : setContador(0)
    }
    const agreProdu = () => {
        onAdd(contador)
        swal({
            text: "El producto se agrego al carrito!",
        })
    };
    return (
        <>
            <div className="contenedor">
                <h1 className="cantidad"> Cantidad:{contador}</h1>
            </div>
            <div className="contenedor">
                <button type="button" class="btn btn-success" onClick={botonDecremento} >-</button>
                <button type="button" class="btn btn-success" onClick={botonAumento}>+</button>
                <button type="button" class="btn btn-success" onClick={agreProdu}>Añadir al Carro</button>
                <br /><br />
            </div>
        </>
    )
}


export default ItemCount;