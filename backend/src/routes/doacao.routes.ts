import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import DoacaoRepository from '../repositories/DoacaoRepository';
import CriarDoacaoService from '../services/CriarDoacaoService';

const doacoesRouter = Router();

//metodo responsavel por criar uma doacao no sistma
doacoesRouter.post('/', async (request, response) => {

    try{

        const {  idUsuario, data, valor } = request.body;

        const criarDoacaoService = new CriarDoacaoService();

        const doacao = await criarDoacaoService.execute({
            data,
            idUsuario,
            valor
        });

        return response.json(doacao);

    }catch(err){
        return response.status(400).json({ error: err.message });
    }
});


export default doacoesRouter;
