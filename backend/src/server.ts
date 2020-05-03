import 'reflect-metadata'; //necessário devido ao typeORM

import express, { json, Response, Request, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import uploadConfig from './config/upload';

import './database';
import AppError from './errors/AppError';

const app = express();

app.use(json());
app.use('/files',express.static(uploadConfig.directory)); //torna a exibicao estática.
app.use(routes);

//tratamento de exceções
app.use((err: Error, request:Request, response:Response, next: NextFunction) => {

    //exceptions conhecidas
    if(err instanceof AppError){

        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    //exceptions não conhecidas
    console.log(err);
    
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});

app.listen(3333, () => {
    console.log('Server started on port 3333!')
});