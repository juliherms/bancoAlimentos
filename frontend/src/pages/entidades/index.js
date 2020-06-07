import React from 'react';
import { Wrapper } from './styles';
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Form, Input } from '@rocketseat/unform';

export default function Entidade() {

    return (
        <>
            <Wrapper>
                <header>
                    <img src="" alt="Logo Ecoleta" />
                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para Home
                    </Link>
                </header>
                <Form>
                    <h1>Cadastro de entidade</h1>
                    <label htmlFor="nome">Nome</label>
                    <Input name="nome" placeholder="nome"/>
                    <label htmlFor="email">Email</label>
                    <Input name="email" type="email" placeholder="email"/>
                    <label htmlFor="email">Senha</label>
                    <Input name="email" type="password" placeholder="senha"/>
                    <label htmlFor="cidade">Cidade</label>
                    <Input name="cidade" placeholder="cidade"/>
                    <label htmlFor="uf">UF</label>
                    <Input name="uf" placeholder="uf"/>
                    <label htmlFor="acao">Ação Social</label>
                    <Input name="acao" placeholder="Ação Social"/>
                    
                    <button type="submit">Cadastrar</button>

                </Form>
            </Wrapper>
        </>
    );
}
