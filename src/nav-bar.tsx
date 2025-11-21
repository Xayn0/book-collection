
import { SearchQuery } from "./search-query";
import type { SearchTerm } from "./search-term";


type NavProps = {
  term: SearchTerm;
  onChange: React.Dispatch<React.SetStateAction<SearchTerm>>;
};

export function NavBar(props: NavProps) {
  
  return (
    <> 
      <div className="flex justify-between mb-15 ">
        
        <SearchQuery query={props.term} onChange={props.onChange} />
      </div>
    </>
  );
}
