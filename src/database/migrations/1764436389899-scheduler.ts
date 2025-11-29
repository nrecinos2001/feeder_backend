import { MigrationInterface, QueryRunner } from "typeorm";

export class Scheduler1764436389899 implements MigrationInterface {
    name = 'Scheduler1764436389899'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "feed_schedule" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "hour" character varying(255) NOT NULL, "minute" character varying(255) NOT NULL, CONSTRAINT "PK_670e1c5843592d651dc98f61a9c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "feed_schedule"`);
    }

}
