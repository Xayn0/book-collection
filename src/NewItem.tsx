import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Segmented,
  Select,
  TreeSelect,
} from "antd";

import { useState } from "react";

export function NewItem() {
  const [formVisibility, setFormVisibility] = useState(false);
  const [form] = Form.useForm();
  const variant = Form.useWatch("variant", form);
  return (
    <div className=" pl-6 w-[35%] text-gray-400 ">
      <button
        onClick={() => setFormVisibility(true)}
        className="cursor-pointer flex gap-3 justify-center w-[50%] text-4xl hover:opacity-90 h-full items-center rounded-full bg-neutral-900"
      >
        <PlusOutlined />
        <p className="text-2xl">Add a book</p>
      </button>
      <div className="absolute z-10"></div>
    </div>
  );
}
const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
