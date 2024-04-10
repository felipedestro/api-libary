"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var data_source_1 = require("./data-source");
var books_route_1 = require("./routes/books-route");
data_source_1.AppDataSource.initialize()
    .then(function () {
    var app = express();
    app.use(express.json());
    app.use(books_route_1.books);
    app.listen(process.env.PORT);
})
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=index.js.map