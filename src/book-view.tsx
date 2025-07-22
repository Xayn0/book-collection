import { Navigate, redirect, useParams } from "react-router";
import type { Book } from "./book";
import { useEffect, useState } from "react";

export function BookView() {
  const { bookId } = useParams<{ bookId: string }>();
  const [book, setBook] = useState<Book | null>();

  useEffect(() => {
    fetch(`http://localhost:3000/books/${bookId}`)
      .then((res) => res.json())
      .then((book) => {
        setBook(book);
      });
  }, []);
  if (isNaN(Number(bookId))) {
    return <Navigate replace to="/" />;
  }

  return (
    <>
      <pre>{JSON.stringify(book, null, 2)}</pre>
    </>
  );
}
