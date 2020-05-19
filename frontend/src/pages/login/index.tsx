import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content } from './styles';
import logoImg from '../../assets/avatar.png';

/**
 * Componente responsável pelo painel de login
 */

const Login: React.FC = () => (
    <>
        <Container>
            <Content>
                <img src={logoImg} alt="Banco de Alimentos" />
                <h1>Faça seu logon</h1>
                <form>
                    <p>Email</p>
				    <input type="text" name="" placeholder="Informe seu email"/>
				    <p>Senha</p>
				    <input type="password" name="" placeholder="Informe sua senha"/>
				    <button type="submit">Entrar</button>
				    <a href="#">Esqueceu sua senha?</a><br/>
				    <a href="#">Você não tem uma conta?</a>
                </form>

                <a href="login">
                    <FiLogIn />
                </a>
            </Content>
        </Container>
    </>
);

export default Login;