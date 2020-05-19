import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Representa um button custormizado
 */
const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
    <Container type="button" {...rest}>{children}</Container>
    
);

export default Button;