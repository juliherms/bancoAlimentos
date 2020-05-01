import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken'
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

        //gera o token
        const token = sign({  },'secret',{
            subject: usuario.id,
            expiresIn: '1d',
        });

        return {
            usuario,
            token
        };
    }

}

export default AutenticacaoUsuarioService;