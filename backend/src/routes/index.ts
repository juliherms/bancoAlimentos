import { Router } from 'express';
import usuariosRouter from './usuario.routes';

//representa a classe responsável pelas rotas no sistema.
const routes = Router();

//concentra todos os endpoints de usuarios
routes.use('/usuarios',usuariosRouter);

export default routes;