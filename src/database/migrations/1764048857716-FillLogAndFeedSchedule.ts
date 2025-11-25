import { MigrationInterface, QueryRunner } from "typeorm";

export class FillLogAndFeedSchedule1764048857716 implements MigrationInterface {
    name = 'FillLogAndFeedSchedule1764048857716'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."fill_log_type_enum" AS ENUM('manual', 'automatic')`);
        await queryRunner.query(`CREATE TABLE "fill_log" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "type" "public"."fill_log_type_enum" NOT NULL, CONSTRAINT "PK_a1e2c423c436f66587ccc2581e7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "fill_log"`);
        await queryRunner.query(`DROP TYPE "public"."fill_log_type_enum"`);
    }

}
