import { Router } from "express";
import { BookController } from "../controllers/BookController";

export const books = Router();

books.post("/livros", BookController.create);

books.get("/livros", BookController.getAll);

books.get("/livros/:_id", BookController.getById);

books.put("/livros/:_id", BookController.update);

books.delete("/livros/:_id", BookController.remove);
