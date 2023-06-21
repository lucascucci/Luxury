



import { useCartContext } from "../../context/context";
import ItemCount from "../../componentes/ItemCount/ItemCount";
import ImageComponent from "../ImageComponent/ImageComponent";
import { Link } from "react-router-dom";

const TecnoDetail = ({ dataTT }) => {
    const { agregarProducto } = useCartContext();

    const onAdd = (contador) => {
        agregarProducto(dataTT, contador);
    };

    const mostrarAlerta = () => {
        ("Esta es una alerta");
    };

    return (
        <>
        
            <div className="detailContainer">
                <div className="conteUno">
                    <span>{dataTT.titulo}</span>
                    <h1>Precio:{dataTT.precio}$</h1>
                    <h5>{dataTT.detalle}</h5>
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
                    <img className="img1" src={dataTT.Imagen} alt="reloj" />
                </div>
            </div>
            <div>
                <ItemCount dataTT={dataTT} onAdd={onAdd} />
            </div>
            <div>
            <ImageComponent/>
            </div>
        </>
    );
};

export default TecnoDetail;