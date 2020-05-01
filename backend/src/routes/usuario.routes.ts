import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import UsuarioRepository from '../repositories/UsuarioRepository';
import CriarUsuarioService from '../services/CriarUsuarioService';

const usuariosRouter = Router();

//metodo responsavel por criar um usuario no sistma
usuariosRouter.post('/', async (request, response) => {

    try{

        const {  nome, login, email, senha } = request.body;

        const criarUsuarioService = new CriarUsuarioService();

        const usuario = await criarUsuarioService.execute({
            nome,
            login,
            email,
            senha
        });

        //retira o retorno da senha
        delete usuario.senha;

        return response.json(usuario);

    }catch(err){
        return response.status(400).json({ error: err.message });
    }
});

//método responsável por listar todas as doações realizadas
usuariosRouter.get('/', async (request, response) => {

    const usuarioRepository = getCustomRepository(UsuarioRepository);

    const usuarios = await usuarioRepository.find();

    return response.json(usuarios);
});


export default usuariosRouter;
