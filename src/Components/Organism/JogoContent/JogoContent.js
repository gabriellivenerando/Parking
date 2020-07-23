import React from "react";
import "./JogoContent.css";
import Points from "../../Molecule/Points/Points";
import Titulo from "../../Atoms/Titulo/Titulo";
import Imagem from "../../Atoms/Imagem/Imagem";
import Button from "../../Molecule/Button/Button"
import ImagemCarRoundTwo from "../../Atoms/ImagemCarRoundTwo/ImagemCarRoundTwo"



import Image from "../../../data/dataImage"

class JogoContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           
            Center: Image[0].center,
            SpaceB: Image[1].spaceB,
            // FlexStart: Image[2].start,
            FlexEnd: Image[3].end,
            styleRight:'JogoImagem_container',
            styleWrong:'JogoImagem_container',
            counter: 0
        };
    }



    right = () =>{
        this.setState({ Center: Image[0].centerRight });
        this.setState({counter: this.state.counter  + 1});
        this.setState({styleWrong: 'wrongAnswer'})
    }
    
    wrong = () =>{
        this.setState({ SpaceB: Image[1].spaceBWrong });
        this.setState({styleRight: 'rightAnswer'})
        
    }

    newImage(){

    }



    render() {


            
        return (
            <div>
                <Points
                    teste={this.state.counter}
                />
                <Titulo
                    titulo="Estacione os carros nas vagas disponíveis com justify-content: center"
                    tituloClass="tituloJogo"
                />
                <section className="game_container">
                    <Imagem
                     
                        classImagem={this.state.styleWrong}
                        imagemIntroducao="JogoImagem"
                        imagemSrc={this.state.SpaceB}
                        click={this.wrong}
                    />

                    <Imagem
                    classImagem={this.state.styleRight}
                    imagemIntroducao="JogoImagem"
                    imagemSrc={this.state.Center}
                    click={this.right}
                    />
                </section>
                <Button
                    classButton="button_introducao"
                    path='/roundtwo'
                    nomeDoButton="Próxima imagem"
                />

            </div>
        );
    }
}

export default JogoContent;
