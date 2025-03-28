
export type Movie = {
  Title: string;
  Year: string;
  Poster: string;
}

interface MovieCardProps {
  movie: Movie;
}


const MovieCard:React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <li className="flex items-center bg-zinc-800 text-white p-3 rounded shadow-md">
      <img src={movie.Poster} alt={movie.Title} className="w-16 h-24 rounded-lg"/>
      <div className="ml-4">
        <h2 className="text-lg font-bold">{movie.Title}</h2>
        <p className="text-gray-400">{movie.Year}</p>
      </div>
    </li>
  );
}

export default MovieCard;