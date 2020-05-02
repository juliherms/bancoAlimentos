import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

/**
 * Migration resonsavel por criar a tabela de Docoes
 */
export class CreateDoacoes1588422896519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

        await queryRunner.createTable(
            new Table({
                name: "TB_DOACAO",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                      },
                      {
                        name: 'usuario_id',
                        type: 'uuid',
                        isNullable: false,
                      },
                      {
                        name: 'data',
                        type: 'timestamp',
                        default: 'now()',
                      },
                      {
                        name: 'valor',
                        type: 'decimal',
                        precision: 10,
                        scale: 2,
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

        queryRunner.createForeignKey('TB_DOACAO', new TableForeignKey({
            columnNames: ['usuario_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'TB_USUARIO',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('TB_DOACAO');
    }

}
