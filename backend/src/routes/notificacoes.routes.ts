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
            user: "1"
        },
        {
            read: false,
            _id: 1,
            content: "A Casa da vovó agradece a sua doação",
            user: "1"   
        }

    ];    

    return response.json(retorno);
});


export default notificacoesRouter;
