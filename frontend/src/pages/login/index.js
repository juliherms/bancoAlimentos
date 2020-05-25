import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

//Representa uma página de login no sistema
export default function Login() {


    const schema = Yup.object().shape({
        
        email: Yup.string().email('e-mail inválido').required('O e-mail é obrigatório'),
        senha: Yup.string().required('A senha é obrigatória'),

    });

    //captura os dados informados no formulário
    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <img src="" alt="Banco de Alimentos"/>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Seu e-mail"/>
                <Input name="senha" type="password" placeholder="Sua senha"/>

                <button type="submit">Entrar</button>
                <Link to="/register">Ajudar</Link>
            </Form>      
        </>
    );
}