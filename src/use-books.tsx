import { useState, useEffect } from "react";
import type { Book } from "./book";

export function useBooks() {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState("");
// why not just call it here , or maybe just the code without wrapping it with a function
  function loadBooks() {
    setIsLoading(true);
    setError("");
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((books) => {
        setBooks(books);
        setError("");
      })
      .catch((e) => setError("Fetch Error"))
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return {
    isLoading,
    books,
    error,
    refetch: loadBooks,
  };
}
