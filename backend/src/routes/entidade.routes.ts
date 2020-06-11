import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CriarEntidadeService from '../services/CriarEntidadeService';
import EntidadeRepository from '../repositories/EntidadeRepository';

const entidadesRouter = Router();


//metodo responsavel por criar uma entidade no sistma
entidadesRouter.post('/', async (request, response) => {

    const {  nome, latitude, longitude, cidade, uf, email, descricao, idUsuario } = request.body;

    const criarEntidadeService = new CriarEntidadeService();

    const entidade = await criarEntidadeService.execute({
        nome,
        latitude,
        longitude,
        cidade,
        uf,
        email,
        descricao,
        idUsuario
    });

    return response.json(entidade);
});

//método responsável por listar todos as entidades cadastradas
entidadesRouter.get('/', async (request, response) => {

    const entidadeRepository = getCustomRepository(EntidadeRepository);

    const entidades = await entidadeRepository.find();

    return response.json(entidades);
});


export default entidadesRouter;

