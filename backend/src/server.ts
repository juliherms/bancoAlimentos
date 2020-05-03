import 'reflect-metadata'; //necessário devido ao typeORM

import express, { json } from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

import './database';

const app = express();

app.use(json());
app.use('/files',express.static(uploadConfig.directory)); //torna a exibicao estática.
app.use(routes);

app.listen(3333, () => {
    console.log('Server started on port 3333!')
});