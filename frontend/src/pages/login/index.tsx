import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content } from './styles';
import logoImg from '../../assets/avatar.png';
import Input from '../../components/input';
import Button from '../../components/button';


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
				    <Input icon={FiMail} type="text" name="email" placeholder="Informe seu email"/>
				    <p>Senha</p>
				    <Input icon={FiLock} type="password" name="senha" placeholder="Informe sua senha"/>
				    <Button type="submit">Entrar</Button>
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