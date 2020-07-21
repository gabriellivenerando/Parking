import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Principal from "../../src/Paginas/Principal/Principal";
import Introducao from "../../src/Paginas/Introducao/Introducao";
import Jogo from "../../src/Paginas/Jogo/Jogo"

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={Principal} />
        <Route path="/introducao" component={Introducao} />
      <Route path="/jogo" component={Jogo} />
    </Switch>
</ BrowserRouter>
  );
}

export default Routes;