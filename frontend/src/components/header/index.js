import React from 'react';
import { Link } from 'react-router-dom';
import  Notifications from '../notifications';
import { Container, Content, Profile } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src="" alt="logo"/>
                    <Link to="/dashboard" >DASHBOARD</Link>
                </nav>

                <aside>
                    <Notifications/>
                    <Profile>
                        <div>
                            <strong>Juliherms Vasconcelos</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Juliherms Vasconcelos"/>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}