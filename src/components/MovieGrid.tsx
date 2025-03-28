
import MovieCard, {Movie} from './MovieCard';

interface MovieGridProps {
  movies: Movie[]
}

const MovieGrid:React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {movies.map((movie: Movie)=>(
        <MovieCard movie={movie}/>
      ))}
    </ul>
  );
}

export default MovieGrid;

