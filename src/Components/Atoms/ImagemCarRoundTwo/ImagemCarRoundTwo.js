import React from "react";
import Imagem from "../../Atoms/Imagem/Imagem";
import Button from "../../Molecule/Button/Button"

import Image from "../../../data/dataImage"



class ImagemCarRoundTwo extends React.Component{
    constructor(){
        super()

        this.state ={
            FlexStart: Image[2].start,
            Center: Image[0].center
        }
    }

    right = () =>{
        this.setState({ Center: Image[2].startRight });
    }

    wrong = () =>{
        this.setState({ SpaceB: Image[0].centerBWrong });
    }


    render(){
        return(
            <>
            <section>
            <Imagem
             
                classImagem="JogoImagem_container"
                imagemIntroducao="JogoImagem"
                imagemSrc={this.state.FlexStart}
                click={this.right}
            />

            <Imagem
            classImagem="JogoImagem_container"
            imagemIntroducao="JogoImagem"
            imagemSrc={this.state.Center}
            click={this.wrong}
            />
        </section>
        <Button
            classButton="button_introducao"
            nomeDoButton="Começar a estacionar"
        />
        </>
        )
    }
}

export default ImagemCarRoundTwo;