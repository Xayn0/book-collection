import { Input } from "antd";
import type { SearchTerm } from "./search-term";
import { Dropdown } from "./ui/dropdown/dropdown";

type Props = {
  query: SearchTerm;
  onChange: (query: SearchTerm) => void;
};

const genres = [
  "none",
  "classic",
  "fantasy",
  "crime",
  "thriller",
  "non-fiction",
  "science fiction",
  "biography",
  "history",
  "romance",
  "young adult",
  "mystery",
  "self-help",
  "horror",
  "adventure",
];

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
    </div>
  );
}
