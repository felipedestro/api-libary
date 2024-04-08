import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1712573274477 implements MigrationInterface {
    name = 'Default1712573274477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "title" text NOT NULL, "pages" integer, "isbn" bigint NOT NULL, "company" text NOT NULL, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "books"`);
    }

}
