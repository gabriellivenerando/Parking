import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Principal from "../../src/Paginas/Principal/Principal";
import Introducao from "../../src/Paginas/Introducao/Introducao";
import Jogo from "../../src/Paginas/Jogo/Jogo";
import ImagemCarRoundTwo from "../../src/Components/Atoms/ImagemCarRoundTwo/ImagemCarRoundTwo"

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={Principal} />
        <Route path="/introducao" component={Introducao} />
        <Route path="/jogo" component={Jogo} />
       <Route path="/roundtwo" component={ImagemCarRoundTwo} />
    </Switch>
</ BrowserRouter>
  );
}

export default Routes;