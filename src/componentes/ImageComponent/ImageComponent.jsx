import React from "react";
import relojes from '../../assets/relojes.jpg'

import '../../css/imageComponent.css';



const ImageComponent = ({}) => {
    return(
        
            <img className="imagenMedio" src={relojes} alt="relojes"/> 
        
    )
}

export default ImageComponent;