"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
var data_source_1 = require("../data-source");
var Book_1 = require("../entities/Book");
exports.BookRepository = data_source_1.AppDataSource.getRepository(Book_1.Book);
//# sourceMappingURL=BookRepository.js.map