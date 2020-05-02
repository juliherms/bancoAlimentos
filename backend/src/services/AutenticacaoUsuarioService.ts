import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken'
import authConfig from '../config/auth';
import Usuario from '../models/Usuario';


interface RequestDTO {
    login: string;
    senha: string;
}

interface ResponseDTO{
    usuario: Usuario;
    token: string;
}

/**
 * Classe responsavel por concentrar a regra de negocio da autenticacao de um usuario.
 */
class AutenticacaoUsuarioService {

   
    public async execute({ login, senha }: RequestDTO): Promise<ResponseDTO>{

        const usuariosRepository = getRepository(Usuario);
        const usuario = await usuariosRepository.findOne({ where: { login } });

        if(!usuario){
            throw new Error('Login ou Senha incorreta');
        }

        const senhaMatched = await compare(senha,usuario.senha);

        if(!senhaMatched){
            throw new Error('Login ou Senha incorreta');
        }

        const { secret, expiresIn } = authConfig.jwt;

        //gera o token
        const token = sign({  },secret,{
            subject: usuario.id,
            expiresIn: expiresIn,
        });

        return {
            usuario,
            token
        };
    }

}

export default AutenticacaoUsuarioService;