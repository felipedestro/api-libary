import { Book } from "../entities/Book";

declare global {
  namespace Express {
    export interface Request {
      book: Partial<Book>;
    }
  }
}
