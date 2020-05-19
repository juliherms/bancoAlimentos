import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Container } from './styles';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

//herda os atributos do input e deixa o campo nome como obrigatório
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}
/**
 * Representa um input customizado
 */
const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {

    const inputRef = useRef(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);

    //é chamado quando o componente é exibido em tela
    //acessa o componente e obtém seu value
    useEffect( () => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    },[fieldName, registerField]);

    return (
        <Container>
            { Icon && <Icon size={20}/>}
            <input defaultValue={defaultValue} ref={inputRef} {...rest}/>
        </Container>
    )
}
    

export default Input;