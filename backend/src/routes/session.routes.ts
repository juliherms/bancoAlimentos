import { Router } from 'express';
import AutenticacaoUsuarioService from '../services/AutenticacaoUsuarioService';

const sessionsRouter = Router();

/**
 * Metodo responsavel por autenticar um usuario.
 */
sessionsRouter.post('/', async (request, response) => {

    const { email, senha } = request.body;
    const autenticacaoUsuario = new AutenticacaoUsuarioService();

    const { usuario, token } = await autenticacaoUsuario.execute({
        email,
        senha,
    });

    delete usuario.senha;

    return response.json({ usuario, token });

});

export default sessionsRouter;