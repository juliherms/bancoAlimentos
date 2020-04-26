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
 * Classe responsável por representar uma entidade no sistema.
 * A entidade pode doar como também pode receber doação.
 */
@Entity('TB_ENTIDADE')
class Entidade {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    nome: string;

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