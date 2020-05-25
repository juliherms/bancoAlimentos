import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper,Content } from './styles';

/**
 * Function responsável por montar o layout da tela de login. 
 *
 */
export default function AuthLayout({ children }) {
    
    return (
        <Wrapper>
          <Content>{children}</Content>
        </Wrapper>
    )
}

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired
};