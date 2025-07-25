import { Button } from "antd";
import { ErrorView } from "./error-view";
import { useNavigate } from "react-router";

export function Page404() {
  const nav = useNavigate();

  return (
    <ErrorView
      extra={
        <Button type="primary" onClick={() => nav("/")}>
          Main page
        </Button>
      }
      type={"404 Not found"}
      message={"404 Not found"}
    />
  );
}
