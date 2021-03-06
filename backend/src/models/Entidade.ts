import { 
        Entity,
        Column,
        PrimaryGeneratedColumn,
        CreateDateColumn,
        UpdateDateColumn,
        JoinColumn,
        ManyToOne} from 'typeorm'
import Usuario from './Usuario';
import ColumnNumericTransformer from '../database/transformers/ColumnNumericTransformer';


/**
 * Classe responsável por representar uma entidade no sistema.
 * A entidade pode doar como também pode receber doação.
 */
@Entity('TB_ENTIDADE')
class Entidade {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    nome: string;

    @Column('numeric', {
        precision: 2,
        scale: 10,
        transformer: new ColumnNumericTransformer(),
      })
    latitude: number;

    @Column('numeric', {
        precision: 2,
        scale: 10,
        transformer: new ColumnNumericTransformer(),
      })
    longitude: number;

    @Column()
    cidade: string;

    @Column()
    email: string;

    @Column()
    uf: string;
    
    @Column()
    descricao:string;

    @Column()
    usuario_id:string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'usuario_id'})
    usuario: Usuario;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Entidade;