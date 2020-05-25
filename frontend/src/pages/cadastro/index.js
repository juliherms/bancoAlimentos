import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

//Representa uma página de cadastro de usuario no sistema
export default function Cadastro() {

    const schema = Yup.object().shape({
        
        nome: Yup.string().required(' O nome é obrigatório'),
        email: Yup.string().email('e-mail inválido').required('O e-mail é obrigatório'),
        senha: Yup.string().min(6,' A senha deve ter no mínimo 6 caracteres').required('A senha é obrigatória'),

    });

    //captura os dados informados no formulário
    function handleSubmit(data) {
        console.log(data);
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