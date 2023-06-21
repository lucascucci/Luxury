import Item from "../Item/Item"
import '../../css/itemList.css';
const ItemList = ({data}) => {

    return (
        <div className="itemContainer">
            {data.map((data)=>(
                <Item data={data} key={data.id} />
            ))}
        </div>
    )
}



export default ItemList;