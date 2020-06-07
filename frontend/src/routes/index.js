import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route'; //minha rota customizada.
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import Dashboard from '../pages/dashboard';
import Perfil from '../pages/profile';
import Home from '../pages/home';
import Entidade from '../pages/entidades';

/**
 * Pagina responsavel pela configuracao de rotas
 */

 export default function Routes() {
     return (
         <Switch>
             <Route path="/" exact component={Home} />
             <Route path="/entidade" exact component={Entidade} />
             <Route path="/login" exact component={Login} />
             <Route path="/register"  component={Cadastro} />
             <Route path="/dashboard"  component={Dashboard} isPrivate />
             <Route path="/profile"  component={Perfil} isPrivate />
             <Route path="/" component={() => <h1>404</h1>} />
         </Switch>
     )
 }

