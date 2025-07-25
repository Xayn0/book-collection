import { Navigate, redirect, useNavigate, useParams } from "react-router";
import type { Book } from "./book";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { api } from "./api/api-provider";
import { LoadingView } from "./loading-page";
import { ErrorView } from "./error-view";
import { Button } from "antd";
import { Page404 } from "./page-404";

export function BookView() {
  const { bookId } = useParams<{ bookId: string }>();
  // const [book, setBook] = useState<Book | null>();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isNaN(Number(bookId)) || !bookId) return;

  //   api.getBookById(bookId).then(setBook);
  // }, [bookId]);

  const { isLoading, error, book, refetch } = useBook(bookId);

  if (isNaN(Number(bookId))) {
    return <Page404 />;
  }

  if (isLoading) return <LoadingView />;

  if (error)
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

  return (
    <>
      <pre>{JSON.stringify(book, null, 2)}</pre>
    </>
  );
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
