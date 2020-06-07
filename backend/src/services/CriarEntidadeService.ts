import Entidade from '../models/Entidade';
import { getCustomRepository } from 'typeorm';
import EntidadeRepository from '../repositories/EntidadeRepository';

interface RequestDTO {
    nome: string;
    latitude: number;
    longitude: number;
    cidade: string;
    uf:string;
    email: string;
    descricao: string;
    idUsuario: string;
}

/**
 * Classe responsavel por concentrar a regra de negócios para 
 * criação de uma entidade
 */
class CriarEntidadeService { 

    /**
     * Metodo responsavel por criar uma entidade no sistema verificando regra de negócios
     * 
     */    
    public async execute({ nome, latitude, longitude, cidade, uf, email, descricao, idUsuario } : RequestDTO) : Promise<Entidade> {


        const entidadeRepository = getCustomRepository(EntidadeRepository);

       
        //cria a entidade
        const entidade = entidadeRepository.create({
           nome,
           latitude,
           longitude,
           cidade,
           uf,
           email,
           descricao,
           usuario_id: idUsuario
        });

        //salva no banco de dados
        await entidadeRepository.save(entidade);

        delete entidade.created_at;
        delete entidade.updated_at;

        return entidade;
    }
}

export default CriarEntidadeService;
