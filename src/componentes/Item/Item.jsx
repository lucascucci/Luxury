import '../../css/item.css';
import Card from '../Card/Card';

const Item = ({data}) => {

    return (
    <div className='contenedorCarta'>
        <Card data= {data}/>
    </div>
    )
}


export default Item;