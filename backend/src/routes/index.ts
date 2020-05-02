import { Router } from 'express';
import usuariosRouter from './usuario.routes';
import sessionsRouter from './session.routes';
import doacoesRouter from './doacao.routes';

//representa a classe responsável pelas rotas no sistema.
const routes = Router();

//concentra todos os endpoints de sessao
routes.use('/sessions',sessionsRouter);
//concentra todos os endpoints de usuarios
routes.use('/usuarios',usuariosRouter);
//concentra todos os endpoints de doacoes
routes.use('/doacoes',doacoesRouter);

export default routes;