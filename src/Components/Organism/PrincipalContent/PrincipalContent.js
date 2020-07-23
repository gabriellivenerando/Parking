import React from "react";
import "./PrincipalContent.js";
import Titulo from "../../Atoms/Titulo/Titulo";
import Button from "../../Molecule/Button/Button";
import Imagem from "../../Atoms/Imagem/Imagem";
import Placa from "../../../imagens/logo-placa.png";






class PrincipalContent extends React.Component{
    render(){
        return(
            <>
            <Imagem
                classImagem="placa_imagem"
                imagemSrc={Placa}
            />
            <Titulo
                tituloClass="titulo_principal"
                titulo="Car Parking"
            />
            <Button
                classButton="button_principal"
                path="/introducao"
                nomeDoButton="Entrar"
            />
            </>
        )
    }
}


export default PrincipalContent;