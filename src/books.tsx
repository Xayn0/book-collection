import { Avatar, Card, ConfigProvider, theme } from "antd";
import type { SearchTerm } from "./search-term";
import type { Book } from "./book";
import { useNavigate } from "react-router";

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

        .map((book) => {
          return (
            <Card
              onClick={() => navigate(`/book/${book.id}`)}
              style={{ width: 220, height: 200, cursor: "pointer" }}
              cover={
                <img
                  src={book.cover}
                  style={{ width: 220, height: 100, objectFit: "cover" }}
                />
              }
            >
              <Card.Meta
                avatar={<Avatar src={book.author.image} />}
                title={book.title}
                description={book.author.firstName + " " + book.author.lastName}
              />
            </Card>
          );
        })}
    </div>
  );
}
