import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Container, Content } from './styles';
import logoImg from '../../assets/avatar.png';
import Input from '../../components/input';
import Button from '../../components/button';
import * as Yup from 'yup';


/**
 * Componente responsável pelo painel de login
 */

const Associe: React.FC = () => {

    //salva os dados do formulario
   const handleSubmit = useCallback( async (data: object) => {

        try {
            //modelo de validação da entrada de datos
            const schema = Yup.object().shape({
                nome: Yup.string().required('Nome é obrigatório'), 
                email: Yup.string().required('E-mail é obrigatório').email('Email informado é inválido'),
                senha: Yup.string().required('Senha é obrigatória') .min(6,'A senha deve conter no mímimo 6 dígitos'),
            });

            await schema.validate(data);

        } catch(err){
            console.log(err);
        }
    },[]);

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