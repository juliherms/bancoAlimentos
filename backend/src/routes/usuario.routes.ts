import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import  garantirAutenticacao  from '../middlewares/garantirAutenticacao';
import multer from 'multer';
import uploadConfig from '../config/updload';

import UsuarioRepository from '../repositories/UsuarioRepository';
import CriarUsuarioService from '../services/CriarUsuarioService';
import updload from '../config/updload';

const usuariosRouter = Router();
const upload = multer(uploadConfig);

/**
 * Metodo responsavel por atualizar o avatar do usuario
 */
usuariosRouter.patch('/', garantirAutenticacao, upload.single('avatar'), async(request, response) => {

    return response.json({ ok: true });
})

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
