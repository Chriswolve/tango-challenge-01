interface MovieSearchProps {
  query: string;
  onQueryChange: (query: string) => void;
  onSearch: () => void;
}


const MovieSearch:React.FC<MovieSearchProps> = ({
  query,
  onQueryChange,
  onSearch
}) => {
  
  return (
    <div className="flex gap-2 pb-3">
      <input type="text" value={query} onChange={(e)=>onQueryChange(e.target.value)} 
      className="w-full p-2 rounded-lg border border-stone-600 bg-zinc-700 text-white"/>
      <button className="px-4 py-2 bg-indigo-700 text-white rounded-lg" onClick={onSearch}>Search</button>
     
    </div>
  );
}

export default MovieSearch;
