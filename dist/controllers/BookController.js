"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
var BookRepository_1 = require("../repositories/BookRepository");
var BookController = /** @class */ (function () {
    function BookController() {
    }
    BookController.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, title, pages, isbn, company, book, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, title = _a.title, pages = _a.pages, isbn = _a.isbn, company = _a.company;
                        if (!title) {
                            res.status(400).json({ message: "O título é obrigatório" });
                        }
                        if (!isbn) {
                            res.status(400).json({ message: "O ISBN é obrigatório" });
                        }
                        if (!company) {
                            res.status(400).json({ message: "O nome da editora é obrigatório" });
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        book = BookRepository_1.BookRepository.create({
                            title: title,
                            pages: pages,
                            isbn: isbn,
                            company: company,
                        });
                        return [4 /*yield*/, BookRepository_1.BookRepository.save(book)];
                    case 2:
                        _b.sent();
                        res.status(201).json({ book: book });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.log(error_1);
                        res.status(500).json({ message: "Internal Server Error" });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BookController.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var books, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, BookRepository_1.BookRepository.find()];
                    case 1:
                        books = _a.sent();
                        if (books.length == 0) {
                            res.status(200).json({ message: "Ainda não livros cadastrado!" });
                        }
                        else {
                            res.status(200).json(books);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        res.status(500).json({ message: "Internal Server Error" });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BookController.getById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, book, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _id = req.params._id;
                        return [4 /*yield*/, BookRepository_1.BookRepository.findOneBy({ id: Number(_id) })];
                    case 1:
                        book = _a.sent();
                        if (!book) {
                            res.status(404).json({ message: "Livro não localizado!" });
                        }
                        else {
                            res.status(200).json(book);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res.status(500).json({ message: "Internal Server Error" });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BookController.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, _a, title, pages, isbn, company, book, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        _id = req.params._id;
                        _a = req.body, title = _a.title, pages = _a.pages, isbn = _a.isbn, company = _a.company;
                        return [4 /*yield*/, BookRepository_1.BookRepository.findOneBy({ id: Number(_id) })];
                    case 1:
                        book = _b.sent();
                        if (!!book) return [3 /*break*/, 2];
                        res.status(404).json({ message: "Livro não localizado" });
                        return [3 /*break*/, 4];
                    case 2:
                        book.title = title;
                        book.pages = pages;
                        book.isbn = isbn;
                        book.company = company;
                        return [4 /*yield*/, BookRepository_1.BookRepository.save(book)];
                    case 3:
                        _b.sent();
                        res.status(200).json(book);
                        _b.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_4 = _b.sent();
                        res.status(500).json({ message: "Internal Server Error" });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    BookController.remove = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, book, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        _id = req.params._id;
                        return [4 /*yield*/, BookRepository_1.BookRepository.findOneBy({ id: Number(_id) })];
                    case 1:
                        book = _a.sent();
                        if (!!book) return [3 /*break*/, 2];
                        res.status(404).json({ message: "Livro não localizado" });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, BookRepository_1.BookRepository.remove(book)];
                    case 3:
                        _a.sent();
                        res.status(200).json({ message: "Livro excluído com sucesso!" });
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_5 = _a.sent();
                        res.status(500).json({ message: "Internal Server Error" });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return BookController;
}());
exports.BookController = BookController;
//# sourceMappingURL=BookController.js.map