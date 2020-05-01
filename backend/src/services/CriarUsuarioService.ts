import Usuario from '../models/Usuario';
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import UsuarioRepository from '../repositories/UsuarioRepository';

interface RequestDTO {
    nome: string;
    login: string;
    email: string;
    senha: string;
}

/**
 * Classe responsavel por concentrar a regra de negócios para 
 * criação de um usuário
 */
class CriarUsuarioService {

    /**
     * Metodo responsavel por criar um usuario no sistema verificando regra de negócios
     * @param param0 
     */    
    public async execute({ nome, login, email, senha } : RequestDTO) : Promise<Usuario> {


        const usuarioRepository = getCustomRepository(UsuarioRepository);

    
        const isUsuarioEmailExiste = await usuarioRepository.findOne({
            where: { email },
        });

        //Verifica se o login ja existe
        if(isUsuarioEmailExiste){
            throw Error("O Email informado já existe");
        }

        const isUsuarioLoginExiste = await usuarioRepository.findOne({
            where: { login },
        });

        //Verifica se o login ja existe
        if(isUsuarioLoginExiste){

            throw Error("O Login informa já existe");
        }

        //realiza o hash da senha
        const senhaHast = await hash(senha,8);

        //cria o usuario
        const usuario = usuarioRepository.create({
            nome,
            login,
            email,
            senha: senhaHast
        });

        //salva no banco de dados
        await usuarioRepository.save(usuario);
    
        return usuario;
    }
}

export default CriarUsuarioService;