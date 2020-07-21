import React from "react";
import "./Points.css";
import Imagem from "../../Atoms/Imagem/Imagem"
import Coins from "../../../imagens/coins.png"



class Points extends React.Component{
    render(){
        return(
        <div className="points_container">
            <Imagem
                classImagem="coins_container"
                imagemIntroducao=""
                imagemSrc={Coins}
            />
            <div className="points">
                <p>{this.props.teste}</p>
            </div>
        </div>
        )
    }
}

export default Points;