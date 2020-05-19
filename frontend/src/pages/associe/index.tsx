import React from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Container, Content } from './styles';
import logoImg from '../../assets/avatar.png';
import Input from '../../components/input';
import Button from '../../components/button';


/**
 * Componente responsável pelo painel de login
 */

const Associe: React.FC = () => {

    //salva os dados do formulario
    function handleSubmit(data: object): void {
        console.log(data);
    }

    return (
    <>
        <Container>
            <Content>
                <img src={logoImg} alt="Banco de Alimentos" />
                <h1>Faça o seu cadastro</h1>
                <Form onSubmit={handleSubmit}>
                    <p>Nome</p>
				    <Input icon={FiUser} type="text" name="nome" placeholder="Informe seu nome"/>
                    <p>Email</p>
				    <Input icon={FiMail} type="text" name="email" placeholder="Informe seu email"/>
				    <p>Senha</p>
				    <Input icon={FiLock} type="password" name="senha" placeholder="Informe sua senha"/>
				    <Button type="submit">Cadastrar</Button>
				</Form>

                <a href="login">
                    <FiArrowLeft />
                    Voltar
                </a>
            </Content>
        </Container>
    </>

    )

};

export default Associe;