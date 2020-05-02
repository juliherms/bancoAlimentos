import { getRepository } from 'typeorm';
import Usuario from '../models/Usuario';
import uploadConfig from '../config/upload';
import path from 'path';
import fs from 'fs';
import UsuarioRepository from '../repositories/UsuarioRepository';

interface RequestDTO {
    usuarioId: string;
    avatarFilename: string;
}

class AtualizaUsuarioAvatarService {

    /**
     * Método responsável por atualizar o avatar do usuário.
     * @param param0 
     */
    public async execute({ usuarioId, avatarFilename }: RequestDTO) : Promise<Usuario> {

        const usuariosRepository = getRepository(Usuario);

        const usuario = await usuariosRepository.findOne(usuarioId);

        if(!usuario) {
            throw new Error('Apenas usuarios logados podem alterar o avatar');
        }

        if(usuario.avatar){
            
            const usuarioAvatarFilePath = path.join(uploadConfig.directory, usuario.avatar);
            const usuarioAvatarFileExists = await fs.promises.stat(usuarioAvatarFilePath);
            //se o avatar já existe...apaga
            if(usuarioAvatarFileExists){
                await fs.promises.unlink(usuarioAvatarFilePath);
            }

        }

        usuario.avatar = avatarFilename;
        //salva ou atualiza o usuario
        await usuariosRepository.save(usuario);
        return usuario;
    }
}

export default AtualizaUsuarioAvatarService;