import { MigrationInterface, QueryRunner } from "typeorm";

export class RefillMig1764552842925 implements MigrationInterface {
    name = 'RefillMig1764552842925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."refill_entity_type_enum" AS ENUM('empty', 'full')`);
        await queryRunner.query(`CREATE TABLE "refill_entity" ("refill" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "distance" integer NOT NULL, "email_sent" boolean NOT NULL DEFAULT false, "type" "public"."refill_entity_type_enum" NOT NULL, CONSTRAINT "PK_57dacbe477e9fa70aa7226d6a59" PRIMARY KEY ("refill"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "refill_entity"`);
        await queryRunner.query(`DROP TYPE "public"."refill_entity_type_enum"`);
    }

}
