"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Book_1 = require("../src/entities/Book");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [Book_1.Book],
    migrations: ["/../**/migrations/*.{ts, js}"],
});
//# sourceMappingURL=data-source.js.map