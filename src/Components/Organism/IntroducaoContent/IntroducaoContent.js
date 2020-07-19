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
            <>  <Titulo
                tituloClass="titulo_Introducao"
                titulo="Car Parking"
            />
                <section className="paragrafo_container">
                    <Paragrafo
                        texto="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with"
                    />
                    <Paragrafo
                        texto="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with"
                    />
                </section>
                <section className="instrucao_imagens">
                    <div>
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

                    <div>
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

                <p className="IntroducaoContent_texto">Qual nome você gostaria de colocar no seu ticket de estacionamento?</p>
                <Input />
                <Button
                    classButton="button_introducao"
                    nomeDoButton="Começar a estacionar"
                />
            </>
        )
    }
}

export default IntroducaoContent;



