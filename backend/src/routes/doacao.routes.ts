import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import DoacaoRepository from '../repositories/DoacaoRepository';
import CriarDoacaoService from '../services/CriarDoacaoService';
import garantirAutenticacao from '../middlewares/garantirAutenticacao';

const doacoesRouter = Router();

doacoesRouter.use(garantirAutenticacao);

/**
 * Método responsavel por criar uma doacao no sistma 
 */
doacoesRouter.post('/', async (request, response) => {

    const idUsuario = request.usuario.id;

    const { valor } = request.body;

    const criarDoacaoService = new CriarDoacaoService();

    const doacao = await criarDoacaoService.execute({
        idUsuario,
        valor
    });

    return response.json(doacao);
   
});

/**
 * Metodo responsavel por listar todas as doacoes no sistema
 */
doacoesRouter.get('/', async (request,response) => {

    const doacoesRepository = getCustomRepository(DoacaoRepository)
    const doacoes = await doacoesRepository.find();
    return response.json(doacoes);
});

export default doacoesRouter;
