import React from "react";
import "./IntroducaoContent.css";
import Titulo from "../../Atoms/Titulo/Titulo";
import Paragrafo from "../../Atoms/Paragrafo/Paragrafo";
import Imagem from "../../Atoms/Imagem/Imagem";
import Input from "../../Molecule/Input/Input";
import Button from "../../Molecule/Button/Button";

import Estacionamento from "../../../imagens/estacionamento.png";
import CarroLaranja from "../../../imagens/carroLaranja.svg";



class IntroducaoContent extends React.Component {
    render() {
        return (
            <>  
                <Titulo
                tituloClass="titulo_Introducao"
                titulo="Car Parking"
                />
                <section className="paragrafo_container">
                    <Paragrafo
                        paragrafoTexto="paragrafoTexto_introducao"
                        texto=" O flexbox, foi projetado tanto como um modelo de layout unidimensional quanto como um método capaz de organizar espacialmente os elementos em uma interface, além de possuir capacidades avançadas de alinhamento."
                    />
                    <Paragrafo
                        paragrafoTexto="paragrafoTexto_introducao"
                        texto="A propriedade justify-content é empregada para alinhar os elementos ao longo do eixo principal, cuja direção é definida a partir da propriedade flex-direction. Aqui, vamos praticar um pouco da propriedade justify-content"
                    />
                </section>
                <section className="instrucao_imagens">
                    <div className="presentationParking_container">
                        <Titulo
                            titulo="Estacionamento"
                        />
                        <Paragrafo
                            texto="Representa a  <div>  mãe do nosso código"
                        />
                        <Imagem
                            classImagem="estacionamento_container"
                            imagemIntroducao="imagem_placa"
                            imagemSrc={Estacionamento}
                        />
                    </div>

                    <div className="presentationCar_container">
                        <Titulo
                            titulo="Carro"
                        />
                        <Paragrafo
                            texto="Representa uma <div> filha do nosso código"
                        />

                        <div className="container_imagemCarro">
                            <Imagem

                                classImagem="estacionamento_container"
                                imagemIntroducao="imagem_carroLaranja"
                                imagemSrc={CarroLaranja}
                            />
                        </div>
                    </div>

                </section>

                    <Imagem />
                    
                    <Button
                        classButton="button_introducao"
                        path="/jogo"
                        nomeDoButton="Começar a estacionar"
                    />
            </>
        )
    }
}

export default IntroducaoContent;



