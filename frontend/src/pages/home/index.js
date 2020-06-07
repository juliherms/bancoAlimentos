import React from 'react';
import { Content, Wrapper } from './styles';
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from '../../assets/logo3.png';

export default function Home() {

    return (
        <>
            <Wrapper>
            <Content>
                Login
                <header>
                    <img src={logo} alt="Logo Ecoleta" />
                </header>
                    <main>
                        <h1>Seu portal de Doação de Alimentos.</h1>
                        <p>Conectamos doadores a entidades sociais.</p>
                        <Link to="/entidade">
                            <span>
                                <FiLogIn />
                            </span>
                            <strong>Cadastre sua ação social</strong>
                        </Link>
                    </main>
            </Content>
            </Wrapper>
            
        </>
    );
}
