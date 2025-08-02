import { ConfigProvider, Input, theme } from "antd";
import type { SearchTerm } from "./search-term";
import { Dropdown } from "./ui/dropdown/dropdown";

type Props = {
  query: SearchTerm;
  onChange: (query: SearchTerm) => void;
};

const genres = ["none", "classic", "fantasy", "crime"];

export function SearchQuery({ query, onChange }: Props) {
  return (
    <div className="flex w-[60%] justify-around items-center h-12">
      <Input
        className="max-w-100"
        size="large"
        placeholder="Search books..."
        value={query.name}
        onChange={(e) => onChange({ ...query, name: e.target.value })}
      />
      <Dropdown
        placeholder="Genre"
        options={genres}
        onChange={(value) =>
          onChange({ ...query, genre: value === "none" ? "" : value })
        }
        value={query.genre}
      />
      {/* <select
        onChange={(e) => {
          const value = e.target.value;
          onChange({ ...query, genre: value === "none" ? "" : value });
        }}
      >
        {genres.map((x) => (
          <option value={x}>Genre: {x}</option>
        ))}
      </select> */}
    </div>
  );
}
