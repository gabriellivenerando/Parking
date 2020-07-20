import React from "react";
import "./Points.css";
import Imagem from "../../Atoms/Imagem/Imagem"
import Coins from "../../../imagens/coins.png"



const Points = () =>{
    return(
        <div className="points_container">
            <Imagem
                classImagem="coins_container"
                imagemIntroducao=""
                imagemSrc={Coins}
            />
            <div className="points">

            </div>
        </div>
    )
}

export default Points;