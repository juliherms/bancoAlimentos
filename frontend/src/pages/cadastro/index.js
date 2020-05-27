import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signUpRequest } from '../../store/modules/auth/actions';

//Representa uma página de cadastro de usuario no sistema
export default function Cadastro() {

    const dispatch = useDispatch();

    const schema = Yup.object().shape({
        
        nome: Yup.string().required(' O nome é obrigatório'),
        email: Yup.string().email('e-mail inválido').required('O e-mail é obrigatório'),
        senha: Yup.string().min(6,' A senha deve ter no mínimo 6 caracteres').required('A senha é obrigatória'),

    });

    //captura os dados informados no formulário
    function handleSubmit({nome, email, senha }) {
        
        dispatch(signUpRequest(nome,nome, email, senha));
    }

    return (
        <>
            <img src="" alt="Banco de Alimentos"/>
            <Form schema={schema} onSubmit={handleSubmit}>

                <Input name="nome" placeholder="Nome"/>
                <Input name="email" type="email" placeholder="Seu e-mail"/>
                <Input name="senha" type="password" placeholder="Sua senha"/>

                <button type="submit">Salvar</button>
                <Link to="/">Já tenho login</Link>
            </Form>      
        </>
    );
}