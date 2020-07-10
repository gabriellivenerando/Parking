import React from "react";
import "./IntroducaoContent.css";
import Titulo from "../../Atoms/Titulo/Titulo";
import Paragrafo from "../../Atoms/Paragrafo/Paragrafo";
import Imagem from "../../Atoms/Imagem/Imagem";
import Input from "../../Molecule/Input/Input";
import Button from "../../Molecule/Button/Button";

import Estacionamento from "../../../imagens/estacionamento.png";



class IntroducaoContent extends React.Component {
    render() {
        return (
            <>  <Titulo
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
                            imagemSrc={Estacionamento}
                        />
                    </div>

                    <div>
                        <Titulo
                            titulo="Estacionamento"
                        />
                        <Paragrafo
                            texto="Representa a  <div>  mãe do nosso código"
                        />
                        <Imagem
                            classImagem="estacionamento_container"
                            imagemSrc={Estacionamento}
                        />
                    </div>
                </section>

                <Imagem />
                <Input />
                <Button />
            </>
        )
    }
}

export default IntroducaoContent;



