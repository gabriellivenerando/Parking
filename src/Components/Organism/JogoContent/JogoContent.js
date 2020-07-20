import React from "react";
import "./JogoContent.css";
import Points from "../../Molecule/Points/Points"
import Titulo from "../../Atoms/Titulo/Titulo";
import Imagem from "../../Atoms/Imagem/Imagem";
import Input from "../../Molecule/Input/Input";
import Button from "../../Molecule/Button/Button";


import End from "../../../imagens/end.png"


class JogoContent extends React.Component{
    render(){
        return(
            <div>
                <Points/>
                <Titulo
                    titulo="Estacione os carros nas vagas disponíveis"
                    tituloClass="tituloJogo"
                />
                <Imagem
                    classImagem="JogoImagem_container"
                    imagemIntroducao="JogoImagem"
                    imagemSrc={End}
                />
                <Input/>
                <Button
                    classButton="button_Jogo"
                    nomeDoButton="Estacionar"
                />
            </div>
           
        )
    }
}


export default JogoContent;





