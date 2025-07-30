import { Navigate, redirect, useNavigate, useParams } from "react-router";
import type { Book } from "./book";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { api } from "./api/api-provider";
import { LoadingView } from "./loading-page";
import { ErrorView } from "./error-view";
import { Button } from "antd";
import { Page404 } from "./page-404";
import { BookView } from "./book-view";

export function BookPage() {
  const { bookId } = useParams<{ bookId: string }>();

  const { isLoading, error, book, refetch } = useBook(bookId);

  if (isNaN(Number(bookId))) {
    return <Page404 />;
  }

  if (isLoading) return <LoadingView />;

  if (error || !book)
    return (
      <ErrorView
        extra={
          <Button type="primary" onClick={refetch}>
            Retry
          </Button>
        }
        type={error}
        message={error}
      />
    );

  return <BookView book={book} />;
}
function useBook(bookId: string | undefined) {
  const [book, setBook] = useState<Book | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function loadBook() {
    if (isNaN(Number(bookId)) || !bookId) return;
    setError("");
    setIsLoading(true);

    api
      .getBookById(bookId)
      .then(setBook)
      .catch((e: AxiosError) => {
        setError(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    loadBook();
  }, [bookId]);

  return {
    isLoading,
    error,
    book,
    refetch: loadBook,
  };
}
