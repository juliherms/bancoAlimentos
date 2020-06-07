import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/header';
import { Wrapper } from './styles';

/**
 * Function responsável por montar o layout da tela principal. 
 *
 */
export default function DefaultLayout({ children }) {
    
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired
};