import Entidade from '../models/Entidade';
import { EntityRepository, Repository } from 'typeorm';

/**
 * Classe responsável por armzenar os dados de uma entidade em banco de dados
 */
@EntityRepository(Entidade)
class EntidadeRepository extends Repository<Entidade> {

    
}

export default EntidadeRepository;