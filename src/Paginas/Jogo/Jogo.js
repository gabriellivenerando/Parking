import React from "react";
import Input from "../../Components/Molecule/Input/Input";
import ImagemUm from "../../imagens/end.png"


class Jogo extends React.Component {
    constructor() {
        super()

        this.state = {
            user: ""

        }

    }

    changeUser = user => {
        this.setState({ user });

    }
    

    render() {
        const { user } = this.state;
        let teste
        let resposta = "end";
        
        if(user == resposta){
            alert("oi")
            teste = <img src={ImagemUm} />
        }else{
            alert("Errado")
    
        }

        return (
            
            <>
                <Input
                    changeUser={this.changeUser}
                />
                {teste}
            </>
        )
      
    }
}

export default Jogo;