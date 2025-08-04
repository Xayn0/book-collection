import { Button } from "antd";
import { SearchQuery } from "./search-query";
import type { SearchTerm } from "./search-term";
import { NewItem } from "./NewItem";

type NavProps = {
  term: SearchTerm;
  onChange: React.Dispatch<React.SetStateAction<SearchTerm>>;
};

export function NavBar(props: NavProps) {
  //
  return (
    <>
      <div className="flex justify-between mb-15 ">
        <NewItem />
        <SearchQuery query={props.term} onChange={props.onChange} />
      </div>
    </>
  );
}
