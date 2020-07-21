import React from "react";
import "./JogoContent.css";
import Points from "../../Molecule/Points/Points";
import Titulo from "../../Atoms/Titulo/Titulo";
import Imagem from "../../Atoms/Imagem/Imagem";


import JCCenter from "../../../imagens/jc-center-right.png";
import JCSB from "../../../imagens/jc-space-between-right.png";
import JCCenterRight from "../../../imagens/jc-center-right-right.png";
import JCCenterWrong from "../../../imagens/jc-center-right-wrong.png";



class JogoContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: "",
            img1: JCCenter,
            img2: JCSB,
            counter: 0
        };
    }


right = () => {
    this.setState(() => {return { img1: JCCenterRight }});
    this.setState({counter: this.state.counter  + 1});
    
    
};

wrong = () => {
    this.setState(() => {return { img2: JCCenterWrong }});
    this.setState({counter: this.state.counter  - 1});
};




render() {
    return (
        <div>
            <Points 
            teste = {this.state.counter}
            />
            <Titulo
                titulo="Estacione os carros nas vagas disponíveis com justify-content: center"
                tituloClass="tituloJogo"
            />
            <section>
                <Imagem
                    classImagem="JogoImagem_container"
                    imagemIntroducao="JogoImagem"
                    imagemSrc={this.state.img2}
                    click={this.wrong}
                />

                <Imagem
                    classImagem="JogoImagem_container"
                    imagemIntroducao="JogoImagem"
                    imagemSrc={this.state.img1}

                    click={this.right}
                />
            </section>

        </div>
    );
}
}

export default JogoContent;
