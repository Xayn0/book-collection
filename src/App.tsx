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
import { Books } from "./books";
import { SearchQuery } from "./search-query";
import { useBooks } from "./use-books";

export function Program() {
  const { books, error, isLoading, refetch } = useBooks();
  const [query, setQuery] = useState<SearchTerm>({
    name: "",
    genre: "",
  });

  if (isLoading) return <div>Loading</div>;

  if (error)
    return (
      <>
        <div className="bg-red-700 text-white">{error}</div>
        <button onClick={refetch}>Update</button>
      </>
    );

  return (
    <>
      <SearchQuery query={query} onChange={setQuery} />{" "}
      <Books query={query} books={books} />
    </>
  );
}
