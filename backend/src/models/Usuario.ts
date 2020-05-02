import { Entity, Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from 'typeorm';

//Representa uma classe de usuario no sistema
@Entity('TB_USUARIO')
class Usuario {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    login: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Usuario;