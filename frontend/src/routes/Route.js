import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

//importa os layouts
import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';
import HomeLayout from '../pages/_layouts/home';

import { store } from '../store';

//Rota customizada
export default function RouteWrapper({
    component: Component,
    isPrivate,
    path,
    ...rest
}){
    //verifica se o usuario esta logado ou não
    const { signed } = store.getState().auth;

    //se o usuario não esta logado e a rota for privada, vai para o login
    if(!signed && isPrivate){
        return <Redirect to="/" />
    }
    
    //se o usuario esta logado e a rota não for privada, vai para página principal.
    if(signed && !isPrivate){
        return <Redirect to="/dashboard"/>
    }

    console.log(path);

    //verifica qual layout será apresentado.
    let Layout = signed ? DefaultLayout : AuthLayout;


    if(path === '/' || path === '/entidade'){
        Layout = HomeLayout;
    }

    //monta o layout com o componente renderizado dentro.
    return (
     <Route {...rest} render={props => (
        <Layout>
            <Component {...props} />
        </Layout>
        )}
      />
    );
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element,PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
