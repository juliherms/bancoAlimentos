import path from 'path';
import multer from 'multer';
import crypto from 'crypto';

/**
 * Config responsável por configurar o multer para recebimento de upload de arquivos
 */

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFolder,
  storage: multer.diskStorage({
    //amazenando os arquivos dentro da estrutura
    destination: tmpFolder,
    filename(request, file, callback) {
      //não deixa criar arquivos com o mesmo nome
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const filename = `${fileHash}-${file.originalname}`;
      return callback(null, filename);
    },
  }),
};
