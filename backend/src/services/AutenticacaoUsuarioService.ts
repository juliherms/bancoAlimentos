import { getRepository } from 'typeorm';
import { hash, compare } from 'bcryptjs';
import Usuario from '../models/Usuario';

interface RequestDTO {
    login: string;
    senha: string;
}

/**
 * Classe responsavel por concentrar a regra de negocio da autenticacao de um usuario.
 */
class AutenticacaoUsuarioService {

   
    public async execute({ login, senha }: RequestDTO): Promise<{usuario:Usuario}>{

        const usuariosRepository = getRepository(Usuario);
        const usuario = await usuariosRepository.findOne({ where: { login } });

        if(!usuario){
            throw new Error('Login ou Senha incorreta');
        }

        const senhaMatched = await compare(senha,usuario.senha);

        if(!senhaMatched){
            throw new Error('Login ou Senha incorreta');
        }

        return {
            usuario,
        };
    }

}

export default AutenticacaoUsuarioService;