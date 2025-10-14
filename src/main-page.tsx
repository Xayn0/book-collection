import { useState } from "react";
import type { SearchTerm } from "./search-term";
import {
  
  Button,

  
} from "antd";
import { Books } from "./books/books";

import { useBooks } from "./use-books";
import { ErrorView } from "./error-view";
import { LoadingView } from "./loading-page";
import { NavBar } from "./nav-bar";

// input

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
        type={error}
        message={error}
      />
    );

  return (
    <>
      <NavBar term={query} onChange={setQuery} />
      <Books query={query} books={books} />
    </>
  );
}
