import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import  Notifications from '../notifications';
import { Container, Content, Profile } from './styles';

export default function Header() {

    //capturo os meus dados de perfil do redux
    const profile = useSelector(state => state.user.profile);

    console.log(profile);

    return (
        <Container>
            <Content>
                <nav>
                    <img src="" alt="logo"/>
                    <Link to="/dashboard" >MINHAS DOAÇÕES</Link>
                    <Link to="/dashboard" >INSTITUIÇÕES</Link>
                </nav>

                <aside>
                    <Notifications/>
                    <Profile>
                        <div>
                            <strong>{profile.nome}</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Juliherms Vasconcelos"/>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}