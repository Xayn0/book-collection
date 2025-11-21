import { useState, useRef, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";

type DropdownProps = {
  options: string[];
  onChange: (option: string) => void;
  value: string;
  placeholder: string;
  columns?: number; // Optional number of columns
};

function getMaxLength(options: string[], placeholder: string) {
  const lengths = [...options, placeholder].map((x) => x.length);
  return Math.max(...lengths);
}

export function Dropdown(props: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { columns = 3 } = props; // Default to 3 columns

  const max = getMaxLength(props.options, props.placeholder);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Split options into columns
  const getOptionsByColumn = () => {
    const itemsPerColumn = Math.ceil(props.options.length / columns);
    const columnsArray: string[][] = Array.from({ length: columns }, () => []);
    
    props.options.forEach((option, index) => {
      const columnIndex = Math.floor(index / itemsPerColumn);
      columnsArray[columnIndex].push(option);
    });
    
    return columnsArray;
  };

  const columnsArray = getOptionsByColumn();

  return (
    <div className="relative text-lg h-8" ref={dropdownRef}>
      <div
        className="flex justify-between bg-gray-950 rounded-md pl-3 h-full items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-gray-300" style={{ width: `${max}ch` }}>
          {props.value || props.placeholder}
        </div>

        <div className="bg-gray-900 pr-3 pl-3 rounded-r-md text-cyan-700 h-full flex items-center">
          <div
            style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
            className="duration-200"
          >
            <DownOutlined />
          </div>
        </div>
      </div>

      <div
        className={`absolute w-auto bg-gray-900 z-10 rounded-md duration-200 flex gap-4 p-4 min-w-max`}
        style={{
          top: "calc(100% + 10px)",
          color: "#ccc",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        {columnsArray.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col">
            {column.map((option) => (
              <div
                key={option}
                className="mb-2 text-lg p-1 pl-3 pr-6 hover:opacity-80 cursor-pointer w-full border-b border-gray-700 capitalize whitespace-nowrap"
                onClick={() => {
                  props.onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}