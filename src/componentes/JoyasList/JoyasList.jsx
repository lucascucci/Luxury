import ItemJoyas from "../ItemJoyas/ItemJoyas";
import '../../css/joyasList.css';

const JoyasList = ({dataSS})=> {
    return(
            <div className="joyasContainer">
            {dataSS.map((dataSS)=>(
                <ItemJoyas dataSS={dataSS} key={dataSS.id} />
            ))}
        </div>
        
    )
    
}

export default JoyasList;



