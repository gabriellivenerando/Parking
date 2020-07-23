import React from "react";
import "./Imagem.css";

import teste from "../../../imagens/end.png"


const Imagem = (props) =>{
    return(
        <>
        <div className={props.classImagem}>
            <img className={props.imagemIntroducao} onClick={props.click}src={props.imagemSrc}></img>
        </div>
        </>
    )
}


export default Imagem;