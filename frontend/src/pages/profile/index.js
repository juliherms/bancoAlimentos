import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { updateProfileRequest } from '../../store/modules/user/actions';
import { Container } from './style';

export default function Profile() {

    const dispatch = useDispatch();
    //carrego o perfil armazenado em memoria
    const profile = useSelector(state => state.user.profile);

    //salva os dados alterados
    function handleSubmit(data) {

        dispatch(updateProfileRequest(data));
    }

    return (
        <>
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input name="nome" placeholder="Nome Completo" />
                <Input name="email" type="email" placeholder="Seu endereço de e-mail"/>
            
                <hr />

                <Input type="password" name="oldPassword" placeholder="Sua senha atual"/>
                <Input type="password" name="password" placeholder="Nova senha"/>
                <Input type="password" name="confirmPassword" placeholder="Confirmação de senha"/>

                <button type="submit">Atualizar</button>
            </Form>
                <button type="button">Sair da aplicação</button>
        </Container>
        </>
    );
}