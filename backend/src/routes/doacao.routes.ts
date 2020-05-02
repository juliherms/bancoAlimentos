import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import DoacaoRepository from '../repositories/DoacaoRepository';
import CriarDoacaoService from '../services/CriarDoacaoService';
import garantirAutenticacao from '../middlewares/garantirAutenticacao';
import Doacao from '../models/Doacao';

const doacoesRouter = Router();

doacoesRouter.use(garantirAutenticacao);

/**
 * Método responsavel por criar uma doacao no sistma 
 */
doacoesRouter.post('/', async (request, response) => {

    try{

        const idUsuario = request.usuario.id;

        const { valor } = request.body;

        const criarDoacaoService = new CriarDoacaoService();

        const doacao = await criarDoacaoService.execute({
            idUsuario,
            valor
        });

        return response.json(doacao);

    }catch(err){
        return response.status(400).json({ error: err.message });
    }
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
