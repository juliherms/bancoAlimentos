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
 * Classe responsável por representar uma doação no sistema.
 */
@Entity('TB_DOACAO')
class Doacao {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    usuario_id: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'usuario_id'})
    usuario: Usuario;

    @Column('numeric', {
        precision: 7,
        scale: 2,
        transformer: new ColumnNumericTransformer(),
      })
    valor: number;

    @Column('time with time zone')
    data: Date;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

}

export default Doacao;
