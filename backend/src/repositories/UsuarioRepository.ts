import Usuario from '../models/Usuario';
import { EntityRepository, Repository } from 'typeorm';

/**
 * Classe responsável por armzenar os dados de usuario em banco de dados
 */
@EntityRepository(Usuario)
class UsuarioRepository extends Repository<Usuario> {

    /**
     * Metodo responsável por pesquisar um usuario por login informado.
     * @param login 
     */
   public async findByLogin(login: string): Promise<Usuario | null> {

       const findUsuario = await this.findOne({
           where: { login },
       });

       return findUsuario || null;
   }

}

export default UsuarioRepository;