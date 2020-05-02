import Doacao from '../models/Doacao';
import { getCustomRepository } from 'typeorm';
import DoacaoRepository from '../repositories/DoacaoRepository';

interface RequestDTO {
    idUsuario: string;
    valor: number;
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
    public async execute({ idUsuario, valor } : RequestDTO) : Promise<Doacao> {


        const doacaoRepository = getCustomRepository(DoacaoRepository);

       
        //cria a doacao
        const doacao = doacaoRepository.create({
           valor,
           usuario_id: idUsuario
        });
        //salva no banco de dados
        await doacaoRepository.save(doacao);

        delete doacao.created_at;
        delete doacao.updated_at;
        


    
        return doacao;
    }
}

export default CriarDoacaoService;