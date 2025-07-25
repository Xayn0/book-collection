import axios from "axios";
import type { Book } from "../book";

export const api = {
  getAllBooks: () =>
    axios.get<Book[]>("http://localhost:3000/books").then((resp) => resp.data),

  getBookById: (bookId: string) =>
    axios
      .get<Book>(`http://localhost:3000/books/${bookId}`)
      .then((res) => res.data),
};
