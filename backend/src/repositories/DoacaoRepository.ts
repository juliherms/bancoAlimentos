import Doacao from '../models/Doacao';
import { EntityRepository, Repository } from 'typeorm';

/**
 * Classe responsável por armzenar os dados de uma doação em banco de dados
 */
@EntityRepository(Doacao)
class DoacaoRepository extends Repository<Doacao> {

    
}

export default DoacaoRepository;