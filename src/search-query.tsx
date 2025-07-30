import { ConfigProvider, Input, theme } from "antd";
import type { SearchTerm } from "./search-term";

type Props = {
  query: SearchTerm;
  onChange: (query: SearchTerm) => void;
};

const genres = ["none", "classic", "fantasy", "crime"];

export function SearchQuery({ query, onChange }: Props) {
  return (
    <div className="w-64 h-11 m-auto mt-8 mb-8 ">
      <Input
        className=" w-full"
        size="middle"
        placeholder="Search books..."
        value={query.name}
        onChange={(e) => onChange({ ...query, name: e.target.value })}
      />
      <select
        onChange={(e) => {
          const value = e.target.value;
          onChange({ ...query, genre: value === "none" ? "" : value });
        }}
      >
        {genres.map((x) => (
          <option value={x}>Genre: {x}</option>
        ))}
      </select>
    </div>
  );
}
