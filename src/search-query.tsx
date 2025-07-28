import { ConfigProvider, Input, theme } from "antd";
import type { SearchTerm } from "./search-term";

type Props = {
  query: SearchTerm;
  onChange: (query: SearchTerm) => void;
};

export function SearchQuery({ query, onChange }: Props) {
  return (
    <div className="w-64 h-11 m-auto mt-8 mb-8">
      <Input
        className="text-green-400 w-full"
        size="middle"
        placeholder="Search books..."
        value={query.name}
        onChange={(e) => onChange({ ...query, name: e.target.value })}
      />
    </div>
  );
}
