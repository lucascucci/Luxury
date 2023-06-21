
import '../../css/techList.css';

import ItemTech from "../ItemTech/ItemTech";


const TechList = ({dataTT})=> {
    return(
            <div className="techContainer">
            {dataTT.map((dataTT)=>(
                <ItemTech dataTT={dataTT} key={dataTT.id} />
            ))}
        </div>
        
    )
    
}

export default TechList;