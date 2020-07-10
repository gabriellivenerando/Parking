import React from "react";
import "./Imagem.css";


const Imagem = (props) =>{
    return(
        <>
        <div className={props.classImagem}>
            <img className="imagem_placa" src={props.imagemSrc}></img>
        </div>
        </>
    )
}


export default Imagem;