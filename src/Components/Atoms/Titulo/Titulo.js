import React from "react";
import "./Titulo.css";



const Titulo = (props) =>{
    return(
        <h2 className={props.tituloClass}>{props.titulo}<span></span></h2>
    )
}



export default Titulo;