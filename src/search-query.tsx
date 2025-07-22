import { ConfigProvider, Input, theme } from "antd";
import type { SearchTerm } from "./search-term";

type Props = {
  query: SearchTerm;
  onChange: (query: SearchTerm) => void;
};

export function SearchQuery({ query, onChange }: Props) {
  return (
    <div className="w-64 h-11 m-auto mt-8 mb-8">
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <Input
          className="text-green-400 w-full" // Fixed width (w-3 was too small)
          size="middle"
          placeholder="Search books..."
          value={query.name}
          onChange={(e) => onChange({ ...query, name: e.target.value })}
        />
      </ConfigProvider>
    </div>
  );
}
