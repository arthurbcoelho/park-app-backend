import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateVaga1750206891632 implements MigrationInterface {
    name = 'CreateVaga1750206891632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vagas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "codigo" character varying NOT NULL, "coberta" boolean NOT NULL, "comportaCamionete" boolean NOT NULL, "isAtiva" boolean NOT NULL, "reservada" boolean NOT NULL, CONSTRAINT "UQ_fde2f177edc90c6f188f7ca149e" UNIQUE ("codigo"), CONSTRAINT "PK_b58a2d48de86b90e87f2a324e54" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vagas"`);
    }

}
