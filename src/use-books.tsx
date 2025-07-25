import { useState, useEffect } from "react";
import type { Book } from "./book";
import axios, { AxiosError } from "axios";
import { api } from "./api/api-provider";

export function useBooks() {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState("");

  function loadBooks() {
    setIsLoading(true);
    setError("");

    api
      .getAllBooks()
      .then(setBooks)
      .catch((e: AxiosError) =>
        setError((e.response?.data as string) ?? e.message)
      )
      .finally(() => setIsLoading(false));
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
