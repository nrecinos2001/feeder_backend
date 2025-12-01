import { MigrationInterface, QueryRunner } from "typeorm";

export class Refill1764555836466 implements MigrationInterface {
    name = 'Refill1764555836466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."refill_type_enum" AS ENUM('empty', 'full')`);
        await queryRunner.query(`CREATE TABLE "refill" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "distance" integer NOT NULL, "email_sent" boolean NOT NULL DEFAULT false, "type" "public"."refill_type_enum" NOT NULL, CONSTRAINT "PK_fd649cbd52bdc8e2f6b90877e16" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "refill"`);
        await queryRunner.query(`DROP TYPE "public"."refill_type_enum"`);
    }

}
