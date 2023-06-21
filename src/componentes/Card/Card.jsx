import '../../css/card.css';
import { Link } from "react-router-dom";
import imgFill from '../../assets/imgFill.svg'
import heart from '../../assets/heart.svg'
import { useState } from 'react';


const Card = ({ data }) => {

    const [heart1, setHeart] = useState(false)
    const changeHeartFill = () => {
    setHeart(true)
    }
    const changeHeart = () => {
        setHeart(false)
        }

    return (
        <>
            {
                heart1 ? <img onClick={changeHeart} src={imgFill}/>:<img onClick={changeHeartFill}  src={heart}/>
            }
            <div className='roberto'>
                <div className='detalle'>
                    <img className="img" src={data.Imagen} alt="foto" />
                    <h1 className='tittle'> {data.titulo}</h1>
                    <h4 className='precio'>Precio: {data.precio} $</h4>
                    <div>
                        <Link to={`/items/${data.id}`}><button type="button" class="btn btn-secondary">Lo quiero</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Card;