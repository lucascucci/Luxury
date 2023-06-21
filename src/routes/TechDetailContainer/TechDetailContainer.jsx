
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getFirestore,doc,getDoc } from 'firebase/firestore';
import TecnoDetail from '../../componentes/TecnoDetail/TecnoDetail';

const TechDetailContainer = () => {
    const [dataTT,setDataTT] = useState([])
    const {id} = useParams()
    

    useEffect(() => {
        const querydb = getFirestore ()
        const queryDoc = doc(querydb,"tecno",id) 
        getDoc (queryDoc)
        .then (res=> setDataTT({id:res.id,...res.data()}))
    },[id])
    return(
        <div>
            < TecnoDetail dataTT={dataTT} />
        </div>
    )
}

export default TechDetailContainer;
