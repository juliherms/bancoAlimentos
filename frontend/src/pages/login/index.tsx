import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content } from './styles';

/**
 * Componente responsável pelo painel de login
 */

const Login: React.FC = () => (
    <>
        <Container>
            <Content>
                <img src="#" alt="Banco de Alimentos"/>
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                    <button type="submit">Entrar</button>

                    <a href="forgot">Esqueci minha senha</a>
                </form>

                <a href="login">
                    <FiLogIn />
                </a>
            </Content>
        </Container>
    </>
);

export default Login;