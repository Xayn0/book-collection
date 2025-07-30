import { Avatar, Card, ConfigProvider, theme } from "antd";
import type { SearchTerm } from "../search-term";
import type { Book } from "../book";
import { Link, useNavigate } from "react-router";
import css from "./books.module.css";

type BookProps = {
  query: SearchTerm;
  books: Book[];
};

export function Books(props: BookProps) {
  return (
    <div className={css.root}>
      {props.books
        .filter((book) =>
          book.title.toLowerCase().includes(props.query.name.toLowerCase())
        )
        .filter((book) =>
          book.genre
            .toLocaleLowerCase()
            .includes(props.query.genre.toLocaleLowerCase())
        )

        .map((book) => {
          return (
            <Link
              to={`/book/${book.id}`}
              style={{
                overflow: "auto",
              }}
            >
              <Card
                style={{
                  cursor: "pointer",
                  borderRadius: 8,
                  fontSize: 16,
                  height: "100%",
                }}
                cover={
                  <img
                    src={book.cover}
                    style={{
                      objectFit: "cover",
                      borderBottom: "solid 1px #333",
                      marginBottom: 14,
                      padding: 2,
                      height: 300,
                    }}
                  />
                }
              >
                <Card.Meta
                  avatar={
                    <Avatar
                      src={book.author.image}
                      style={{ width: 45, height: 45 }}
                    />
                  }
                  title={book.title}
                  description={
                    book.author.firstName + " " + book.author.lastName
                  }
                />
              </Card>
            </Link>
          );
        })}
    </div>
  );
}
