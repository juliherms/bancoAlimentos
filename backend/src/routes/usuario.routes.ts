import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import  garantirAutenticacao  from '../middlewares/garantirAutenticacao';
import multer from 'multer';
import uploadConfig from '../config/upload';

import UsuarioRepository from '../repositories/UsuarioRepository';
import AtualizaUsuarioAvatarService from '../services/AutalizaUsuarioAvatarService';
import CriarUsuarioService from '../services/CriarUsuarioService';
import updload from '../config/upload';

const usuariosRouter = Router();
const upload = multer(uploadConfig);

/**
 * Metodo responsavel por atualizar o avatar do usuario
 */
usuariosRouter.patch('/avatar', garantirAutenticacao, upload.single('avatar'), async(request, response) => {

    const atualizaUsuarioAvatar = new AtualizaUsuarioAvatarService();

    const usuario = await atualizaUsuarioAvatar.execute({
        usuarioId: request.usuario.id,
        avatarFilename: request.file.filename,
    });

    delete usuario.senha;

    return response.json(usuario);

});

//metodo responsavel por criar um usuario no sistma
usuariosRouter.post('/', async (request, response) => {

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
});

//método responsável por listar todos os usuarios
usuariosRouter.get('/', async (request, response) => {

    const usuarioRepository = getCustomRepository(UsuarioRepository);

    const usuarios = await usuarioRepository.find();

    return response.json(usuarios);
});

//método responsável por atualizar um usuario
usuariosRouter.put('/', async(request, response) => {

    const {  nome  } = request.body;

    response.json("teste");

})


export default usuariosRouter;
