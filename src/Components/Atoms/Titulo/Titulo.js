import React from "react";
import "./Titulo.css";



const Titulo = (props) =>{
    return(
        <h2 className={props.tituloClass}>{props.titulo}</h2>
        // <h2>diasdhfiasuhdfasduf<span>{props.titulo}</span>hasd</h2>
    )
}



export default Titulo;