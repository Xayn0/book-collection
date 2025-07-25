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
  Result,
  theme,
} from "antd";
import { Books } from "./books";
import { SearchQuery } from "./search-query";
import { useBooks } from "./use-books";
import { ErrorView } from "./error-view";
import { LoadingView } from "./loading-page";

export function MainPage() {
  const { books, error, isLoading, refetch } = useBooks();
  const [query, setQuery] = useState<SearchTerm>({
    name: "",
    genre: "",
  });

  if (isLoading) return <LoadingView />;

  if (error)
    return (
      <ErrorView
        extra={
          <Button type="primary" onClick={refetch}>
            Retry
          </Button>
        }
        type="somthim"
        message="Nothing for now"
      />
    );

  return (
    <>
      <SearchQuery query={query} onChange={setQuery} />{" "}
      <Books query={query} books={books} />
    </>
  );
}
