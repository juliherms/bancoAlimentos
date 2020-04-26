import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne} from 'typeorm'
import Usuario from './Usuario';

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

    @Column('time with time zone')
    data: Date;

    @Column()
    valor: Number;

}

export default Doacao;
