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
      <div>
        <div className="flex justify-between items-center pt-5">
          <img
            src={props.book.cover}
            alt="Photo is Loading"
            className="w-82 h-110  border-3 rounded-md "
          />
          <div className=" w-250 h-100 pr-18">
            <Typography>
              <Typography.Title>{props.book.title}</Typography.Title>

              <Typography.Paragraph style={{ fontSize: 18 }}>
                {props.book.description}
              </Typography.Paragraph>

              <Title level={2}> About the author </Title>

              <Paragraph style={{ fontSize: 17 }}>{lorem3}</Paragraph>

              <button
                onClick={() => navigate(Nav.base)}
                className="text-gray-900 bg-white border border-gray-500 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md cursor-pointer text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-900 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Press to exit...
              </button>

              <Divider />
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
const lorem3 =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam id, minus corrupti atque sed nisi optio perspiciatis incidunt distinctio inventore earum debitis. Ex dignissimos dolore necessitatibus. Deleniti aut modi facilis!In dignissimos maxime natus. Ducimus, illum culpa tempore tempora nemo accusamus fugiat iusto distinctio incidunt officia cum eos modi ullam, perferendis nisi harum pariatur magnam vitae doloribus quod voluptates autem.Odio, impedit! Fugiat quas debitis sit excepturi laborum voluptatum distinctio dolorem expedita consequuntur maxime vel nesciunt, nam doloribus placeat, a unde assumenda. Optio nostrum nihil nesciunt suscipit nemo at aspernatur?";
