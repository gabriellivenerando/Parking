import React from "react";
import "./Paragrafo.css";


const Paragrafo = (props) =>{
    return(
            <p className={props.paragrafoTexto}>{props.texto}</p>
    )
        
}

export default Paragrafo;