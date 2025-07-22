import { useEffect, useState } from "react";
import type { SearchTerm } from "./search-term";
import {
  Avatar,
  Button,
  Card,
  ConfigProvider,
  Flex,
  Grid,
  Input,
  theme,
} from "antd";
import type { Book } from "./book";
import { Books } from "./books";
import { SearchQuery } from "./search-query";

export function Program() {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState("");
  const [query, setQuery] = useState<SearchTerm>({
    name: "",
    genre: "",
  });

  function loadBooks() {
    setIsLoading(true);
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((books) => {
        setBooks(books);
        setError("");
      })
      .catch((e) => setError("Some error"))
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <>
      {isLoading && <div>Loading</div>}

      {error && (
        <>
          <div className="bg-red-700 text-white">{error}</div>
          <button onClick={loadBooks}>Update</button>
        </>
      )}

      {!isLoading && !error && (
        <>
          <SearchQuery query={query} onChange={setQuery} />{" "}
          <Books query={query} books={books} />
        </>
      )}
    </>
  );
}
