import {MigrationInterface, QueryRunner, Table} from "typeorm";


export class item1591542202695 implements MigrationInterface {

    /**
     * Funcao responsável por criar as tabelas no banco
     */
    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.createTable(
            new Table({
                name: "TB_ITEM",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                      },
                      {
                          name: 'titulo',
                          type: 'varchar',
                          isNullable: false,
                      },
                      {
                        name: 'imagem',
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

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('TB_ITEM');
    }

}
