import { Input } from "antd";
import type { SearchTerm } from "./search-term";
import { Dropdown } from "./ui/dropdown/dropdown";

type SearchProps = {
  query: SearchTerm;
  onChange: (query: SearchTerm) => void;
};

const genres = [
  "none",
  "classic",
  "fan",
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

export function SearchQuery({ query, onChange }: SearchProps) {
  return (
    <div className="flex w-[40%] gap-10 items-center h-12 ">
      <Input
        className="max-w-80"
        size="large"
        placeholder="Search books..."
        value={query.name}
        onChange={(e) => onChange({ ...query, name: e.target.value })
      }
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
