import { Router } from 'express';
import { Double } from 'typeorm';


const notificacoesRouter = Router();



/**
 * Metodo responsavel por listar todas as doacoes no sistema
 */
notificacoesRouter.get('/', async (request,response) => {

    let retorno = [
        {
            read: true,
            _id: 1,
            content: "A Casa da vovó agradece a sua doação",
            user: "1",
            createdAt: '2020-06-01T14:19:22.923Z'
        },
        {
            read: false,
            _id: 2,
            content: "O Sesc lançou uma nova campanha para o dia de São João",
            user: "1",
            createdAt: '2020-05-30T14:19:22.923Z'   
        }

    ];    

    return response.json(retorno);
});


export default notificacoesRouter;
