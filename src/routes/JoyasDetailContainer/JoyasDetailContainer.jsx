import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getFirestore,doc,getDoc } from 'firebase/firestore';
import JoyasDetail from '../../componentes/JoyasDetail/JoyasDetail';

const JoyasDetailContainer = () => {
    const [dataSS,setDataSS] = useState([])
    const {id} = useParams()
    

    useEffect(() => {
        const querydb = getFirestore ()
        const queryDoc = doc(querydb,"joyas",id) 
        getDoc (queryDoc)
        .then (res=> setDataSS({id:res.id,...res.data()}))
    },[id])
    return(
        <div>
            < JoyasDetail dataSS={dataSS} />
        </div>
    )
}

export default JoyasDetailContainer;