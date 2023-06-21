

import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {getFirestore,collection,getDocs,query,where} from "firebase/firestore";
import TechList from "../../componentes/TechList/TechList";

const TechListContainer = () => {
    

    const [dataTT, setDataTT] = useState([])
    const {categoriaId} = useParams();

    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection (querydb,"tecno")
        if (categoriaId){
            const queryFilter = query(queryCollection,where("categoria","==",categoriaId))
            getDocs(queryFilter)
            .then(res=> setDataTT(res.docs.map(data=>({id:data.id,...data.data()}))))
        }else{
            getDocs(queryCollection)
            .then (res=> setDataTT(res.docs.map(data=>({id:data.id,...data.data()}))))
        }
        
    },[categoriaId])

    return <TechList dataTT={dataTT} /> 
}

export default TechListContainer;