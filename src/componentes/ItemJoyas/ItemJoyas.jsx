import CardJoyas from "../CardJoyas/CardJoyas";
import '../../css/itemJoyas.css';

const ItemJoyas = ({dataSS}) => {
    
    return(    
        <div className='contenedorCarta'>
            <CardJoyas dataSS= {dataSS}/>
        </div>
)

}

export default ItemJoyas;

