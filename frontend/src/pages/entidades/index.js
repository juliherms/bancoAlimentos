import React from 'react';
import { Wrapper } from './styles';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { saveEntityRequest } from '../../store/modules/entidade/actions';

export default function Entidade() {

    const dispatch = useDispatch();

    const schema = Yup.object().shape({
        
        nome: Yup.string().required(' O nome é obrigatório'),
        email: Yup.string().email('e-mail inválido').required('O e-mail é obrigatório'),
        senha: Yup.string().min(6,'A senha deve ter no mínimo 6 caracteres').required('A senha é obrigatória'),
        cidade: Yup.string().required('A cidade é obrigatória'),
        uf: Yup.string().required('O estado é obrigatório'),
        acao: Yup.string().required('A ação é obrigatória'),
  
    });

    //captura os dados informados no formulário
    function handleSubmit(data) {
        
        //chama o dispach via redux
       dispatch(saveEntityRequest(data));
    }

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
                <Form schema={schema}  onSubmit={handleSubmit}>
                    <h1>Cadastro de entidade</h1>

                    <label htmlFor="nome">Nome</label>
                    <Input name="nome" placeholder="nome"/>

                    <label htmlFor="email">Email</label>
                    <Input name="email" type="email" placeholder="email"/>

                    <label htmlFor="senha">Senha</label>
                    <Input name="senha" type="password" placeholder="senha"/>

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
