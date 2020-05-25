import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

//Rota customizada
export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}){
    //verifica se o usuario esta logado ou não
    const signed = false;

    //se o usuario não esta logado e a rota for privada, vai para o login
    if(!signed && isPrivate){
        return <Redirect to="/" />
    }
    
    //se o usuario esta logado e a rota não for privada, vai para página principal.
    if(signed && !isPrivate){
        return <Redirect to="/dashboard"/>
    }

    return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element,PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
