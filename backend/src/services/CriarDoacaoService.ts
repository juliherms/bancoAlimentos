import Doacao from '../models/Doacao';
import { getCustomRepository } from 'typeorm';
import DoacaoRepository from '../repositories/DoacaoRepository';

interface RequestDTO {
    idUsuario: string;
    data: string;
    valor: Number;
}

/**
 * Classe responsavel por concentrar a regra de negócios para 
 * criação de uma doacao
 */
class CriarDoacaoService {

    /**
     * Metodo responsavel por criar um usuario no sistema verificando regra de negócios
     * @param param0 
     */    
    public async execute({ idUsuario, data, valor } : RequestDTO) : Promise<Doacao> {


        const doacaoRepository = getCustomRepository(DoacaoRepository);

        //cria o usuario
        const doacao = doacaoRepository.create({
            usuario_id : idUsuario,
            data,
            valor
        });

        //salva no banco de dados
        await doacaoRepository.save(doacao);
    
        return doacao;
    }
}

export default CriarDoacaoService;