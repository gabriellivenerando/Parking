import React from "react";
// import Input from "../../Components/Molecule/Input/Input";
// import ImagemUm from "../../imagens/end.png";
// import ImagemTeste from "../../imagens/testecerto.png";
// import ImagemErro from "../../imagens/erro.png"
import "./Jogo.css";
import JogoContent from "../../Components/Organism/JogoContent/JogoContent"


class Jogo extends React.Component {
 
    render() {
      
        return (
            
            // <>
            //     <Input
            //         changeUser={this.changeUser}
            //     />
            //     <img className="TestePrimeiro" src={ImagemUm} />
            //     {teste}
            //     {ImagemErro}
            // </>

            <div>
                <JogoContent/>
            </div>
        )
      
    }
}

export default Jogo;