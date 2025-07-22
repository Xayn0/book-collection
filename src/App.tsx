import { useState } from "react";
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
import { defaultBooks } from "./data";
import { Books } from "./books";
import { SearchQuery } from "./search-query";

export function Program() {
  const [books, setBooks] = useState<Book[]>(defaultBooks);
  const [query, setQuery] = useState<SearchTerm>({
    name: "",
    genre: "",
  });

  return (
    <>
      <SearchQuery query={query} onChange={setQuery} />{" "}
      {/* ✅ Stable component */}
      <Books query={query} books={books} />
    </>
  );
}
