import { useState } from "react";
import { zIndex } from "../../utils/z-index";
import { DownOutlined } from "@ant-design/icons";

type DropdownProps = {
  options: string[];
  onChange: (option: string) => void;
  value: string;
  placeholder: string;
};

function getMaxLength(options: string[], placeholder: string) {
  const lengths = [...options, placeholder].map((x) => x.length);
  return Math.max(...lengths);
}

export function Dropdown(props: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const max = getMaxLength(props.options, props.placeholder);

  return (
    <div className="relative text-2xl">
      <div
        className="flex justify-between gap-4 bg-gray-950 rounded-md pl-3  "
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-gray-300" style={{ width: `${max}ch` }}>
          {props.value || props.placeholder}
        </div>

        <div className=" bg-gray-900 pr-3 pl-3 rounded-r-md  text-cyan-700 ">
          <div
            style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
            className="duration-200"
          >
            <DownOutlined />
          </div>
        </div>
      </div>

      <div
        className={`absolute w-full bg-gray-900 z-10 rounded-md duration-200 `} //! Changed This back to z-10 because the zIndex.dropdown doesn't always work for some reason
        style={{
          top: "calc(100% + 10px)",
          color: "#ccc",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          // zIndex: 10,
        }}
      >
        {props.options.map((option) => (
          <div
            className="mb-2 text-2xl  p-1  pl-3 hover:opacity-80 cursor-pointer w-full border-b-1 "
            onClick={() => {
              props.onChange(option);
              setIsOpen(false);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
