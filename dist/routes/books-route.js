"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.books = void 0;
var express_1 = require("express");
var BookController_1 = require("../controllers/BookController");
exports.books = (0, express_1.Router)();
exports.books.post("/livros", BookController_1.BookController.create);
exports.books.get("/livros", BookController_1.BookController.getAll);
exports.books.get("/livros/:_id", BookController_1.BookController.getById);
exports.books.put("/livros/:_id", BookController_1.BookController.update);
exports.books.delete("/livros/:_id", BookController_1.BookController.remove);
//# sourceMappingURL=books-route.js.map