import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitial1750264692738 implements MigrationInterface {
    name = 'CreateInitial1750264692738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "veiculos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "modelo" character varying NOT NULL, "placa" character varying NOT NULL, "cor" character varying NOT NULL, "nomeProprietario" character varying NOT NULL, "contatoProprietario" character varying NOT NULL, "marcaId" integer NOT NULL, "marcaNome" character varying NOT NULL, "tipoId" integer NOT NULL, "tipoNome" character varying NOT NULL, CONSTRAINT "PK_0c3daa1e5d16914bd9e7777cf77" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vagas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "codigo" character varying NOT NULL, "coberta" boolean NOT NULL, "comportaCamionete" boolean NOT NULL, "isAtiva" boolean NOT NULL, "reservada" boolean NOT NULL, CONSTRAINT "UQ_fde2f177edc90c6f188f7ca149e" UNIQUE ("codigo"), CONSTRAINT "PK_b58a2d48de86b90e87f2a324e54" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vagas_ocupadas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "vagaId" uuid NOT NULL, "vagaCodigo" character varying NOT NULL, "veiculoId" uuid NOT NULL, "placaVeiculo" character varying NOT NULL, "horaInicio" TIMESTAMP NOT NULL, "horaFim" TIMESTAMP, "precoHora" numeric(10,2) NOT NULL, "precoTotal" numeric(10,2) NOT NULL, "finalizada" boolean NOT NULL DEFAULT false, "precoFixo" numeric(10,2) NOT NULL, CONSTRAINT "REL_6f4de3d01fe357785d847928d4" UNIQUE ("vagaId"), CONSTRAINT "REL_1a5f54ef638076d93808dc6f6a" UNIQUE ("veiculoId"), CONSTRAINT "PK_7f23b9bd7d94748d436ee1dba84" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_51b8b26ac168fbe7d6f5653e6cf" UNIQUE ("name"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vagas_ocupadas" ADD CONSTRAINT "FK_6f4de3d01fe357785d847928d47" FOREIGN KEY ("vagaId") REFERENCES "vagas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vagas_ocupadas" ADD CONSTRAINT "FK_1a5f54ef638076d93808dc6f6a0" FOREIGN KEY ("veiculoId") REFERENCES "veiculos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vagas_ocupadas" DROP CONSTRAINT "FK_1a5f54ef638076d93808dc6f6a0"`);
        await queryRunner.query(`ALTER TABLE "vagas_ocupadas" DROP CONSTRAINT "FK_6f4de3d01fe357785d847928d47"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "vagas_ocupadas"`);
        await queryRunner.query(`DROP TABLE "vagas"`);
        await queryRunner.query(`DROP TABLE "veiculos"`);
    }

}
