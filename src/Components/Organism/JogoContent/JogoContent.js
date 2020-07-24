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

    //   ImageRight: '',
    //   ImageLeft: '',
      CorrectImage: '',
      WrongImage: '',
      styleRight: '',
      styleWrong: '',
      counter: 0,
      testeDeEstado: 1,
      page: 1,
      teste: 1,
      teste2: 1,
      ImageStart: Image[0].start.default,
      ImageEnd: Image[0].end.default,
      ImageSpaceBetween: Image[0].spaceBetween.default,
      ImageCenter: Image[0].center.default,
    //   ImageStartCorrect: Image[0]
      
    }
  }

//   componentDidMount() {
//     this.setState({
//       ImageRight: Image[0].center.default,
//       ImageLeft: Image[0].spaceBetween.default,
//     });
//   }

  correct = () => {
   
    this.setState({ teste: this.state.teste+ 1 });
    
    this.setState({ counter: this.state.counter + 1 });
    console.log({ teste: this.state.teste })
    switch (this.state.teste) {
        case 1:
            this.setState({ ImageRight: Image[0].center.correct });
            this.setState({ styleWrong: "wrongAnswer"});
            break;
            case 2:
            this.setState({ ImageStart: Image[0].start.correct });
            this.setState({ styleWrong: "wrongAnswer"});
            break;
          case 3:
            this.setState({ ImageRight: Image[0].spaceBetween.correct });
            break;
          case 4:
            break;
          default:
            break;
        }

    
  };

  wrong = () => {
    this.setState({ ImageLeft: Image[0].spaceBetween.wrong });
    this.setState({ styleRight: "rightAnswer" });
    alert({ teste: this.state.teste})
    this.setState({ teste: this.state.teste+ 2 });
    switch (this.state.teste2) {
        case 1:
            this.setState({ ImageLeft: Image[0].spaceBetween.wrong });
            this.setState({ styleRight: "rightAnswer"});
            break;
            case 2:
            break;
          case 3:
            this.setState({ ImageRight: Image[0].spaceBetween.correct });
            break;
          case 4:
            break;
          default:
            break;
        }
  };

  nextpage = () => {
    console.log("oi");
    console.log({ page: this.state.page });
    this.setState({ page: this.state.page + 1 });

    switch (this.state.page) {
    case 1:
        this.setState({ styleWrong: ""});
        this.setState({ ImageRight: '' });
        break;
      case 2:
        this.setState({ styleWrong: ""});
        break;
      case 3:
        this.setState({ styleWrong: ""});
        break;
      case 4:
        this.setState({ styleWrong: ""});
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
                classImagem={this.state.styleWrong}
                imagemIntroducao="JogoImagem"
                imagemSrc={this.state.ImageLeft}
                click={this.wrong}
              />
              <Imagem
                classImagem={this.state.styleRight}
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
                classImagem={this.state.styleRight}
                imagemIntroducao="JogoImagem"
                imagemSrc={this.state.ImageStart}
                click={this.correct}
                />
                <Imagem
                classImagem={this.state.styleWrong}
                imagemIntroducao="JogoImagem"
                imagemSrc={Image[0].center.default}
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
                classImagem={this.state.styleWrong}
                imagemIntroducao="JogoImagem"
                imagemSrc={Image[0].spaceBetween.default}
                click={this.correct}
                />

              <Imagem
                classImagem={this.state.styleRight}
                imagemIntroducao="JogoImagem"
                imagemSrc={Image[0].end.default}
                click={this.wrong}
                />
            </section>
            </>
             )}
       

        <div className="button_container">
          <button className="button_introducao" onClick={this.nextpage}>
            próximo
          </button>
        </div>
      </div>
    );
  }
}

export default JogoContent;
