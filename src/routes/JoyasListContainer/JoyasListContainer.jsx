import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {getFirestore,collection,getDocs,query,where} from "firebase/firestore";
import JoyasList from "../../componentes/JoyasList/JoyasList";

const JoyasListContainer = () => {
    

    const [dataSS, setDataSS] = useState([])
    const {categoriaId} = useParams();

    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection (querydb,"joyas")
        if (categoriaId){
            const queryFilter = query(queryCollection,where("categoria","==",categoriaId))
            getDocs(queryFilter)
            .then(res=> setDataSS(res.docs.map(data=>({id:data.id,...data.data()}))))
        }else{
            getDocs(queryCollection)
            .then (res=> setDataSS(res.docs.map(data=>({id:data.id,...data.data()}))))
        }
        
    },[categoriaId])

    return <JoyasList dataSS={dataSS} /> 
}

export default JoyasListContainer;