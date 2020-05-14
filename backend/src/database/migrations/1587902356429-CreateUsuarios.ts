import {MigrationInterface, QueryRunner, Table} from "typeorm";

/**
 * Migration responsável por criar a tabela de usuarios.
 */
export default class CreateUsuarios1587902356429 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

        await queryRunner.createTable(
            new Table({
                name: "TB_USUARIO",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                      },
                      {
                          name: 'nome',
                          type: 'varchar',
                          isNullable: false,
                      },
                      {
                        name: 'login',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true
                      },
                      {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true
                      },
                      {
                        name: 'avatar',
                        type: 'varchar',
                        isNullable: true,
                      },
                      {
                        name: 'senha',
                        type: 'varchar',
                        isNullable: false,
                      },
                      {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                      },
                      {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                      },
                ]
            })
        );
    } 

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('TB_USUARIO');

    }

}
