import { Request, Response } from "express";
import { BookRepository } from "../repositories/BookRepository";

export class BookController {
  static async create(req: Request, res: Response) {
    const { title, pages, isbn, company } = req.body;

    if (!title) {
      res.status(400).json({ message: "O título é obrigatório" });
    }
    if (!isbn) {
      res.status(400).json({ message: "O ISBN é obrigatório" });
    }
    if (!company) {
      res.status(400).json({ message: "O nome da editora é obrigatório" });
    }

    try {
      const book = BookRepository.create({
        title,
        pages,
        isbn,
        company,
      });

      await BookRepository.save(book);
      res.status(201).json({ book });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const books = await BookRepository.find();
      res.status(200).json(books);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { _id } = req.params;
      const book = await BookRepository.findOneBy({ id: Number(_id) });

      if (!book) {
        res.status(404).json({ message: "Livro não localizado!" });
      } else {
        res.status(200).json(book);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { _id } = req.params;
      const { title, pages, isbn, company } = req.body;
      const book = await BookRepository.findOneBy({ id: Number(_id) });

      if (!book) {
        res.status(404).json({ message: "Livro não localizado" });
      } else {
        book.title = title;
        book.pages = pages;
        book.isbn = isbn;
        book.company = company;

        await BookRepository.save(book);
        res.status(200).json(book);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async remove(req: Request, res: Response) {
    try {
      const { _id } = req.params;
      const book = await BookRepository.findOneBy({ id: Number(_id) });

      if (!book) {
        res.status(404).json({ message: "Livro não localizado" });
      } else {
        await BookRepository.remove(book);
        res.status(200).json({ message: "Livro excluído com sucesso!" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
