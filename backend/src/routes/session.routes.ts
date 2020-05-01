import { Router } from 'express';
import AutenticacaoUsuarioService from '../services/AutenticacaoUsuarioService';

const sessionsRouter = Router();

/**
 * Metodo responsavel por autenticar um usuario.
 */
sessionsRouter.post('/', async (request, response) => {

    try{

        const { login, senha } = request.body;
        const autenticacaoUsuario = new AutenticacaoUsuarioService();

        const { usuario } = await autenticacaoUsuario.execute({
            login,
            senha,
        });

        delete usuario.senha;

        return response.json({ usuario });

    } catch(err) {
        return response.status(400).json({ error: err.message });
    }
});

export default sessionsRouter;