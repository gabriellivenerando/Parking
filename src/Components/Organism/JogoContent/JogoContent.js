import React from "react";
import "./JogoContent.css";
import Points from "../../Molecule/Points/Points";
import Titulo from "../../Atoms/Titulo/Titulo";
import Imagem from "../../Atoms/Imagem/Imagem";
import Button from "../../Molecule/Button/Button";


import Image from "../../../data/dataImage";

class JogoContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      ImageRight: '',
      ImageLeft: '',

      ImageStart: Image[0].start.default,
      ImageEnd: Image[0].end.default,
      ImageSpaceBetween: Image[0].spaceBetween.default,
      ImageCenter: Image[0].center.default,

      styleCorrectImage: '',
      styleWrongImage: '',
      changeDisplay: '',

      counter: 0,
      testeDeEstado: 1,
      page: 1,
      teste: 1,
      teste2: 1,


    }
  }

  componentDidMount() {
    this.setState({
      ImageRight: Image[0].center.default,
      ImageLeft: Image[0].spaceBetween.default,
    });
  }

  correct = () => {

    this.setState({ teste: this.state.teste + 1 });

    this.setState({ counter: this.state.counter + 1 });

    switch (this.state.teste) {
      case 1:
        this.setState({ ImageRight: Image[0].center.correct })
        this.setState({ styleWrongImage: "wrongAnswer" })
        break;
      case 2:
        this.setState({ ImageStart: Image[0].start.correct })
        this.setState({ styleWrongImage: "wrongAnswer" })
        break;
      case 3:
        this.setState({ ImageSpaceBetween: Image[0].spaceBetween.correct })
        this.setState({ styleWrongImage: "wrongAnswer" })
        break;

      default:
        break;
    }


  };

  wrong = () => {
    console.log("oi", { teste: this.state.teste2 })
    this.setState({ teste2: this.state.teste2 + 1 });

    switch (this.state.teste2) {
      case 1:
        this.setState({ ImageLeft: Image[0].spaceBetween.wrong })
        this.setState({ styleCorrectImage: "correctAnswer" })
        break;
      case 2:
        this.setState({ ImageEnd: Image[0].end.wrong })
        this.setState({ styleCorrectImage: "correctAnswer" })
        break;
      case 3:
        this.setState({ ImageCenter: Image[0].center.wrong })
        this.setState({ styleCorrectImage: "correctAnswer" })
        break;
      default:
        break;
    }
  };

  nextpage = () => {

    this.setState({ page: this.state.page + 1 });

    switch (this.state.page) {
      case 1:
        this.setState({ styleCorrectImage: "" })
        this.setState({ styleWrongImage: "" })
        break;
      case 2:
        this.setState({ styleCorrectImage: "" })
        this.setState({ styleWrongImage: "" })
        break;
      case 3:
        this.setState({ styleCorrectImage: "" })
        this.setState({ styleWrongImage: "" })
        break;
      default:
        
        break;
    }
  };

  render() {
    return (
      <div>
        <Points teste={this.state.counter} />

        {this.state.page == 1 && (

          <>
            <Titulo
              titulo="Estacione os carros nas vagas disponíveis com justify-content: center"
              tituloClass="tituloJogo"
            />
            <section className="game_container">

              <Imagem
                classImagem={this.state.styleWrongImage}
                imagemIntroducao="JogoImagem"
                imagemSrc={this.state.ImageLeft}
                click={this.wrong}
              />

              <Imagem
                classImagem={this.state.styleCorrectImage}
                imagemIntroducao="JogoImagem"
                imagemSrc={this.state.ImageRight}
                click={this.correct}
              />
            </section>
          </>
        )}

        {this.state.page == 2 && (
          <>
            <Titulo
              titulo="Estacione os carros nas vagas disponíveis com justify-content: start"
              tituloClass="tituloJogo"
            />
            <section className="game_container">
              <Imagem
                classImagem={this.state.styleCorrectImage}
                imagemIntroducao="JogoImagem"
                imagemSrc={this.state.ImageStart}
                click={this.correct}
              />
              <Imagem
                classImagem={this.state.styleWrongImage}
                imagemIntroducao="JogoImagem"
                imagemSrc={this.state.ImageEnd}
                click={this.wrong}
              />
            </section>
          </>
        )}

        {this.state.page == 3 && (
          <>
            <Titulo
              titulo="Estacione os carros nas vagas disponíveis com justify-content: space-between"
              tituloClass="tituloJogo"
            />
            <section className="game_container">

              <Imagem
                classImagem={this.state.styleCorrectImage}
                imagemIntroducao="JogoImagem"
                imagemSrc={this.state.ImageSpaceBetween}
                click={this.correct}
              />

              <Imagem
                classImagem={this.state.styleWrongImage}
                imagemIntroducao="JogoImagem"
                imagemSrc={this.state.ImageCenter}
                click={this.wrong}
              />
            </section>
          </>
        )}

        {this.state.page == 4 && (
          <>
         
          </>
        )}

        <section className={this.state.changeDisplay}>

          <div className="button_container">
            <Button 
          
            classButton="button_introducao" 
            click={this.nextpage}
            nomeDoButton="PRÓXIMO DESAFIO"
              />
        </div>
        
        </section>
        
      </div>
    );
  }
}

export default JogoContent;
