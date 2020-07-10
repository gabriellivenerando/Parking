import React from "react";
import "./Paragrafo.css";


const Paragrafo = (props) =>{
    return(
        <section>
            <p>{props.texto}</p>
        </section>
    )
        
}

export default Paragrafo;