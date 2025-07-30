import { Avatar, Card, ConfigProvider, theme } from "antd";
import type { SearchTerm } from "./search-term";
import type { Book } from "./book";
import { Link, useNavigate } from "react-router";

type BookProps = {
  query: SearchTerm;
  books: Book[];
};

export function Books(props: BookProps) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        gap: 12,
        fontSize: 10,
      }}
    >
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
            <Link to={`/book/${book.id}`}>
              <Card
                style={{
                  width: 260,
                  height: 300,
                  cursor: "pointer",
                  borderRadius: "8px",
                  fontSize: "16px",
                }}
                cover={
                  <img
                    src={book.cover}
                    style={{
                      width: 260,
                      height: 150,
                      objectFit: "cover",
                      borderBottom: "solid 1px #333",
                      marginBottom: 14,
                      padding: 2,
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
