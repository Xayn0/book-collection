import { Button, ConfigProvider, Result, theme } from "antd";
import type { ReactNode } from "react";

type ErrorProps = {
  type: string;
  message: string;
  extra: ReactNode;
};

export function ErrorView(props: ErrorProps) {
  return (
    <div>
      <Result
        status="warning"
        title={`Oops... Looks like there was a ${props.type}`}
        extra={props.extra}
      />
    </div>
  );
}
