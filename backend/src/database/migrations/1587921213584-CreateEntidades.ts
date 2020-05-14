import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateEntidades1587921213584 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "TB_ENTIDADE",
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
                        name: 'descricao',
                        type: 'varchar',
                        isNullable: false
                      },
                      {
                        name: 'usuario_id',
                        type: 'uuid',
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

        queryRunner.createForeignKey('TB_ENTIDADE', new TableForeignKey({
            columnNames: ['usuario_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'TB_USUARIO',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('TB_ENTIDADE');
    }
    

}
