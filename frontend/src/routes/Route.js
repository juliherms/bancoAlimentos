import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

//importa os layouts
import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

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

    //verifica qual layout será apresentado.
    const Layout = signed ? DefaultLayout : AuthLayout;

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
