import * as express from "express";
import { AppDataSource } from "./data-source";

import { books } from "./routes/books-route";

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());

    app.use(books);

    app.listen(process.env.PORT, () => {
      console.log(process.env.PORT);
    });
  })
  .catch((error) => console.log(error));
