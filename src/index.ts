import * as express from "express";
import { AppDataSource } from "./data-source";

import { books } from "./routes/books-route";

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());

    const PORT = process.env.PORT || 3000;

    app.use(books);

    app.listen(PORT);
  })
  .catch((error) => console.log(error));
