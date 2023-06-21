

import "../../css/itemDetail.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/Context";
import ItemCount from "../../componentes/ItemCount/ItemCount";
import ImageComponent from "../ImageComponent/ImageComponent";


const ItemDetail = ({ data }) => {
    const { agregarProducto } = useCartContext();

    const onAdd = (contador) => {
        agregarProducto(data, contador);
    };

    const mostrarAlerta = () => {
        ("Esta es una alerta");
    };

    return (
        <>
        
            <div className="detailContainer">
                <div className="conteUno">
                    <span>{data.titulo}</span>
                    <h1>Precio:{data.precio}$</h1>
                    <h5>{data.detalle}</h5>
                    <div className="botones">
                <Link to={`/#`}>
                    <button type="button" class="btn btn-primary" onClick={() => mostrarAlerta()} >
                        {" "}
                        Volver a la lista
                    </button>
                </Link>
                <br /><br />
                <Link to={`/cart`}>
                    <button type="button" class="btn btn-primary"> ir a Carrito </button>
                </Link>
            </div>
                </div>
                <div className="conteDos">
                    <img className="img1" src={data.Imagen} alt="reloj" />
                </div>
            </div>
            <div>
                <ItemCount data={data} onAdd={onAdd} />
            </div>
            <div>
            <ImageComponent/>
            </div>
        </>
    );
};

export default ItemDetail;