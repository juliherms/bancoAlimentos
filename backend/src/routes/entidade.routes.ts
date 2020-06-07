import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CriarEntidadeService from '../services/CriarEntidadeService';

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

export default entidadesRouter;

