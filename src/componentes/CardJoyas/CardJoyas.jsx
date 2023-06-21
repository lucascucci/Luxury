import { Link } from "react-router-dom";
import '../../css/cardJoyas.css';
import imgFill from '../../assets/imgFill.svg'
import heart from '../../assets/heart.svg'
import { useState } from 'react';


const CardJoyas = ({ dataSS }) => {
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
            <div className="roberto" >
                <div className='detalle'>
                    <img className="img" src={dataSS.Imagen} alt="foto" />
                    <h1 className='tittle'> {dataSS.titulo}</h1>
                    <h4 className='precio'>Precio: {dataSS.precio} $</h4>
                    <div>
                        <Link to={`/joyas/${dataSS.id}`}><button type="button" class="btn btn-secondary">Lo quiero</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CardJoyas;

