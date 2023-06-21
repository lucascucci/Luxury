

import { Link } from "react-router-dom";
import { useCartContext } from "../../context/context";
import ItemCount from "../../componentes/ItemCount/ItemCount";
import ImageComponent from "../ImageComponent/ImageComponent";


const JoyasDetail = ({ dataSS }) => {
    const { agregarProducto } = useCartContext();

    const onAdd = (contador) => {
        agregarProducto(dataSS, contador);
    };

    const mostrarAlerta = () => {
        ("Esta es una alerta");
    };

    return (
        <>
        
            <div className="detailContainer">
                <div className="conteUno">
                    <span>{dataSS.titulo}</span>
                    <h1>Precio:{dataSS.precio}$</h1>
                    <h5>{dataSS.detalle}</h5>
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
                    <img className="img1" src={dataSS.Imagen} alt="Joya" />
                </div>
            </div>
            <div>
                <ItemCount dataSS={dataSS} onAdd={onAdd} />
            </div>
            <div>
            <ImageComponent/>
            </div>
        </>
    );
};

export default JoyasDetail;