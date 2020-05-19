import React, { InputHTMLAttributes, ComponentType } from 'react';
import { Container } from './styles';
import { IconBaseProps } from 'react-icons';

//herda os atributos do input e deixa o campo nome como obrigatório
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}
/**
 * Representa um input customizado
 */
const Input: React.FC<InputProps> = ({icon: Icon, ...rest}) => (
    <Container>
        { Icon && <Icon size={20}/>}
        <input {...rest}/>
    </Container>
)

export default Input;