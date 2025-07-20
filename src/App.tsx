import { useState } from "react";

import { Avatar, Button, Card, Flex, Grid } from "antd";
import type { Book } from "./book";
import { defaultBooks } from "./data";

export function MainPage() {
  const [books, setBooks] = useState<Book[]>(defaultBooks);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}>
      {books.map((book) => {
        return (
          <Card
            cover={<img alt="example" src={book.cover} />}
          >
            <Card.Meta
              avatar={<Avatar src={book.cover} />}
              title={book.title}
              description={book.author.firstName + " " + book.author.lastName}
            />
          </Card>
        );
      })}
    </div>
  );
}
