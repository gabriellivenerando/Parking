import React from "react";
import "./Paragrafo.css";


const Paragrafo = (props) =>{
    return(
            <p className="paragrafo_texto">{props.texto}</p>
    )
        
}

export default Paragrafo;