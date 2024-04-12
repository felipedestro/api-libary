"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: ["../**/entities/*.{ts, js}"],
    migrations: ["/../**/migrations/*.{ts, js}"],
});
//# sourceMappingURL=data-source.js.map