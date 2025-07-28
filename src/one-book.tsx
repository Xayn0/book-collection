import { ConfigProvider, Divider, theme, Typography } from "antd";
import type { Book } from "./book";

import { useNavigate } from "react-router";
import { Nav } from "./nav";

const { Paragraph, Title, Link } = Typography;

type BookViewProps = {
  book: Book;
};

export function BookView(props: BookViewProps) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between align-middle">
        <img
          src={props.book.cover}
          alt="Photo is Loading"
          className="w-72 h-100 m-auto mr-25"
        />

        <Typography>
          <Typography.Title>{props.book.title}</Typography.Title>

          <Typography.Paragraph>
            In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Typography.Paragraph>

          <Paragraph>{props.book.author.info}</Paragraph>

          <Title level={2}>Guidelines and Resources</Title>

          <Paragraph>
            We supply a series of design principles, practical patterns and high
            quality design resources (), to help people create their product
            prototypes beautifully and efficiently.
          </Paragraph>

          <Paragraph>
            <ul>
              <li>
                <Link href="/docs/spec/proximity">Principles</Link>
              </li>
              <li>
                <Link href="/docs/spec/overview">Patterns</Link>
              </li>
              <li>
                <Link href={Nav.docsResources}>Resource Download</Link>
              </li>
            </ul>
          </Paragraph>

          <Paragraph>
            <button onClick={() => navigate(Nav.base)} className="">
              Press to exit...
            </button>
          </Paragraph>

          <Divider />
        </Typography>
      </div>
    </>
  );
}
