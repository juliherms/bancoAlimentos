import { MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateEntidades1587921213584 implements MigrationInterface {

    /**
     * Funcao responsável por criar as tabelas no banco
     */
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
                        name: 'latitude',
                        type: 'decimal',
                        precision: 10,
                        scale: 2,
                      },
                      {
                        name: 'longitude',
                        type: 'decimal',
                        precision: 10,
                        scale: 2,
                      },
                      {
                        name: 'cidade',
                        type: 'varchar',
                        isNullable: false
                      },
                      {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false
                      },
                      {
                        name: 'uf',
                        type: 'varchar',
                        isNullable: false
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

    /**
     * Funcao responsável por deletar os dados do banco
     */
    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('TB_ENTIDADE');
    }
    

}
